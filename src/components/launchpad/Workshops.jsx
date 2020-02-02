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
        <h3>
            Workshops to be announced soon!
        </h3>
        <WorkshopContent>
        </WorkshopContent>
    </WorkshopSection>
);

export default Workshop;