import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import OutlineLogo from "components/_ui/OutlineLogo";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';


const HeaderContainer = styled("div")`
    background: ${colors.byteblue};
    color: white;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.4);
    position: relative;
    z-index: 10;
    padding: 0;
`

const HeaderContent = styled(Navbar)`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    padding-top: 0;
    padding-bottom: 0;
    margin: 0 auto;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
    }
`

const HeaderLinks = styled(Nav)`
    justify-content: flex-end;
    width: 100%;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
    }

    li {
        margin-left: 1rem;
        margin-right: 1rem;
    }

    a {
        color: white;
        text-decoration: none;
        border-bottom: 3px solid transparent;
        font-weight: 500;
        font-size: 0.95em;
        height: 100%;
        padding-bottom: 1em;
        padding-top: 1em;
        display: inline-block;
        position: relative;

        &:after {
            position: absolute;
            content: "";
            bottom: 0.5rem;
            width: 90%;
            height: 2px;
            background: transparent;
            right: 50%;
            margin-right: -45%;
            transition: 100ms ease-in-out background;
        }

        &:hover {
            color: white;
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

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <HeaderContainer>
      <HeaderContent className='navbar-dark' expand="md">
        <NavbarBrand href="/"><OutlineLogo /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <HeaderLinks className="nav mr-auto navbar-right" navbar>
{/* Removing this until Launchpad comes back online
                <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/launchpad">
                    Launchpad 
                </Link>
            </NavItem> */}
            <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/programs">
                    Programs
                </Link>
            </NavItem>
            <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/curricula">
                    Curricula
                </Link>
            </NavItem>
            <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/work">
                    Work With Us
                </Link>
            </NavItem>
            <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/team">
                    Team
                </Link>
            </NavItem>
            <NavItem>
                <Link
                    activeClassName="Link--is-active"
                    to="/blog">
                    Blog
                </Link>
            </NavItem>
          </HeaderLinks>
        </Collapse>
      </HeaderContent>
      </HeaderContainer>
    );
}

export default Header;