const _ = require('lodash') 


const wrapper = promise =>
    promise.then(result => {
        if(result.errors){
            throw result.errors
        }
        return result 
    })


exports.createPages = async({graphql, actions}) => {
    const { createPage } = actions;

    const result = await wrapper(
        graphql(`
            {
                allDatoCmsArticle {
                    edges {
                        node {
                            title
                            slug
                            content
                            picture {
                                url
                                alt
                            }
                        }
                    }
                }
            }   
        `)
    )

    const articles = result.data.allDatoCmsArticle.edges
    const articleTemplate = require.resolve('./src/templates/article.js')

    articles.forEach(({node }, index ) => {
        const { slug } = node
        
        createPage({
            path: slug,
            component: articleTemplate,
            context: {
                slug
            }
        })
    });
}