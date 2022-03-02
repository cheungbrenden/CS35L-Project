// import logo from './logo.svg';
import './App.css';
import { ConfirmOrder,  History } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/confirm" element={<ConfirmOrder/>} />
          <Route exact path="/history" element={<History/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
