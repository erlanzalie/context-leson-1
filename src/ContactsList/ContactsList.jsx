import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contactContext } from "../contactsContext";

const ContactsList = () => {
  const { getContacts, contacts, deleteContact } = useContext(contactContext);
  useEffect(() => {
    getContacts();
  }, []);
  const navigate = useNavigate();
  return (
    <div>
      {contacts.map((item) => (
        <div style={{ marginBottom: "30px" }} key={item.id}>
          Name: {item.name}, LastName: {item.lastName}, Phone: {item.phone}
          <button onClick={() => deleteContact(item.id)}>Delete</button>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ContactsList;
