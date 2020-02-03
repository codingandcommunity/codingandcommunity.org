import React from 'react';
import PropTypes from "prop-types";
import MyHelmet from "components/MyHelmet";
import styled from "@emotion/styled";
import colors from "styles/colors";
import { graphql } from 'gatsby';
import { RichText } from "prismic-reactjs";
import Layout from "components/Layout";

const ProgramHeroContainer = styled("div")`
    background: ${colors.grey200};
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    padding-top: 2.25em;
    margin-bottom: 3.5em;

    img {
        max-width: 600px;
    }
`

const ProgramTitle = styled("div") `
    max-width: 550px;
    margin: 0 auto;
    text-align: center;
    color: ${colors.visorblue};

    h1 {
        font-weight: 500;
    }
`

const ProgramBody = styled("div")`
    max-width: 550px;
    margin: 0 auto;
    margin-bottom: 4rem;

    .block-img {
        margin-top: 3.5em;
        margin-bottom: 0.5em;

        img {
            width: 100%;
        }
    }
`

const Program = ({ program, meta }) => {
    return (
        <>
            <MyHelmet meta={meta} />
            <Layout>
                <ProgramTitle>
                    {RichText.render(program.program_title)}
                </ProgramTitle>
                {program.program_hero_image && (
                    <ProgramHeroContainer>
                        <img src={program.program_hero_image.url} alt="bees" />
                    </ProgramHeroContainer>
                )}
                <ProgramBody>
                    {RichText.render(program.program_description)}
                </ProgramBody>
            </Layout>
        </>
    )
}

export default ({ data }) => {
    const programContent = data.prismic.allPrograms.edges[0].node;
    const meta = data.site.siteMetadata;
    return (
        <Program program={programContent} meta={meta}/>
    )
}

Program.propTypes = {
    program: PropTypes.object.isRequired,
};

export const query = graphql`
    query ProgramQuery($uid: String) {
        prismic {
            allPrograms(uid: $uid) {
                edges {
                    node {
                        program_title
                        program_preview_description
                        program_preview_thumbnail
                        program_category
                        program_post_date
                        program_hero_image
                        program_description
                        _meta {
                            uid
                        }
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