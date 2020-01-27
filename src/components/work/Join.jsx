import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from 'components/_ui/Title'
import Button from 'components/_ui/Button'
import conference from 'images/stepconference.jpg';

const JoinContainer = styled("div")`
    width: 100%;

    p {
        margin-top: 0;
    }
`

const JoinContent = styled("div")`
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


const Join = ({ title, bio }) => (
    <>
    <Title title='Join Our Team!' color='white' background={colors.visorblue}/>
    <JoinContainer>
        <JoinContent>
            <p>There are a lot of reasons why you would want to do this. Pls..... pls.</p>
            <Programs>
                <Program>
                    <h4>Instructor</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> 
                </Program>
                <Program>
                    <h4>Curriculum Design</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Program>
                <Program>
                    <h4>Executive Board</h4>
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
                       Apply Now 
                    </h3>
                </StyledButton>
            </a>
        </JoinContent>
    </JoinContainer>
    </>
)

export default Join;

Join.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};