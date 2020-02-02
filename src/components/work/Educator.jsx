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
    width: 100%;

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
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Program = styled("div")`
    flex-basis: 33%;
    padding-left: 1rem;
    padding-right: 1rem;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
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
    flex-wrap: wrap;
    justify-content: space-around;
`

const Quote = styled("div")`
    flex-basis: 50%;
    padding: 2em;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

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
    flex-basis: 50%;

    @media(max-width: ${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

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
    <Title title='Start A Program!' color='white' background={colors.visorblue}/>
    <EducatorContainer>
        <EducatorContent>
            <p>If you are a teacher, librarian, school administrator or educational non-profit, we would love to work with you!</p>
            <Programs>
                <Program>
                    <h4>Workshop</h4>
                    <p>
                        We would love to contribute to your event with a workshop about tech! In the past, we have talked about Git, brief introductions to various programming languages, and our journey in cultivating CS education in the Capital region. 
                    </p>
                </Program>
                <Program>
                    <h4>Classroom Volunteering</h4>
                    <p>
                        Our organization works with high school teachers to give a college student’s perspective on getting a CS degree. Whether you’re looking for long-term involvement or a one-time class visit, let us know!
                    </p>
                </Program>
                <Program>
                    <h4>All Day Programs</h4>
                    <p>
                        Hackathons and expos are some of the best ways for students to interact with technology. We would love to help you make your next big event a success!
                    </p>
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