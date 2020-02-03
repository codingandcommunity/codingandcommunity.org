import React from "react";
import PropTypes from "prop-types";
import MyHelmet from "components/MyHelmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Hero from "components/index/Hero";
import About from "components/index/About";
import Do from "components/index/Do";
import ReadMoreAction from "components/_ui/ReadMoreAction";
import Title from "components/_ui/Title";
import Layout from "components/Layout";
import ProgramCard from "components/programs/ProgramCard";
import { LayoutContainer } from "../components/Layout";

const Section = styled("div")`
    padding-top: 2em;
    display: flex;
    flex-direction: column;

    &:nth-child(3) {
        background-color: ${colors.visorblue};
        color: white;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`


const RenderBody = ({ home, programs, meta, background }) => (
    <>
        <MyHelmet meta={meta} />
        <Hero home={home} background={background.url} />
            <Section>
                <LayoutContainer>
                <About
                    title={home.about_title}
                    bio={home.about_bio}
                />
                </LayoutContainer>
            </Section>
            <Section>
                <LayoutContainer>
                <Do
                    title={home.about_title}
                    bio={home.about_bio}
                />
                </LayoutContainer>
            </Section>
            <Section>
                <LayoutContainer>
                    <Title title='Programs' color={colors.visorblue} />
                    {programs.map((program, i) => (
                        <ProgramCard
                            key={i}
                            category={program.node.program_category}
                            title={program.node.program_title}
                            description={program.node.program_preview_description}
                            thumbnail={program.node.program_preview_thumbnail}
                            uid={program.node._meta.uid}
                        />
                    ))}
                    <ReadMoreAction action='Read more about our community impact' to='/programs' />
                </LayoutContainer>
            </Section>
    </>
);

export default ({ data }) => {
    //Required check for no data being returned
    const background = data.prismic.allHomepages.edges[0].node.hero_image;
    const doc = data.prismic.allHomepages.edges.slice(0, 1).pop();
    const programs = data.prismic.allPrograms.edges.slice(0, 3);
    const meta = data.site.siteMetadata;
    if (!doc || !programs) return null;

    return (
        <Layout>
            <RenderBody home={doc.node} programs={programs} meta={meta} background={background}/>
        </Layout>
    )
}

RenderBody.propTypes = {
    home: PropTypes.object.isRequired,
    programs: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired,
};

export const query = graphql`
    {
        prismic {
            allHomepages {
                edges {
                    node {
                        hero_title
                        hero_button_text
                        hero_image
                        hero_button_link {
                            ... on PRISMIC__ExternalLink {
                                _linkType
                                url
                            }
                        }
                        content
                        about_title
                        about_bio
                        about_links {
                            about_link
                        }
                    }
                }
            }
            allPrograms {
                edges {
                    node {
                        program_title
                        program_preview_description
                        program_preview_thumbnail
                        program_category
                        program_post_date
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