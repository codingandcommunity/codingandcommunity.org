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
        <Header title='Prizes/Categories' />
        <PrizeContent>
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
            <div>
                <h3>Scavenger Hunt Award</h3>
                <p>This award recognizes whoever scores the most points in our scavenger hunt challenge.</p>
            </div>
        </PrizeContent>
    </PrizeSection>
);

export default Prize;
