// import logo from './logo.svg';
import './App.css';
import { ConfirmOrder, Login, Sides, SaladToppings, SaladGreens } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/confirm" element={<ConfirmOrder/>} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/login" element={<Login/>} />
          {/* <Route exact path="/courses" element={<EnterCourses courses={courses} />} /> */}
          <Route exact path="/sides" element={<Sides/>} />
          <Route exact path="/SaladToppings" element={<SaladToppings/>} />
          <Route exact path="/SaladGreens" element={<SaladGreens/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
