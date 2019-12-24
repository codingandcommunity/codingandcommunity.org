import React from "react";
import PropTypes from "prop-types";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Button from "components/_ui/Button";
import { LayoutContainer } from "components/Layout";

const Background = styled("div")`
    position: relative;
    height: 100vh;

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
    padding-top: 6em;
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

    svg {
        margin-top: 10em;
        min-height: 8em;
    }
`

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
        </LayoutContainer>
    </Background>
);

export default Hero;

Hero.propTypes = {
    home: PropTypes.object.isRequired,
    background: PropTypes.string.isRequired,
};