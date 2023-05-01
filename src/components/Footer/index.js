import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <div id="hours">
      <FooterContainer>
        <FooterWrap>
          <SocialMediaWrap>
            <SocialLogo>
              Hours of Operation
              <br></br>Monday - Saturday: 12pm - 8pm
              <br></br>Sunday: 4pm - 8pm
              <br></br>Tel: 902-883-3188
            </SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="https://www.facebook.com/groups/500203920068942"
                target="_blank"
                aria-label="Facebook"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </FooterWrap>
      </FooterContainer>
    </div>
  );
};

export default Footer;
