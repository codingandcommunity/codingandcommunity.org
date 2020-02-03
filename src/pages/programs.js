import React from "react";
import PropTypes from "prop-types";
import MyHelmet from "components/MyHelmet";
import { graphql } from "gatsby";
import colors from "styles/colors";
import Layout, { LayoutContainer } from "components/Layout";
import Title from "components/_ui/Title";
import ProgramCard from "components/programs/ProgramCard";


const Work = ({ programs, meta }) => (
    <>
        <MyHelmet meta={meta} />
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

