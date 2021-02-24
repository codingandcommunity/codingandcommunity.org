import React from "react";
import PropTypes from "prop-types";
import MyHelmet from "components/MyHelmet";
import { graphql } from "gatsby";
import colors from "styles/colors";
import Layout, { LayoutContainer } from "components/Layout";
import Title from "components/_ui/Title";
import CurriculumCard from "components/curricula/CurriculumCard";


const Work = ({ curricula, meta }) => (
    <>
        <MyHelmet meta={meta} />
        <Layout>
            <LayoutContainer>
                <Title title='Curricula' text='Learn more about our curricula.' color={colors.visorblue} />
                <>
                    {curricula.map((curriculum, i) => (
                        <CurriculumCard
                            key={i}
                            category={curriculum.node.curriculum_title}
                            title={curriculum.node.curriculum_description}
                            description={curriculum.node.curriculum_thumbnail}
                            url={curriculum.node.curriculum_link}
                            uid={curriculum.node._meta.uid}
                        />
                    ))}
                </>
            </LayoutContainer>
        </Layout>
    </>
);

export default ({ data }) => {
    const curricula = data.prismic.allCurriculums.edges;
    const meta = data.site.siteMetadata;
    if (!curricula) return null;

    return (
        <Work curricula={curricula} meta={meta}/>
    )
}

Work.propTypes = {
    curricula: PropTypes.array.isRequired,
};

export const query = graphql`
    {
        prismic {
            allCurriculums {
                edges {
                    node {
                        curriculum_title
                        curriculum_description
                        curriculum_thumbnail
                        curriculum_link {
                            __typename
                            ... on PRISMIC__ExternalLink {
                                url
                            }
                        }
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

