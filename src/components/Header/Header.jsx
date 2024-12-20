import "./Header.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UsersContext } from "../../context/UsersContext/UsersState";
import { ProductsContext } from "../../context/ProductsContext/ProductsState";
import { Badge } from "antd";

const Header = () => {
  const { token, logout } = useContext(UsersContext);
  const { cart } = useContext(ProductsContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/" className="nav-link active">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </li>
          {token ? (
            <>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  <Badge count={cart.length}>Cart</Badge>{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
              <li className="nav-item" onClick={logoutUser}>
                <Link to="/logout" className="nav-link">
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
          )}
        </ul>
      </header>
    </div>
  );
};

export default Header;
