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
        <h2>To be announced.</h2>
        {/*
        <Days>
            <ScheduleTable>
                <h3>October 10th</h3>
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
                                Intro, Form Teams
                            </td>
                        </tr>
                        <tr>
                            <td>
                                9:30 am
                            </td>
                            <td>
                                Start Hacking!
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10:00 am
                            </td>
                            <td>
                                Workshop: Python in 60 minutes or less
                            </td>
                        </tr>
                        <tr>
                            <td>
                                11:30 am
                            </td>
                            <td>
                                Workshop: Basic Web Development
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12:00 pm
                            </td>
                            <td>
                                Lunch break
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1:00 pm
                            </td>
                            <td>
                                Workshop: Art with Computer Science
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2:30 pm
                            </td>
                            <td>
                                Workshop: Version Control with Git
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
                <h3>October 11th</h3>
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
                                Resume Hacking
                            </td>
                        </tr>
                        <tr>
                            <td>
                                09:30 am
                            </td>
                            <td>
                                Workshop: Cryptography
                            </td>
                        </tr>
                        <tr>
                            <td>
                                10:30 am
                            </td>
                            <td>
                                Workshop: Web APIs
                            </td>
                        </tr>
                        <tr>
                            <td>
                                12:00 pm
                            </td>
                            <td>
                                Lunch break
                            </td>
                        </tr>
                        <tr>
                            <td>
                                1:00 pm
                            </td>
                            <td>
                                Workshop: Pitching
                            </td>
                        </tr>
                        <tr>
                            <td>
                                2:00 pm
                            </td>
                            <td>
                                Guest Speaker
                            </td>
                        </tr>
                        <tr>
                            <td>
                                3:00 pm
                            </td>
                            <td>
                                Project Pitches, Judging
                            </td>
                        </tr>
                        <tr>
                            <td>
                                4:00 pm
                            </td>
                            <td>
                                Awards Presentation, Wrap-up!
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ScheduleTable>
        </Days>
        <p>All workshops are optional. Balance them with work time!</p>
        */}
    </ScheduleSection>
);

export default Schedule;
