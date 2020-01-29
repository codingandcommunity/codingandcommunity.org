import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'

const DoContainer = styled("div")`
    background: ${colors.visorblue}
`

const AboutContainer = styled("div")`
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;
    margin-right: 2em;
    flex-basis: 40%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    p {
        margin-top: 0;
    }
`

const DoPicture = styled("div")`
    flex-basis: 40%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }
`

const AboutContent = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    width: 100%;
    flex-basis: 40%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`

const Do = ({ title, bio }) => (
    <DoContainer>
        <Title title='Who We Are' color='white' background={colors.visorblue} />
        <AboutContainer>
            <AboutContent>
                <AboutBio>
                    {RichText.render(bio)}
                </AboutBio>
                <DoPicture>
                    <iframe height="315" src="https://www.youtube.com/embed/wxQBK9eQoCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </DoPicture>
            </AboutContent>
        </AboutContainer>
        <ReadMoreAction action='Read more about our mission' to='/mission' />
    </DoContainer>
)

export default Do;

Do.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};