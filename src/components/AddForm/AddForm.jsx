import React, { useContext, useState } from "react";
import { contactContext } from "../../contactsContext";

const AddForm = () => {
  const { addContact } = useContext(contactContext);
  //   console.log(addContact);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  function handleValues() {
    let newContact = {
      name,
      lastName,
      phone,
    };
    if (!name.trim() || !lastName.trim() || !phone.trim()) {
      alert("Заполните поля!");
      return;
    }
    // console.log(newContact);
    addContact(newContact);
    setName("");
    setLastName("");
    setPhone("");
  }
  return (
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
        placeholder="Last name"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="text"
        placeholder="Phone"
      />
      <button onClick={() => handleValues()}>Save new contact</button>
    </div>
  );
};

export default AddForm;
