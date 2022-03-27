import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import dave from 'images/dave.jpg';
import dimensions from 'styles/dimensions';
import colors from 'styles/colors';
import Button from 'components/_ui/Button';

const SpeakerSection = styled('div')`
    text-align: center;

`;

const LearnMoreButton = styled('div')`
    button {
        font-size: 24px;
        margin: 0;
        padding: 0.5rem;
        border-radius: 0.5rem;
    }
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
        <h3>Dave Cutler</h3>
        <img src={dave} style={{
            borderRadius: 50,
            borderColor: "white",
            borderWidth: 2,
          }}alt="Dave" />
        <p style={{fontWeight: "bold"}}>Co-Founder at WAVE Drowning Detection Systems</p>
        <p style={{paddingTop: '0px'}}>His journey began began after a tragedy occurred at a town park where he lived.
        This experience inspired entrepreneur Dave Cutler and his co-founder Mark Caron to 
        assemble a dedicated team of engineers and designers to set out to 
        create a reliable and simple to use drowning detection system. 
        He was a 2013 CES Last Gadget Standing semi-finalist
        and the recipient of the Community Lifesaver Award in 2014 from the National
        Drowning Prevention Alliance.</p>
        <LearnMoreButton>
            <a href="https://www.wavedds.com/our-story" target="_blank">
                <Button>
                    Learn More
                </Button>
            </a>  
        </LearnMoreButton>

        
    </SpeakerSection>
);

export default Speaker;