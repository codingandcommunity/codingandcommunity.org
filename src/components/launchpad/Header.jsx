import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';


const HeaderStyle = styled("h2")`
    text-align: center;
    font-weight: 500;
    color: ${colors.darkgrey};
    border-bottom: 3px ${colors.byteblue} solid;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 4rem;
    margin-bottom: 0.5rem;
    display: inline-block;
`;

const Header = ({title}) => (
    <HeaderStyle>
        {title}
    </HeaderStyle>
);

export default Header;