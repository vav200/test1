import "./App.css";
import React from "react";
import Loginblock from "./Loginblock";
import Table1 from "./Table1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="fon">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginblock />} />
          <Route path="/table1" element={<Table1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
