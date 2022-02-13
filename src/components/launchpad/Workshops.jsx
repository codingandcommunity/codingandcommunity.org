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
        <h3>Also to be announced (there's a lot of moving parts to this).</h3>
        {/*<WorkshopContent>
            <div>
                <h3>Python in 60 minutes or less</h3>
                <p>Never programmed before? Start here! We'll get you started in a common introductory programming language used by professionals around the world. No outside software required!</p>
            </div>
            <div>
                <h3>Basic Web Dev</h3>
                <p>How does a website work? How do I make one? Find out at this workshop, which will show you the three pillars of web development: HTML, CSS, and Javascript.</p>
            </div>
            <div>
                <h3>Art with CS</h3>
                <p>Code is often beautiful. Learn how to show your creative side with the Processing API, a toolkit designed for making beautiful visualizations programmatically.</p>
            </div>
            <div>
                <h3>Version Control with Git</h3>
                <p>Have you ever spent hours on a word doc only to forget to save it? We can't help with that, but Git can help you keep your code organized and understandable.</p>
            </div>
            <div>
                <h3>Web APIs</h3>
                <p>Want to find all the restaurants within a mile of your home? Google Maps can do it for you, with your own code! Learn how to get your programs communicating with the tools of the internet.</p>
            </div>
            <div>
                <h3>Cryptography</h3>
                <p>Take a peek at cybersecurity through the science of secret codes. Learn some historical ciphers, how to crack them, and ways computers keep your information safe.</p>
            </div>
            <div>
                <h3>Pitching</h3>
                <p>So you've made a project, how do you get other people excited about it? This workshop will get you ready to show your project off for judging.</p>
            </div>
        </WorkshopContent>
        */}
    </WorkshopSection>
);

export default Workshop;
