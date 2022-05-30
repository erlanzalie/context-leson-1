import React, { useReducer } from "react";
import axios from "axios";

export const contactContext = React.createContext();

const INIT_STATE = {
  contacts: [],
  oneContact: null,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_CONTACTS":
      return { ...state, contacts: action.payload };
    case "GET_ONE_CONTACT":
      return { ...state, oneContact: action.payload };
    default:
      return state;
  }
}
const ContactsContextProvider = ({ children }) => {
  const API = "http://localhost:8000/contacts";
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function addContact(newContact) {
    await axios.post(API, newContact);
    getContacts();
  }

  async function getContacts() {
    let response = await axios(API);
    dispatch({
      type: "GET_CONTACTS",
      payload: response.data,
    });
  }
  async function deleteContact(id) {
    await axios.delete(`${API}/${id}`);
    getContacts();
  }
  async function getOneContact(id) {
    let response = await axios(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_CONTACT",
      payload: response.data,
    });
  }

  async function updateContact(id, editedContact) {
    await axios.patch(`${API}/${id}`, editedContact);
  }

  return (
    <contactContext.Provider
      value={{
        contacts: state.contacts,
        oneContact: state.oneContact,
        addContact,
        getContacts,
        deleteContact,
        getOneContact,
        getOneContact,
        updateContact,
      }}
    >
      {children}
    </contactContext.Provider>
  );
};
export default ContactsContextProvider;
