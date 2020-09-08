import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const FaqSection = styled('div')`
    text-align: center;
`;

const FaqContent = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 2rem;

    div {
        flex-basis: 50%;
        padding-left: 2rem;
        padding-right: 2rem;
        margin-bottom: 2rem;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            flex-basis: 100%;
        }

        h3 {
            font-weight: 500;
            color: ${colors.visorblue};
            margin-bottom: 1rem;
        }

        p {
            color: ${colors.darkgrey};
            font-size: 18px;
        }
    }

`;

const Faq = () => (
    <FaqSection>
        <Header title='FAQ' />
        <FaqContent>
            <div>
                <h3>How much coding do I need to know?</h3>
                <p>Launchpad is open to students of all skill levels. For less experienced students, mentors from RPI will be available to guide you along. We will also be providing starter code for some simple projects in web development and game design.</p>
            </div>
            <div>
                <h3>How will teams work? How will we plan a project?</h3>
                <p>We will form teams at the beginning of the day. Don't worry if you don't know anyone else, we'll make sure you make your way into a great team! We will have brainstorming sessions at the beginning of the day to help your team design a project.</p>
            </div>
            <div>
                <h3>Do I need to attend for the entire weekend?</h3>
                <p>You can attend the event for the entire weekend or either day. To be considered for prizes you must be present Sunday afternoon for judging.</p>
            </div>
            <div>
                <h3>Do I need to have my own computer?</h3>
                <p>The event will be online, so hackers will have to provide their own computers.</p>
            </div>
            <div>
                <h3>Do I need to have any software installed?</h3>
                <p>The software you will need depends on the project your team decides to build. We recommend installing Python as well as a basic code editor such as Sublime or Atom. Also feel free to check out <a href='https://starthacking.org'>StartHacking.org</a>.</p>
            </div>
            <div>
                <h3>Does Launchpad cost money?</h3>
                <p>Not at all!</p>
            </div>
        </FaqContent>
    </FaqSection>
);

export default Faq;
