import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { keyframes} from "@emotion/core";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import LaunchpadLogo from "components/launchpad/LaunchpadLogo";
import HeroImage from "images/launchpadhero2.jpg";

var countDownDate = new Date("Mar 21, 2020 09:00:00").getTime();

// Update the count down every 1 second
var interval = setInterval(function() {

    if (window.location.pathname == '/launchpad') {
        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("launchpad-countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("launchpad-countdown").innerHTML = "EXPIRED";
        }
    }
}, 1000);

const HeroLayoutContainer = styled.div`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: 50px; 
    padding-right: 50px; 
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    margin-bottom: 3em;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
    }
`;


const Background = styled("div")`
    &:after {
        content: '';
        position: absolute;
        top:0;
        margin-top: 60px;
        width: 100vw;
        height: 100vh;
        left:50%;
        transform:translateX(-50%);
        z-index: -1;
        
        background: url(${props => props.background}) no-repeat;
        background-size: cover;

        @media(max-width: ${dimensions.maxwidthMobile}px) {
            padding-left: ${dimensions.paddingHorizontalMobile}em;
            padding-right: ${dimensions.paddingHorizontalMobile}em;
            background-size: contain;
        }
    }
`

const HeroContent = styled("div")`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
        height: 2rem;
        margin-bottom: 1em;
        color: white;
        text-shadow: 4px 4px 20px black;

        a {
            text-decoration: none;
            transition: all 100ms ease-in-out;

            text-shadow: 2px -2px 10px black;

            color: ${colors.byteblue};

            &:hover {
                cursor: pointer;
                transition: all 100ms ease-in-out;

                text-shadow: none;
                color: white;
                background-color: ${colors.byteblue};
            }
        }
    }
`
const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
         opacity: 1;
    }
`

const StyledFA = styled(FontAwesomeIcon)`
    display: block;
    margin: auto;
    margin-top: 0;
    margin-bottom: 3rem;
    position: relative;
    max-width: ${props => props.csssize};
    transition: top 0.3s, color 0.3s;
    animation: ${fadeIn} 2.25s;
    top: 0px;
    color: ${props => props.color};
    margin-bottom: 1em;
    &:hover {
        top: 10px;
        cursor: pointer;
        color: ${colors.byteblue};
    }
`

const Arrow = ({ color, scale }) => {
    const scrollToWhoSection = () => {
      window.scrollBy({
        top: document.documentElement.clientHeight,
        left: 0,
        behavior: "smooth",
      })
    }
  
    return (
      <StyledFA
        icon={faArrowDown}
        size={scale + "x"} // to account for FA using size '3x' to represent '3em'
        csssize={scale + "em"} // this two-sizing-props weirdness is a workaround for a FA bug
        onClick={scrollToWhoSection}
        color={color}
      />
    )
  }

const Hero = ({home}) => (
    <Background background={HeroImage}>
        <HeroLayoutContainer styles={{"margin-top": 0}}>
            <HeroContent>
                <h1 id='launchpad-countdown'></h1>
            </HeroContent>
            <Arrow color="#fff" scale="3" />
        </HeroLayoutContainer>
    </Background>
);

export default Hero;

Hero.propTypes = {
    home: PropTypes.object.isRequired,
    background: PropTypes.string.isRequired,
};