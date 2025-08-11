import { useRef, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Slider from "react-slick";
import {
  MenuContainer,
  MenuBox,
  StyledZoomImage,
} from "./MenuElements";
import menuImg1 from "../../images/menu1.png";
import menuImg2 from "../../images/menu2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const sliderRef = useRef(null); // References to the slider

  const images = [menuImg1, menuImg2];

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true, // Allows swiping while zoomed in
  };

  // Keyboard navigation for easier use
    useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        sliderRef.current.slickNext();
      } else if (event.key === "ArrowLeft") {
        sliderRef.current.slickPrev();
      }
      };


    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    }
  }, []);


  return (
    <MenuContainer id="menu">
      <p>Menu</p>
        <p>This is our updated Menu starting August 2025! These prices are the correct prices!
      </p>
      <MenuBox>
        <Slider ref={sliderRef} {...settings}>
          {images.map((img, index) => (
            <div key={index}>          
            <Zoom>
              <StyledZoomImage>
                <img
                  src={img}
                  alt={`Menu Page ${index + 1}`}
                  style={{ width: "100%", cursor: "zoom-in"}}
                />
              </StyledZoomImage>
            </Zoom>
          </div>
          ))}
        </Slider>
      </MenuBox>
    </MenuContainer>
  );
};

export default Menu;
