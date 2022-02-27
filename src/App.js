// import logo from './logo.svg';
import './App.css';
import { ConfirmOrder, Login, Sides } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderHistory from './pages/OrderHistory';

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
          <Route exact path="/history" element={<OrderHistory/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
