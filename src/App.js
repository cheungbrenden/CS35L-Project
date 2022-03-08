// import logo from './logo.svg';
import "./App.css";
import {
  ConfirmOrder,
  Login,
  Sides,
  Home,
  Dashboard,
  SaladGreens,
  PostOrder,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/confirm" element={<ConfirmOrder />} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/courses" element={<EnterCourses courses={courses} />} /> */}
          <Route exact path="/sides" element={<Sides />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/saladgreens" element={<SaladGreens />} />
          <Route exact path="/postorder" element={<PostOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
