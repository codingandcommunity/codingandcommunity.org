import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import OutlineLogo from "components/_ui/OutlineLogo";
import { 
    Facebook, 
    Github, 
    Twitter, 
    Instagram, 
    Linkedin, 
    ReplDotIt 
} from '@icons-pack/react-simple-icons';

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

const FooterContainer = styled("div")`
    padding-top: 2em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.visorblue};

`

const FooterContent = styled("div")`
    max-width: ${dimensions.maxwidthDesktop}px;
    padding-left: ${dimensions.paddingHorizontalDesktop}em;
    padding-right: ${dimensions.paddingHorizontalDesktop}em;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: ${dimensions.paddingHorizontalTablet}em;
        padding-right: ${dimensions.paddingHorizontalTablet}em;
        flex-direction: column;
        justify-content: center;
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: ${dimensions.paddingHorizontalMobile}em;
        padding-right: ${dimensions.paddingHorizontalMobile}em;
        flex-direction: column;
        justify-content: center;
    }
`

const FooterLogo = styled("div")`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`

const FooterInfo = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-direction: column;
        justify-content: center;
    }
`
const InfoColumn = styled("div")`
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    padding-right: 1em;

    color: white;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        margin-top: 1.5rem;:
        padding-left: ${dimensions.paddingHorizontalMobile}px;
        padding-right: ${dimensions.paddingHorizontalMobile}px;
    }

    h5 {
        margin-bottom: 0.5rem;
        font-weight: 500;
    }
`
const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    &:hover {
        color: ${colors.bitblue};
    }
`
const FooterLinkExternal = styled("a")`
    color: white;
    text-decoration: none;
    font-size: 14px;
    font-weight: 300;
    &:hover {
        color: ${colors.bitblue};
    }
`

const Social = styled("div")`
    display: flex;
    margin-top: 1rem;

    a {
        margin-right: 1rem;
    }
`

const SocialInfo = props => (
    <a href={props.info.url}>
        { props.children }
    </a>
)

const brandIcon = css`
    color: white;
    max-width: 14px;
    transition: color 0.3s;
    &:hover {
        color: blue;
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: white;
    text-decoration: none;

    :hover {
        color: white;
    }
`

const Footer = ({email, facebook, instagram, linkedin, twitter, github, replit, chapter, constitution, style, swag}) => (
    <FooterContainer>
        <FooterContent>
            <FooterLogo>
                <Link to="/">
                    <OutlineLogo />
                </Link>
                <FooterAuthor href='/'>
                    © 2020 coding&&community 
                </FooterAuthor>
            </FooterLogo>
            <FooterInfo>
                <InfoColumn>
                    <h5>Navigation</h5>
                    <FooterLink to="/programs">Programs</FooterLink>
                    <FooterLink to="/work">Work With Us</FooterLink>
                    <FooterLink to="/team">Team</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                </InfoColumn>
                <InfoColumn>
                    <h5>Resources</h5>
                    <FooterLink to={chapter.url}>Start a Chapter</FooterLink>
                    <FooterLinkExternal href={constitution.url}>Constitution</FooterLinkExternal>
                    <FooterLinkExternal href={swag.url}>Swag</FooterLinkExternal>
                    <FooterLinkExternal href={style.url}>Style Guide</FooterLinkExternal>
                </InfoColumn>
                <InfoColumn>
                    <h5>Contact</h5>
                    <FooterLinkExternal href={'mailto:' + email}>{email}</FooterLinkExternal>
                    <Social>
                        <SocialInfo info={facebook}><Facebook css={brandIcon}/></SocialInfo>
                        <SocialInfo info={instagram}><Instagram css={brandIcon}/></SocialInfo>
                        <SocialInfo info={twitter}><Twitter css={brandIcon}/></SocialInfo>
                        <SocialInfo info={github}><Github css={brandIcon}/></SocialInfo>
                        <SocialInfo info={linkedin}><Linkedin css={brandIcon}/></SocialInfo>
                        <SocialInfo info={replit}><ReplDotIt css={brandIcon}/></SocialInfo>
                    </Social>
                </InfoColumn>
            </FooterInfo>
        </FooterContent>
    </FooterContainer>
)

export default Footer;
