import React from 'react';
import Header from './Header';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';

const ScheduleSection = styled('div')`
    text-align: center;

    p {
        color: ${colors.darkgrey};
        font-size: 1.3rem;
    }

    h3 {
        color: ${colors.visorblue};
        margin-top: 1rem;
    }
`;

const Days = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1.5rem;
`;

const ScheduleTable = styled('div')`
    width: 100%;
    padding-right: 1rem;
    padding-left: 1rem;
    flex-basis: 50%;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        flex-basis: 100%;
    }

    h3 {
        font-weight: 500;
        color: ${colors.visorblue};
    }

    table {
        background-color: transparent;
        border-collapse: collapse;
        width: 100%;
    }

    tr:not(:last-child) {
        border-bottom: 2px ${colors.orangeloop} solid;
    }

    td{
        color: ${colors.darkgrey};
        font-size: 1.1rem;
        padding: 0.5rem;

        :not(:last-child) {
            border-right: 2px ${colors.orangeloop} solid;
        }

        strong {
            font-weight: 500;
        }
    }
`;

const Schedule = () => (
    <ScheduleSection>
        <Header title='Schedule' />
        <Days>
            <ScheduleTable>
            <div style={{textAlign: 'left'}}>
                <h3>Saturday, April 2nd</h3>
            </div> 
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Time</strong>
                            </td>
                            <td>
                                <strong>Event</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:00 am
                            </td>
                            <td>
                                Welcome!
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:30 am
                            </td>
                            <td>
                                Make teams and start brainstorming
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:45 am
                            </td>
                            <td>
                                Scavenger hunt kickoff
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10:00 am
                            </td>
                            <td>
                                Start hacking + Intro to Python workshop
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1:00 pm
                            </td>
                            <td>
                                Introductory workshops
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3:00 pm
                            </td>
                            <td>
                                Team building activity: Wikipedia game
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5:00 pm
                            </td>
                            <td>
                                Closing
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ScheduleTable>
            <ScheduleTable>
                <div style={{textAlign: 'left'}}>
                    <h3>Sunday, April 3rd</h3>
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Time</strong>
                            </td>
                            <td>
                                <strong>Event</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:00 am
                            </td>
                            <td>
                                Welcome back!
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:15 am
                            </td>
                            <td>
                                Resume hacking
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10:00 am
                            </td>
                            <td>
                                Advanced workshops
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3:30 pm
                            </td>
                            <td>
                                Guest speaker
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4:00 pm
                            </td>
                            <td>
                                Project demo + Judging
                            </td>
                        </tr>
                        <tr>
                            <td>
                                5:00 pm
                            </td>
                            <td>
                                Closing + Awards
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ScheduleTable>
        </Days>
        <p>All workshops are optional. Balance them with work time!</p>
       
    </ScheduleSection>
);

export default Schedule;
