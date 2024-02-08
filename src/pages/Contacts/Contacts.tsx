import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { apiContacts } from "../../api/contacts/apiContacts";

interface ContactsProps {}

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const Contacts: React.FC<ContactsProps> = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    const fetchContacts = async () => {
      const res = await apiContacts.getContacts();
      setContacts(res as Contact[]);
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h1>Contact List</h1>
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>
                <Link to={`/contacts/${contact.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Contacts;
