import React from "react";
import PropTypes from "prop-types";
import MyHelmet from "components/MyHelmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import Layout from "components/Layout";
import { LayoutContainer } from "components/Layout";
import colors from 'styles/colors';
import Title from 'components/_ui/Title'

const Profile = styled("img")`
    height: 10em;
    width: 10em;
    border-radius: 5em;
    object-fit: cover;
`

const Info = styled("div")`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`

const MemberName = styled("p")`
    color: ${colors.visorblue};
    margin: 0;
    font-weight: 500;
`

const MemberTitle = styled("p")`
    color: ${colors.visorblue};
    font-style: italic;
    margin: 0;
`

const Member = ({ member }) => (
    <MemberContainer>
        <Profile src={member.profile.url}/>
        <Info>
            <MemberName>{member.name[0].text}</MemberName>
            <MemberTitle>{member.position[0].text}</MemberTitle>
        </Info>
    </MemberContainer>
);

const MemberContainer = styled("div")`
    margin: 2em;
    flex-basis: 25%;
    text-align: center;
`

const Members = styled("div")`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`

const Team = ({ members, meta }) => (
    <>
        <MyHelmet meta={meta} />
        <Layout>
            <LayoutContainer>
                <Title title='Team' text='100% volunteer and student driven.' color={colors.visorblue} />
                <Members>
                    {members.map((member, i) => (
                        <Member member={member.node} />
                    ))}
                </Members>
            </LayoutContainer> 
        </Layout>
    </>
);

export default ({ data }) => {
    const members = data.prismic.allMembers.edges;
    const meta = data.site.siteMetadata;
    if (!members) return null;

    console.log(members);

    return (
        <Team members={members} meta={meta}/>
    )
}

Team.propTypes = {
    members: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allMembers {
                edges {
                    node {
                        email
                        linkedin {
                            _linkType
                            ... on PRISMIC__ExternalLink {
                              url
                            }
                        }
                        position
                        name 
                        profile
                    }
                } 
            }
        }
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`

