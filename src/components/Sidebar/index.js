import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";
import { Link } from "react-scroll";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">
          <Link to="menu"
          activeClass="active"
          spy={true} smooth={true}
          onClick={toggle} // Closes the sidebar after clicking
          >
            Full Menu
          </Link>
        </SidebarLink>
        <SidebarLink to="/">
          <Link to="hours"
          activeClass="active"
          spy={true}
          smooth={true}
          onClick={toggle}>
            Hours
          </Link>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
