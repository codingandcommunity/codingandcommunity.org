import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import mark from 'images/mark.jpg';
import dimensions from 'styles/dimensions';

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
    
    p {
        flex-basis: 50%;
        @media(max-width:${dimensions.maxwidthMobile}px) {
            flex-basis: 100%;
        }
    }
`;

const Speaker = () => (
    <SpeakerSection>
        <Header title='Speaker' />
        <SpeakerContent>
            <img src={mark} alt='Mark Little'></img>
            <p>
               iLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
            </p>
        </SpeakerContent>
    </SpeakerSection>
);

export default Speaker;