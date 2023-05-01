import React from 'react';
import Slider from 'react-slick';
import { MenuContainer, MenuBox } from './MenuElements';
import menuImg1 from '../../images/menu1.png';
import menuImg2 from '../../images/menu2.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Menu = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0

    };
    return (    
            <MenuContainer id='menu'>
                <p>Menu</p>
                <MenuBox>
                <Slider {...settings}>
                    <img src={menuImg1} alt="Menu Page 1" />
                    <img src={menuImg2} alt="Menu Page 2"/>
                </Slider>
                </MenuBox>
            </MenuContainer>

    )
}

export default Menu
