// import logo from './logo.svg';
import './App.css';
import { ConfirmOrder,  History, Sausage, European, Login, Home, Dashboard, PostOrder  } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route exact path="/confirm" element={<ConfirmOrder/>} />
          <Route exact path="/history" element={<History/>} />
          <Route exact path="/sausage" element={<Sausage/>} />
          <Route exact path="/european" element={<European/>} />
          {/* <Route exact path="/minors" element={<WhatMajor majmin={"minors"} />} /> */}
          <Route exact path="/login" element={<Login />} />
          {/* <Route exact path="/courses" element={<EnterCourses courses={courses} />} /> */}
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/postorder" element={<PostOrder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
