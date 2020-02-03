import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'
import l2 from 'images/l2.jpg';

const DoContainer = styled("div")`
    background: ${colors.visorblue}
`

const AboutContainer = styled("div")`
`

const AboutBio = styled("div")`
    padding-bottom: 3em;
    max-width: 480px;
    margin-right: 2em;
    flex-basis: 50%;
    font-size: 20px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    p {
        margin-top: 0;
    }
`

const DoPicture = styled("div")`
    flex-basis: 40%;

    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        object-fit: cover;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }
`

const AboutContent = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    width: 100%;
    flex-basis: 50%;

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
        <Title title='What We Do' color='white' background={colors.visorblue} />
        <AboutContainer>
            <AboutContent>
                <AboutBio>
                Through our various programs, we reach local middle school and high school students in the Capital district. 
                Our programs combine introductory coding lessons with the problem solving skills required for academic and professional
                success in the 21st century. All of our programs are completely free of charge for our participants. 
                </AboutBio>
                <DoPicture>
                    <img src={l2} />
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