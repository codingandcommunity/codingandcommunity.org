import React from "react";
import styled from "@emotion/styled";
import css from "@emotion/css";
import colors from "styles/colors";

const Title = ({title, text, color, background}) => (
    <div>
        <TitleStyled style={{color, 'border-bottom': `3px solid ${color}`}}>
            <span style={{background}}>{title}</span>
        </TitleStyled>
        <TitleText style={{color, background}}>
            {text}
        </TitleText>
    </div>
)

const TitleStyled = styled("h1")`
    text-align: center; 
    border-bottom: 3px solid ${colors.visorblue}; 
    line-height: 0.1em;
    font-weight: 500;
    margin: 1em;

    span {
        background: #fff; 
        padding: 0 10px; 
    }
`

const TitleText = styled("h5")`
    text-align: center;
    font-size: 1.5em;
    font-weight: 400;
    margin-bottom: 2em;
`

export default Title;