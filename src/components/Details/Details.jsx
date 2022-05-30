import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { contactContext } from "../../contactsContext";

const Details = () => {
  const { getOneContact, oneContact } = useContext(contactContext);
  const params = useParams();
  useEffect(() => {
    getOneContact(params.id);
  }, []);
  return oneContact ? (
    <div>
      <div>Name: {oneContact.name}</div>
      <div>LastName: {oneContact.lastName}</div>
      <div>Phone: {oneContact.phone}</div>
    </div>
  ) : (
    <h1>loading...</h1>
  );
};

export default Details;
