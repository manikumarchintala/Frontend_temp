// import React from "react";
import { createRoot } from "react-dom/client";
//to create a div element with id root and use it to render components.
import { BrowserRouter, Routes, Route } from "react-router-dom";
//these are used to manage the routing in the React Application.
import SearchParams from "./SearchParams";
import Details from "./Details";
//These details ate imported as a function.
const App = () => {
  return (
    <BrowserRouter>
      {/* is used to enable routing */}
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
