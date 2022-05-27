import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter 2/Counter2";
import CounterContextProvider from "./counterContext";

const App = () => {
  return (
    <CounterContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/Counter" element={<Counter2 />} />
        </Routes>
      </BrowserRouter>
    </CounterContextProvider>
  );
};

export default App;
