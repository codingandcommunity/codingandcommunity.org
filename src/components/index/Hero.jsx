import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import { keyframes} from "@emotion/core";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import { LayoutContainer } from "components/Layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"

const Background = styled("div")`
    &:after {
        content: '';
        position: absolute;
        top:0;
        width: 100vw;
        height: 100vh;
        left:50%;
        transform:translateX(-50%);
        z-index: -1;
        
        background: url(${props => props.background}) no-repeat;
        background-size: cover;
    }
`

const HeroContent = styled("div")`
    padding-top: 3em;
    padding-bottom: 3em;
    margin-bottom: 6em;
    max-width: 830px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
       margin-bottom: 3em;
    }

    h1 {
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

const Hero = ({home, background}) => (
    <Background background={background}>
        <LayoutContainer>
            <HeroContent>
                <>
                    {RichText.render(home.hero_title)}
                </>
                <a href={home.hero_button_link.url}
                    target="_blank" rel="noopener noreferrer">
                    <Button>
                        {RichText.render(home.hero_button_text)}
                    </Button>
                </a>
            </HeroContent>
            <Arrow color="#fff" scale="3" />
        </LayoutContainer>
    </Background>
);

export default Hero;

Hero.propTypes = {
    home: PropTypes.object.isRequired,
    background: PropTypes.string.isRequired,
};