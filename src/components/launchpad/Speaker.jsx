import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import mark from 'images/mark.jpg';
import dimensions from 'styles/dimensions';
import colors from 'styles/colors';

const SpeakerSection = styled('div')`
    text-align: center;

`;

const SpeakerContent = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 2rem;

    img {
        flex-basis: 40%:
        margin-right: 1.5rem;
        width: 300px;
        height: 300px;
        border-radius: 50%;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            flex-basis: 100%;
        }
    }

    div {
        flex-basis: 50%;
        font-size: 18px;
        @media(max-width:${dimensions.maxwidthMobile}px) {
            flex-basis: 100%;
        }
            
        h3 {
            color: ${colors.visorblue};
        }
    }
`;

const Speaker = () => (
    <SpeakerSection>
        <Header title='Speaker' />
        <SpeakerContent>
            <img src={mark} alt='Mark Little'></img>
            <div>
                <h3>Mark Little</h3>
                <h5>Founder of RiseHigh</h5>
                <p>
                After a long career as a GE executive that included directing the GE Global Research Center (GRC), Mark Little founded Rise High with the goal of exposing students to a variety of STEM concepts in the real world.
                </p>
            </div>
        </SpeakerContent>
    </SpeakerSection>
);

export default Speaker;