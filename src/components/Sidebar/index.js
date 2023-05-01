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
          <Link to="menu" activeClass="active" spy={true} smooth={true}>
            Full Menu
          </Link>
        </SidebarLink>
        <SidebarLink to="/">
          <Link to="hours" activeClass="active" spy={true} smooth={true}>
            Hours
          </Link>
        </SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
