import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const PrizeSection = styled('div')`
    text-align: center;
`;

const PrizeContent = styled('div')`
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

const Prize = () => (
    <PrizeSection>
        <Header title='Prize Winners' />
        <PrizeContent>
            {/*<div>
                <h3>Best Game 🏆</h3>
                <p><strong>Team True</strong> for their platformer <i>Contrast</i>, which required players to turn platforms on and off to finish the level.</p>
            </div>
            <div>
                <h3>Bootstrap Award 🏆</h3>
                <p><strong>LunchLunch</strong> for designing custom sprites, backgrounds, and music in <i>Untitled Sidescroller</i>.</p>
            </div>
            <div>
                <h3>Scavenger Hunt Award 🏆</h3>
                <p><strong>Team True</strong> for solving 38 out of 53 challenges and a total score of 1,480 points.</p>
            </div>
            */}
            <div>
                <h3>Best Website</h3>
                <p>Show off your HTML, CSS, and JavaScript skills, and make a dazzling website!</p>
            </div>
            <div>
                <h3>Best Game</h3>
                <p>Whether its a platformer or a top down game, design and implement the best game possible.</p>
            </div>
            <div>
                <h3>Most Creative</h3>
                <p>Design and create the most innovative, thoughtful and unique solution to a real world problem.</p>
            </div>
            <div>
                <h3>Bootstrap Award</h3>
                <p>This award is given to a team that shows perseverence and learns new skills while tackling a difficult challenge.</p>
            </div>
        </PrizeContent>
        
        <Header title='Scavenger Hunt Challenge'/>
        <PrizeContent>
            <p>Teams or individuals can earn points by solving a collection of coding puzzles. Whoever scores the most points will win the Scavenger Hunt Award.</p>
        </PrizeContent>
    </PrizeSection>
);

export default Prize;
