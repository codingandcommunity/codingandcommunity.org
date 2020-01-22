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
        <p>Remember, you don't have to come both days!</p>
        <Days>
            <ScheduleTable>
                <h3>March 21st</h3>
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
                                Hello
                            </td>
                            <td>
                            World 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </ScheduleTable>
            <ScheduleTable>
                <h3>March 22nd</h3>
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
                                Hello
                            </td>
                            <td>
                            World 
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Hello
                            </td>
                            <td>
                            World 
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