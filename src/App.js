// import logo from './logo.svg';
import './App.css';
import {History } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        
          <Route exact path="/history" element={<History/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
