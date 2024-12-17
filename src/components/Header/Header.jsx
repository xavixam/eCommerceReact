import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  return (
    <div class="container">
    <header class="d-flex justify-content-center py-3">
      <ul class="nav nav-pills">
        <li class="nav-item"><Link to="/" class="nav-link active" >Home</Link></li>
        <li class="nav-item"><Link to="/products" class="nav-link">Products</Link></li>
      </ul>
    </header>
  </div>
  );
};

export default Header;
