const path = require('path');

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
    promise.then(result => {
        if (result.errors) {
            throw result.errors
        }
        return result
    });

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await wrapper(
        graphql(`
        {
            prismic {
                allPosts {
                    edges {
                        node {
                            post_title
                            post_hero_image
                            post_hero_annotation
                            post_date
                            post_category
                            post_body
                            post_preview_description
                            post_author
                            _meta {
                                uid
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
        }
    `)
    )

    const postsList = result.data.prismic.allPosts.edges;
    const programList = result.data.prismic.allPrograms.edges;

    const postTemplate = require.resolve('./src/templates/post.jsx');
    const programTemplate = require.resolve('./src/templates/program.jsx');


    postsList.forEach(edge => {
        createPage({
            type: 'Project',
            match: '/blog/:uid',
            path: `/blog/${edge.node._meta.uid}`,
            component: postTemplate,
            context: {
                uid: edge.node._meta.uid,
            },
        })
    })

    programList.forEach(edge => {
        createPage({
            type: 'Program',
            match: '/programs/:uuid',
            path: `/programs/${edge.node._meta.uid}`,
            component: programTemplate,
            context: {
                uid: edge.node._meta.uid,
            },
        })
    })
}
