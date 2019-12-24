import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import OutlineLogo from "components/_ui/OutlineLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"


const FooterContainer = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${colors.darkgrey};

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
    justify-content: center;
`
const InfoColumn = styled("div")`
    display: flex;
    flex-direction: column;
    padding-left: 1em;
    padding-right: 1em;

    color: white;

    h5 {
        margin-bottom: 0.5rem;
        font-weight: 600;
    }
`
const FooterLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 14px;
`

const Social = styled("div")`
    display: flex;
    margin-top: 1rem;

    a {
        margin-right: 1rem;
    }
`

const SocialInfo = ({ info, icon }) => {
    return (
        <a href={info.url}>
            <SocialLogo icon={icon} />
        </a>
    )
}

const SocialLogo = styled(FontAwesomeIcon)`
    color: white;
    max-width: 14px;
    transition: color 0.3s;
    &:hover {
        color: ${colors.bitblue};
    }
`

const FooterAuthor = styled("a")`
    font-size: 0.75em;
    color: white;
    text-decoration: none;
`


const Footer = () => (
    <FooterContainer>
        <FooterContent>
            <FooterLogo>
                <Link to="/">
                    <OutlineLogo />
                </Link>
                <FooterAuthor>
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
                    <h5>Contact</h5>
                    <FooterLink to='mailto:email@gmail.com'>email@gmail.com</FooterLink>
                    <Social>
                        <SocialInfo info={{url: "https://facebook.com"}} icon={faFacebookF} />
                        <SocialInfo info={{url: "https://facebook.com"}} icon={faInstagram} />
                        <SocialInfo info={{url: "https://facebook.com"}} icon={faLinkedin} />
                        <SocialInfo info={{url: "https://facebook.com"}} icon={faTwitter} />
                        <SocialInfo info={{url: "https://facebook.com"}} icon={faGithub} />
                    </Social>
                </InfoColumn>
            </FooterInfo>
        </FooterContent>
    </FooterContainer>
)

export default Footer;
