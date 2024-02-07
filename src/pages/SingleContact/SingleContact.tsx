import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "antd";

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
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setContact(data as Contact));
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
