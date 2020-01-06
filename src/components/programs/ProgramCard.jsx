import React from "react";
import { Link } from "gatsby";
import { RichText } from "prismic-reactjs";
import styled from "@emotion/styled";
import dimensions from "styles/dimensions";
import colors from "styles/colors";
import PropTypes from "prop-types";

const ProgramCardContainer = styled(Link)`
    display: grid;
    grid-template-columns: 4fr 7fr;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.2);
    margin-bottom: 4em;
    transition: all 150ms ease-in-out;
    text-decoration: none;
    color: currentColor;
    border-radius: 2em;

    @media(max-width:950px) {
        grid-template-columns: 4.5fr 7fr;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-template-columns: 1fr;
    }

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2em;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.4);
        transition: all 150ms ease-in-out;

        .ProjectCardAction {
            transition: all 150ms ease-in-out;

            span {
                transform: translateX(0px);
                opacity: 1;
                transition: transform 150ms ease-in-out;
            }
        }

        .ProjectCardContent::before {
            opacity: 0.02;
            transition: all 150ms ease-in-out;
        }

        .ProjectCardImageContainer::before {
            opacity: 0.2;
            transition: all 150ms ease-in-out;
        }
    }
`

const ProgramCardContent = styled("div")`
    background: white;
    padding: 2em; 
    position: relative;

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    @media(max-width:950px) {
        padding: 3.25em 2.5em 2em 2.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        grid-row: 2;
    }
`

const ProgramCardCategory = styled("h6")`
    font-weight: 500;
    color: ${colors.grey600};
`

const ProgramCardTitle = styled("h3")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: ${colors.visorblue};
`

const ProgramCardBlurb = styled("div")`
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    margin-bottom: 1em;

    p {
        line-height: 1.5em;
    }

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 2.5em;
    }
`

const ProgramCardAction = styled("div")`
    font-weight: 500;
    text-decoration: none;
    color: ${colors.visorblue};
    transition: all 150ms ease-in-out;

    span {
        margin-left: 1em;
        transform: translateX(-8px);
        display: inline-block;
        transition: transform 400ms ease-in-out;
    }
`

const ProgramCardImageContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;


    @media(max-width:${dimensions.maxwidthTablet}px) {
        padding-top: 3em;
        max-height: 200px;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    &:before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        background: ${colors.blue500};
        mix-blend-mode: multiply;
        opacity: 0;
        transition: all 150ms ease-in-out;
    }

    img {
        width: 100%;
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
        object-fit: cover;
        max-height: 24em;

        @media(max-width:${dimensions.maxwidthTablet}px) {
            max-width: 300px;
        }
    }
`

const ProgramCard = ({ category, title, description, thumbnail, uid}) => (
    <ProgramCardContainer to={`/programs/${uid}`}>
        <ProgramCardContent className="ProjectCardContent">
            <ProgramCardCategory>
                {category[0].text}
            </ProgramCardCategory>
            <ProgramCardTitle>
                {title[0].text}
            </ProgramCardTitle>
            <ProgramCardBlurb>
                {RichText.render(description)}
            </ProgramCardBlurb>
            <ProgramCardAction className="ProjectCardAction">
                Details <span>&#8594;</span>
            </ProgramCardAction>
        </ProgramCardContent>
        <ProgramCardImageContainer className="ProjectCardImageContainer">
            <img src={thumbnail.url} alt={title[0].text}/>
        </ProgramCardImageContainer>
    </ProgramCardContainer>
)

export default ProgramCard;

ProgramCard.propTypes = {
    category: PropTypes.array.isRequired,
    thumbnail: PropTypes.object.isRequired,
    title: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    uid: PropTypes.string.isRequired
}