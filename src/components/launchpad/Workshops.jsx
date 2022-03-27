import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const WorkshopSection = styled('div')`
    text-align: center;

    h3 {
        margin-top: 1rem;
        color: ${colors.visorblue};
    }
`;

const WorkshopContent = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    div {
        flex-basis: 33%;
        padding: 1rem;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            flex-basis: 100%;
        }

        h3 {
            font-weight: 500;
            color: ${colors.visorblue};
            margin-bottom: 0;
        }

        p {
            color: ${colors.darkgrey};
            font-size: 18px;
        }
    }

`;

const Workshop = () => (
    <WorkshopSection>
        <Header title='Workshops' />
        <WorkshopContent>
            <div>
                <h3>Python in 60 minutes or less</h3>
                {/* <p>Never programmed before? Start here! We'll get you started in a common introductory programming language used by professionals around the world. No outside software required!</p> */}
            </div>
            <div>
                <h3>Object Oriented Programming</h3>
                {/* <p>How does a website work? How do I make one? Find out at this workshop, which will show you the three pillars of web development: HTML, CSS, and Javascript.</p> */}
            </div>
            <div>
                <h3>Creative Coding (ps5.js)</h3>
                {/* <p>Code is often beautiful. Learn how to show your creative side with the Processing API, a toolkit designed for making beautiful visualizations programmatically.</p> */}
            </div>
            <div>
                <h3>Automated behavior engineering with social media and AI</h3>
                {/* <p>Have you ever spent hours on a word doc only to forget to save it? We can't help with that, but Git can help you keep your code organized and understandable.</p> */}
            </div>
        </WorkshopContent>
    </WorkshopSection>
);

export default Workshop;
