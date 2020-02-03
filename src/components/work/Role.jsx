import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { Link } from "gatsby";
import dimensions from "styles/dimensions";
import PropTypes from "prop-types";
import Title from 'components/_ui/Title'
import conference from 'images/stepconference.jpg';
import educator from 'images/educator.jpg';
import business from 'images/business.jpg';
import rpistudent from 'images/rpistudent.jpg';

const RoleContainer = styled("div")`
    display: grid;
`

const RoleContent = styled("div")`
    padding-top: 1em;
    padding-bottom: 3em;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        margin-left: 2em;
        font-weight: 500;
    }
`

const RoleCards = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const RoleCard = styled(Link)`
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 2rem;
    flex-basis: 20%;
    text-align: center;
    text-decoration: none;
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    @media(max-width:${dimensions.maxwidthMobile}px) {
        margin-bottom: 2rem;
        flex-basis: 100%;
    }
    
    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
    }

    h4 {
        color: ${colors.visorblue};
        font-size: 1.5rem;
        font-weight: 500;
        margin-bottom: 0;
    }

    &:hover {
        box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.4);
        transition: all 300ms ease-in-out;
        cursor: pointer;
    }
`

const Role = () => (
    <>
    <Title title='Work With Us' text='Find out how you can help support our mission.' color={colors.visorblue} />
    <RoleContainer>
        <RoleContent>
            <h2>I am a...</h2>
            <RoleCards>
                <RoleCard to='/work/#teacher'>
                    <img src={educator} alt='Educator'/>
                    <h4>Educator</h4>
                </RoleCard>
                <RoleCard to='/work/#company'>
                    <img src={business} alt='Educator'/>
                    <h4>Business</h4>
                </RoleCard> 
                <RoleCard to='/work/#university'>
                    <img src={rpistudent} alt='Educator'/>
                    <h4>RPI Student</h4>
                </RoleCard>
            </RoleCards>
        </RoleContent>
    </RoleContainer>
    </>
)

export default Role;

Role.propTypes = {
    bio: PropTypes.array.isRequired,
    socialLinks: PropTypes.array.isRequired,
};