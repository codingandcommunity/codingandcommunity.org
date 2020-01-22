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
                <p>You can attend the event for the entire weekend or either day. To be considered for prizes you must be present Sunday afternoon for judging. Also, for safety reasons we ask that students do not leave the Alumni House during the day unsupervised by a parent.</p>
            </div>
            <div>
                <h3>Do I need to bring a computer?</h3>
                <p>If you own your own laptop, we encourage you to use your own. If you don't own a laptop, we can provide one for you to use during the day.</p>
            </div>
            <div>
                <h3>Do I need to have any software installed?</h3>
                <p>The software you will need depends on the project your team decides to build. We recommend installing Python as well as a basic code editor such as Sublime or Atom. Also feel free to check out <a href='https://starthacking.org'>StartHacking.org</a>.</p>
            </div>
            <div>
                <h3>Does Launchpad cost money?</h3>
                <p>Not at all! We will take care of all meals, goodies and prizes. However, we won't be able to provide transportation to the event.</p>
            </div>
            <div>
                <h3>Where can I park?</h3>
                <p>There is a parking lot right outside of the Alumni House.</p>
            </div>
            <div>
                <h3>What should I bring?</h3>
                <p>You should bring a laptop, charger, and a signed parent release form. We will take care of food, and any other materials needed.</p>
            </div>
            <div>
                <h3>What is there to eat?</h3>
                <p>We will provide breakfast and lunch both days. Please let us know of any allergy accomodations or dietary restrictions when you register.</p>
            </div>
            <div>
                <h3>Are parents and teachers welcome?</h3>
                <p>Of course! Your parents will love to see your projects! And, Saturday morning we will be offering a professional development forum for current and prospective CS teachers.</p>
            </div>
        </FaqContent>
    </FaqSection>
);

export default Faq;