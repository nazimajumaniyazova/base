import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";
import { apiContacts } from "../../api/contacts/apiContacts";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface SingleContactProps {}

const SingleContact: React.FC<SingleContactProps> = () => {
  const { id } = useParams();
  const [contact, setContact] = useState<Contact | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchContacts = async () => {
      if (id) {
        const res = await apiContacts.getContact(id);
        setContact(res as Contact);
      }
    };
    fetchContacts();
  }, [id]);

  if (!contact) {
    return <div>Loading contact...</div>;
  }

  return (
    <div>
      <h1>{contact.name}</h1>
      <p>Email: {contact.email}</p>
      <p>Phone: {contact.phone}</p>
      <Button type="primary" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default SingleContact;
