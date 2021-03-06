import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";

const ReadMoreActionStyled = styled(Link)`
    font-weight: 500;
    text-decoration: none;
    color: ${colors.visorblue};
    transition: all 150ms ease-in-out;
    margin-left: auto;

    @media(max-width:${dimensions.maxwidthTablet}px) {
       margin: 0 auto;
    }

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }

    &:hover {
        transition: all 150ms ease-in-out;

        span {
            transform: translateX(0px);
            opacity: 1;
            transition: transform 150ms ease-in-out;
        }
    }
`

const ReadMoreAction = ({action, to}) => (
    <ReadMoreActionStyled to={to}>
        {action}
        <span>&#8594;</span>
    </ReadMoreActionStyled>
);

export default ReadMoreAction;