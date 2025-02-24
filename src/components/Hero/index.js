import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
} from "./HeroElements";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeroContainer>
      <Navbar toggle={() => setIsOpen(!isOpen)} />
      <Sidebar isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
      <HeroContent>
        <HeroItems>
          <HeroH1>CURRENTLY CLOSED FOR VACATION 
            <br />FEB 25th - APR 11th</HeroH1>
          <HeroH1>Delicious Chinese Food</HeroH1>
          <HeroP>
            Take out and Dine in available
            <br />No Delivery, Dine In closes @ 6:30pm
          </HeroP>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
