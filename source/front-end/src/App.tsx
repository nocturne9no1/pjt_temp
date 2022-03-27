import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./layouts";
import { Home, Test, QuestionForm, QuestionDetail } from "./Screen";
import "./scss/common.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="container_inner">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test" element={<Test />} />
            <Route path="/question" element={<QuestionForm />} />
            <Route path="/question-detail" element={<QuestionDetail />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
