import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import styled from "@emotion/styled";
import colors from "styles/colors";
import Layout, { LayoutContainer } from "components/Layout";
import Title from "components/_ui/Title";
import ProgramCard from "components/programs/ProgramCard";


const Work = ({ programs, meta }) => (
    <>
        <Helmet
            title={`Work | Prist, Gatsby & Prismic Starter`}
            titleTemplate={`%s | Work | Prist, Gatsby & Prismic Starter`}
            meta={[
                {
                    name: `description`,
                    content: meta.description,
                },
                {
                    property: `og:title`,
                    content: `Work | Prist, Gatsby & Prismic Starter`,
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
        <Layout>
            <LayoutContainer>
                <Title title='Programs' text='Learn more about our community impact.' color={colors.visorblue} />
                <>
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
                </>
            </LayoutContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const programs = data.prismic.allPrograms.edges;
    const meta = data.site.siteMetadata;
    if (!programs) return null;

    return (
        <Work programs={programs} meta={meta}/>
    )
}

Work.propTypes = {
    programs: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
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

