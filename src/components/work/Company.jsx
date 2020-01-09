import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'

const CompanyContainer = styled("div")`
    display: grid;
`

const CompanyTitle = styled("div")`
    color: ${colors.byteblue};
    font-size: 2em;
    h3 {
        margin-bottom: 0;
    }
`

const CompanyBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;
    margin-right: 2em;

    p {
        margin-top: 0;
    }
`

const CompanyContent = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const HowToHelp = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Way = styled("div")`
    max-width: 40%; 

    @media(max-width: ${dimensions.maxwidthTablet}px) {
        padding-left: 100%; 
        padding-right: 100%; 
    }

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        padding-left: 100%; 
        padding-right: 100%;
    }

    h4 {
        text-align: center;
        font-weight: 500;
        color: ${colors.visorblue}
    }
`

const Partners = styled("div")`
    margin-top: 4em;
`

const PartnerLogos = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const PartnerSlug = styled("p")`
    color: ${colors.visorblue};
    margin-top: 2rem;
    text-align: center;
    font-weight: 500;
`

const PartnerLogo = styled("div")`
    max-width: 10%;

    max-height: 100px;

    img {
        max-width: 100%;
    }
`


const Company = ({ companies }) => (
    <>
    <Title title='Corporate Partners' />
    <CompanyContainer>
        <CompanyContent>
            <HowToHelp>
                <Way>
                    <h4>Donate Laptops</h4>
                    <p>Pls give us laptops fam.... erghimerwhnrejhnrej erhjerhnjer erhjer hjenpgive us laptops fam.... erghimerwhnrejhnrej erhjerhnjer erhjer hgive us laptops fam.... erghimerwhnrejhnrej erhjerhnjer erhjer hgive us laptops fam.... erghimerwhnrejhnrej erhjerhnjer erhjer hr</p>
                </Way>
                <Way>
                    <h4>Swag</h4>
                    <p>Pls give us laptops fam.... erghimerwhnrejhnrej erhjerhnjer erhjer hjenr</p>
                </Way>
            </HowToHelp>
            <Partners>
                <PartnerLogos>
                    { companies.map((company) => (
                        <PartnerLogo>
                            <a href={company.node.company_website.url}>
                                <img src={company.node.company_logo.url} alt={company.node.company_name[0].text}></img>
                            </a>
                        </PartnerLogo>
                    ))}
                </PartnerLogos>
                <PartnerSlug>
                    Companies that have helped support our mission.
                </PartnerSlug>
            </Partners>
        </CompanyContent>
    </CompanyContainer>
    </>
)

export default Company;

Company.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};