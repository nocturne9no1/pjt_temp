import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Test } from "./Screen";
import "./App.css";
import "./scss/_reset.scss";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
