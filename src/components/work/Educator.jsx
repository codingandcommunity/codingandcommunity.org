import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'
import Button from 'components/_ui/Button'
import conference from 'images/stepconference.jpg';

const EducatorContainer = styled("div")`
    display: grid;

    p {
        margin-top: 0;
    }
`

const EducatorContent = styled("div")`
    padding-bottom: 3em;
    width: 100%;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    hr {
        width: 90%;
        color: white;
    }
`

const Programs = styled("div")`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Program = styled("div")`
    max-width: 40%; 
    padding-left: 1rem;
    padding-right: 1rem;

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
        color: ${colors.bitblue}
    }
`

const Testimonial = styled("div")`
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Quote = styled("div")`
    max-width: 50%;
    padding: 2em;

    h2 {
        font-style: italic;
        font-weight: 500;
        line-height: 1.75;
        color: ${colors.bitblue};
    }

    h3 {
        font-weight: 400;
        color: ${colors.white};
        float: right;
        margin-top: 0;
    }
`

const TestimonialImage = styled("div")`
    max-width: 50%;

    img {
        width: 350px;
        height: 350px;
        border-radius: 50%;
        object-fit: cover;
    }
`

const StyledButton = styled(Button)`
    margin-top: 3rem;
    h3 {
        margin: 0.5rem;
    }
`


const Educator = ({ title, bio }) => (
    <>
    <Title title='Start A Program With Us!' color='white' background={colors.visorblue}/>
    <EducatorContainer>
        <EducatorContent>
            <p>There are a lot of reasons why you would want to do this. Pls..... pls.</p>
            <Programs>
                <Program>
                    <h4>Workshop</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                </Program>
                <Program>
                    <h4>Classroom Volunteering</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Program>
                <Program>
                    <h4>All Day Programs</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Program>
            </Programs>
            <hr></hr>
            <Testimonial>
                <Quote>
                    <h2>
                        “This is a totally real quote about one of our programs. This is filler to make it look longer.”
                    </h2>
                    <h3>- Beleivable Persona</h3>
                </Quote>
                <TestimonialImage>
                    <img src={conference} />
                </TestimonialImage>
            </Testimonial>
            <hr></hr>
            <a>
                <StyledButton>
                    <h3>
                        Start a program with us!
                    </h3>
                </StyledButton>
            </a>
        </EducatorContent>
    </EducatorContainer>
    </>
)

export default Educator;

Educator.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};