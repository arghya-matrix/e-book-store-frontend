import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./component/style/App.css";
import Box from "./component/box";
import ProductPage from "./component/ProductPage";
import DetailsComponent from "./component/DetailsComponent";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Cart from "./component/Cart";
import "./component/style/index.css";
import "react-bootstrap-icons";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/Home" element={<ProductPage />} />
        <Route path="/details/:productId" element={<DetailsComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
