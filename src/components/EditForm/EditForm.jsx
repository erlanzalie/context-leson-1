import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { contactContext } from "../../contactsContext";

const EditForm = () => {
  const { getOneContact, oneContact, updateContact } =
    useContext(contactContext);
  const params = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    getOneContact(params.id);
  }, []);
  useEffect(() => {
    if (oneContact) {
      setName(oneContact.name);
      setLastName(oneContact.lastName);
      setPhone(oneContact.phone);
    }
  }, [oneContact]);
  function handleValues() {
    let editedContact = {
      name,
      lastName,
      phone,
    };
    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("Заполните поля!");
      return;
    }
    updateContact(params.id, editedContact);
    navigate("/contacts");
  }

  return oneContact ? (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Name"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="LastName"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
      />
      <button onClick={() => handleValues()}>Save</button>
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default EditForm;
