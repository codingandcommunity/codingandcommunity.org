import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";
import Title from 'components/_ui/Title'

const CompanyContainer = styled("div")`
    display: grid;
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
    flex-wrap: wrap;
    justify-content: space-around;
`

const Way = styled("div")`
    flex-basis: 50%;
    padding-left: 1rem;
    padding-right: 1rem;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    h4 {
        text-align: center;
        font-weight: 500;
        color: ${colors.visorblue}
    }

    p {
        font-size: 18px;
    }
`

const Partners = styled("div")`
    margin-top: 4em;
`

const PartnerLogos = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
`

const PartnerSlug = styled("p")`
    color: ${colors.visorblue};
    margin-top: 2rem;
    text-align: center;
    font-weight: 500;
`

const PartnerLogo = styled("div")`

    max-height: 100px;
    max-width: 300px;
    padding-left: 1rem;
    padding-right: 1rem;

    img {
        height: 100px;
        max-width: 100%; 
        object-fit: contain;
    }
`

const Company = ({ companies }) => (
    <>
    <Title title='Corporate Partners' color={colors.visorblue} />
    <CompanyContainer>
        <CompanyContent>
            <HowToHelp>
                <Way>
                    <h4>Donate Laptops</h4>
                    <p>
                    Have a bunch of old company tech that’s going in the trash? We’ll take it off your hands and use it to help train the next generation of software engineers.
                    </p>
                </Way>
                <Way>
                    <h4>Swag</h4>
                    <p>
                    Donating t-shirts, stickers and other swag is a great way to help get our participants excited about exploring the world of tech.
                    </p>
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