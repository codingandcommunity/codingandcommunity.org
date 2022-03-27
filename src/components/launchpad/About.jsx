import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import colors from 'styles/colors';

const AboutSection = styled('div')`
    text-align: center;

    p {
        color: ${colors.darkgrey};
        font-size: 1.3rem;
        line-height: 1.5rem;

        strong {
            font-weight: 500;
            color: ${colors.visorblue};
        }

    }

    #desc {
        line-height: 2rem;
    }
`;

const About = () => (
    <AboutSection>
        <Header title='About' />
        <div>
            <p><strong>When:</strong> April 2nd - 3rd </p>
            <p><strong>Where:</strong> Online (Discord) </p>
            <p><strong>Who:</strong> Grades 8-12</p>
        </div>
        <hr></hr>
        <p id='desc'><strong>Launchpad</strong> is open to coders of all skill levels. Mentors from RPI will be around to help brainstorm, give advice, and teach mini tech-talks about topics that might be useful to your project. At the end of the day, all teams are encouraged to present their work, with a chance to win some prizes!</p>
    </AboutSection>
);

export default About;
