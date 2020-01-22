import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import dimensions from "styles/dimensions";
import Hero from "components/launchpad/Hero";
import Layout from "components/Layout";
import { LayoutContainer } from "../components/Layout";

import About from "../components/launchpad/About";
import Schedule from "../components/launchpad/Schedule";
import Speaker from "../components/launchpad/Speaker";
import Prize from "../components/launchpad/Prizes";
import Workshops from "../components/launchpad/Workshops";
import Faq from "../components/launchpad/Faq";
import Register from "../components/launchpad/Register";

import Button from "components/_ui/Button.jsx";


const Section = styled("div")`
    min-height: 100vh;
    padding-top: 4em;
    display: flex;
    flex-direction: column;

    @media(max-width:${dimensions.maxwidthTablet}px) {
        margin-bottom: 4em;
    }

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
        <Helmet
            title={meta.title}
            titleTemplate={`%s | ${meta.title}`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: meta.title,
                },
                {
                    property: `og:description`,
                    content: meta.description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: meta.author,
                },
                {
                    name: `twitter:title`,
                    content: meta.title,
                },
                {
                    name: `twitter:description`,
                    content: meta.description,
                },
            ].concat(meta)}
        />
        <Hero home={home} background={background.url} />
        <LayoutContainer>
            <Register />
            <About />
            <Schedule />
            <Speaker />
            <Prize />
            <Workshops />
            <Faq />
        </LayoutContainer>
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