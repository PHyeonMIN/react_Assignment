import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import EX01 from "./pages/EX01/EX01";
import EX02 from "./pages/EX02/EX02";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<EX02 />} />
        <Route path="/ex01" element={<EX01 />} />
        <Route path="/ex02" element={<EX02 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
