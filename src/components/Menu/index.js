import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Slider from "react-slick";
import {
  MenuContainer,
  MenuBox,
  handleImageLoad,
  StyledZoomImage,
} from "./MenuElements";
import menuImg1 from "../../images/menu1.png";
import menuImg2 from "../../images/menu2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <MenuContainer id="menu">
      <p>Menu</p>
      <MenuBox>
        <Slider {...settings}>
          <div>
            <Zoom>
              <StyledZoomImage>
                <img
                  src={menuImg1}
                  alt="Menu Page 1"
                  style={{ width: "100%", height: "auto" }}
                />
              </StyledZoomImage>
            </Zoom>
          </div>
          <div>
            <Zoom>
              <StyledZoomImage>
                <img
                  src={menuImg2}
                  alt="Menu Page 2"
                  style={{ width: "100%", height: "auto" }}
                />
              </StyledZoomImage>
            </Zoom>
          </div>
        </Slider>
      </MenuBox>
    </MenuContainer>
  );
};

export default Menu;
