import React, { useState, useEffect, useContext } from "react";
import "./navbar.css";
import logo from "../assests/logo.png";
import cart_icon from "../assests/cart_icon.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
  const { all_products, cartItems } = useContext(ShopContext);
  const [menuActive, setMenuActive] = useState("shop");
  const location = useLocation();
  const [cartQuantity, setCartQuantity] = useState(0);
  useEffect(() => {
    if (
      location.pathname === "/men" ||
      location.pathname === "/women" ||
      location.pathname === "/kids"
    ) {
      setMenuActive(location?.pathname?.substring(1));
    } else {
      setMenuActive("shop");
    }
    let total = 0;
    all_products?.map((item, index) => {
      if (cartItems[item.id] > 0) {
        total = total + cartItems[item.id];
      }
    });
    setCartQuantity(total);
  }, [location.pathname,cartItems]);

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
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
        </button>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{cartQuantity}</div>
      </div>
    </div>
  );
};

export default Navbar;
