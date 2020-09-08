import React from 'react';
import styled from '@emotion/styled';
import colors from 'styles/colors';
import dimensions from 'styles/dimensions';
import Button from 'components/_ui/Button';

import l1 from 'images/l1.jpg';
import l2 from 'images/l2.jpg';
import l3 from 'images/l3.jpg';
import l4 from 'images/l4.jpg';

const RegisterSection = styled('div')`
    text-align: center;
    margin-top: 4rem;

    font-size: 22px;
    color: ${colors.darkgrey};


    .links {
        strong {
            color: ${colors.visorblue};
            font-weight: 500;
        }

        font-size: 22px;
        margin-top: 2rem;

        a {
            font-size: 18px;
            color: ${colors.visorblue};
            padding: 1rem;
        }
    }
`;

const Desc = styled('p')`
    font-size: 22px;
    color: ${colors.darkgrey};

    strong {
        color: ${colors.visorblue};
    }

    a {
        color: ${colors.visorblue};
    }

    h4 {
        color: red;
    }
`;

const RegisterButton = styled('div')`
    button {
        font-size: 24px;
        margin: 0;
        padding: 1rem;
        border-radius: 0.5rem;
    }
`;

const Values = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;


    h3 {
        font-weight: 500;
        color: ${colors.visorblue};
        padding-left: 2rem;
        padding-right: 2rem;
        flex-basis: 33%;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            font-size: 1rem;
            padding: 0;
        }
    }
`;

const Images = styled('div')`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 4rem;

    img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;

        @media(max-width:${dimensions.maxwidthMobile}px) {
            margin-bottom: 1rem;
        }
    }

`;

const Register = () => (
    <RegisterSection>
        <Values>
            <h3>Code</h3>
            <h3>Collaborate</h3>
            <h3>Discover</h3>
        </Values>
        <Desc>
            <strong>Launchpad</strong> is a hackathon for local high school students hosted at RPI by <a href='/'>coding&&community</a>. Students will have the opportunity to work together to brainstorm, design, and code a project from scratch. We're excited to see your creativity unleashed!   
        </Desc>
        <RegisterButton>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdB6QAV0WeLeQy4YUM6fM3YG4EtYHU5MX3MWYStHaHbf9dmIQ/viewform">
                <Button>
                    Register Now 🚀
                </Button>
            </a>
        </RegisterButton>
        <div class="links">
            <strong>Register before October 1st to get a free Launchpad T-Shirt!</strong> 
            <a href="https://drive.google.com/file/d/1atUO-JbYiLiEFqnUVC2UpdzRhjrqkjQh/view?usp=sharing">Flier</a>
            &#8226;
        </div>
        <Images>
           <img src={l1}/> 
           <img src={l3}/> 
           <img src={l4}/> 
        </Images>
    </RegisterSection>
);

export default Register;
