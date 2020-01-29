import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import { RichText } from "prismic-reactjs";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'

const AboutContainer = styled("div")`
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    flex-basis: 40%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    p {
        margin-top: 0;
    }
`

const AboutVideo = styled("div")`
    flex-basis: 40%;

    iframe, object, embed {
        width: 500px;
        height: 315px;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
        iframe, object, embed {
            width: 300px;
            height: 225px;
        }
    }

`

const AboutContent = styled("div")`
    padding-bottom: 3em;
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
`



const About = ({ title, bio }) => (
    <>
    <Title title='Who We Are' color={colors.visorblue}/>
    <AboutContainer>
        <AboutContent>
            <AboutBio>
                {RichText.render(bio)}
            </AboutBio>
            <AboutVideo>
                <iframe src="https://www.youtube.com/embed/wxQBK9eQoCo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </AboutVideo>
        </AboutContent>
    </AboutContainer>
    <ReadMoreAction action='Read more about our mission' to='/mission' />
    </>
)

export default About;

About.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};