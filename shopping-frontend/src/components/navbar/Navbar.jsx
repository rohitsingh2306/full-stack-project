import React, { useState,useEffect } from "react";
import "./navbar.css";
import logo from "../assests/logo.png";
import cart_icon from "../assests/cart_icon.png";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState("shop");
  const location = useLocation();
 
  useEffect(()=> {
    if(location.pathname==="/men" || location.pathname==="/women" || location.pathname==="/kids"){
      setMenuActive(location?.pathname?.substring(1))
    }else{
      setMenuActive("shop")
    }
  },[location.pathname])
   
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenuActive("shop")}>
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          {menuActive === "shop" && <hr />}
        </li>
        <li onClick={() => setMenuActive("men")}>
          <Link style={{ textDecoration: "none" }} to="/men">
            Men{" "}
          </Link>
          {menuActive === "men" && <hr />}
        </li>
        <li onClick={() => setMenuActive("women")}>
          <Link style={{ textDecoration: "none" }} to="/women">
            Women{" "}
          </Link>
          {menuActive === "women" && <hr />}
        </li>
        <li onClick={() => setMenuActive("kids")}>
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids{" "}
          </Link>
          {menuActive === "kids" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>
          <Link style={{textDecoration:"none"}} to="/login">Login</Link>
        </button>
        <Link style={{textDecoration:"none"}} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">3</div>
      </div>
    </div>
  );
};

export default Navbar;
