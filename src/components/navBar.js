import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import navCSS from "../styles/nav.module.css";

const NavBar = () => {
  return (
    <nav className={navCSS.navbar}>
      <img
        className={navCSS.img}
        src="/beer-animation-PhotoRoom (1).png"
        alt=""
      />
      <ul className={navCSS.navLinks}>
        <li>
          <NavLink end to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/browsebeers">Browse Beers</NavLink>
        </li>
        <li>
          <NavLink to="/">
            <ShoppingCartIcon />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
