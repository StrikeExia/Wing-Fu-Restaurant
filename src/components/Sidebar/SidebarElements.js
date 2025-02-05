import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: ${({ isOpen }) => (isOpen ? "300px" : "0")}; /* Default width */
  max-width: 100%; /* Prevents sidebar from exceeding the screen size */
  height: 100%;
  background: #ffe4d9;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  transition: 0.3s ease-in-out;
  right: ${({ isOpen }) => (isOpen ? "0" : "-100%")}; /* Hide when closed */

  @media screen and (max-width: 768px) {
    width: ${({ isOpen }) => (isOpen ? "100%" : "0")}; /* Full-screen sidebar on very small devices */
  }
`;

export const CloseIcon = styled(FaTimes)`
  color: #000;
  font-size: 2rem;
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  cursor: pointer;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%
  text-align: center;
  margin-top: 50px;
`;

export const SidebarLink = styled(Link)`
  padding: 15px 0;
  font-size: 1.5rem;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
    transition: 0.2s ease-in-out;
  }
`;
