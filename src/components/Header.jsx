import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import Logo from "components/_ui/Logo";

const HeaderContainer = styled("div")`
    padding-top: 0.5em;
    background: ${colors.byteblue};
`

const HeaderContent = styled("div")`
    display: flex;
    justify-content: space-between;
 
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
        flex-direction: column;
        justify-content: center;
    }
`

const HeaderLinks = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 3em;
    justify-content: flex-end;
    width: 100%;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        grid-gap: 5.5em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        grid-gap: 2.5em;
        grid-template-columns: repeat(1, auto);
    }

    a {
        color: white;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 500;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 0.25em;
        padding-top: 1em;
        display: block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0.5rem;
            width: 18px;
            height: 3px;
            background: transparent;
            right: 50%;
            margin-right: -9px;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            &:after {
                background: white;
                transition: 100ms ease-in-out background;
            }
        }

        &.Link--is-active {
            &:after {
                background: white; 
                transition: 100ms ease-in-out background;
            }
        }
    }
`

const Header = () => (
    <HeaderContainer>
        <HeaderContent>
            <Link to="/">
                <Logo/>
            </Link>
            <HeaderLinks>
                <Link
                    activeClassName="Link--is-active"
                    to="/programs">
                    Programs
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Work With Us
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/team">
                    Team
                </Link>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
            </HeaderLinks>
        </HeaderContent>
    </HeaderContainer>
)

export default Header;