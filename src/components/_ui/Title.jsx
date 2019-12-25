import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";

const Title = ({title, text}) => (
    <div>
        <TitleStyled>
            <span>{title}</span>
        </TitleStyled>
        <TitleText>{text}</TitleText>
    </div>
)

const TitleStyled = styled("h1")`
    text-align: center; 
    border-bottom: 3px solid ${colors.visorblue}; 
    line-height: 0.1em;
    font-weight: 500;
    color: ${colors.visorblue};
    margin: 1em;
    margin-top: 2em;

    span {
        background: #fff; 
        padding: 0 10px; 
    }
`

const TitleText = styled("h5")`
    text-align: center;
    color: ${colors.visorblue};
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 2em;
`

export default Title;