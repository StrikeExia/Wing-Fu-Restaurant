import React from "react";
import { Nav, NavLink, NavIcon, Bars } from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
      <Nav>
        <NavLink to="/">Wing Fu Restaurant</NavLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
  );
};

export default Navbar;
