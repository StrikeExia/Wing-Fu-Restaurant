import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { AiOutlineBars } from "react-icons/ai";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  font-weight: 700;
  position: relative;

  @media screen and (max-wdith: 768px) {
    padding: 0 1 rem; 
    }
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  left: 50%;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transform: translateX(-50%) /* Ensures perfect centering */

  @media screen and (max-width: 400px) {
    font-size: 1.7rem; 
  }

  @media screen and (max-width: 450px) {
  font-size: 1.5rem; 
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 25px; /* Ensures sidebar is always on the right */
  top: 50%;
  cursor: pointer;
  color: #fff;
  transform: translateY(-50%);

  @media screen and (max-width: 600px) {
    right: 15x;  
    }

  @media screen and (max-width: 450px) {
    right: 10px; 
    }
`;

export const Bars = styled(AiOutlineBars)`
  font-size: 2rem;
  
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;  
    }

  @media screen and (max-width: 450px) {
    font-size: 1.6rem;  
    }
`;
