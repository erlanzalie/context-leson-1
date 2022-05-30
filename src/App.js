import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter 2/Counter2";
import Details from "./components/Details/Details";
import EditForm from "./components/EditForm/EditForm";
import ContactsContextProvider from "./contactsContext";
import ContactsList from "./ContactsList/ContactsList";
import CounterContextProvider from "./counterContext";

const App = () => {
  return (
    <ContactsContextProvider>
      <CounterContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/Counter" element={<Counter2 />} />
            <Route path="/edit/:id" element={<EditForm />} />
            <Route path="/details/:id" element={<Details />} />
            <Route
              path="/contacts"
              element={
                <>
                  <AddForm />
                  <ContactsList />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </CounterContextProvider>
    </ContactsContextProvider>
  );
};

export default App;
