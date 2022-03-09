// import logo from './logo.svg';
import './App.css';
import {  } from "./pages";
import {
  History,
  Sausage,
  European,
  Login,
  Home,
  Dashboard,
  PostOrder,
  SaladToppings, 
  SaladGreens, 
  SaladProteins, 
  SaladDressings,
  StartOrder,
    PizzaSauce,
    PizzaCheese,
    PizzaAddons,
    PizzaToppings,
} from "./pages";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Default path goes to WhatMajor page */}
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route exact path="/history" element={<History/>} />
          <Route exact path="/sausage" element={<Sausage/>} />
          <Route exact path="/european" element={<European/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/SaladToppings" element={<SaladToppings/>} />
          <Route exact path="/SaladGreens" element={<SaladGreens/>} />
          <Route exact path="/SaladProteins" element={<SaladProteins/>} />
          <Route exact path="/SaladDressings" element={<SaladDressings/>} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/postorder" element={<PostOrder />} />
          <Route exact path="/StartOrder" element={<StartOrder />} />
          <Route exact path="/PizzaToppings" element={<PizzaToppings />} />
          <Route exact path="/PizzaSauce" element={<PizzaSauce />} />
          <Route exact path="/PizzaCheese" element={<PizzaCheese />} />
          <Route exact path="/PizzaAddons" element={<PizzaAddons />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
