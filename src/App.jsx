import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import ProductPage from "./Pages/ProductPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
