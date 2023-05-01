import React, {useState} from 'react'
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { HeroContainer, HeroContent, HeroItems, HeroH1, HeroP } from './HeroElements';

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>Delicious Chinese Food</HeroH1>
                    <HeroP>Take out and Dine in available
                        <br></br>No Delivery, Dine In closes @ 6:30pm
                    </HeroP>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
