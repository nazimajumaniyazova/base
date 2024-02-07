import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    // Fetch contact data from API or local storage
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setContacts(data as Contact[]));
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
            {/* Add table headers for other fields */}
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
