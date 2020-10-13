exports.createPages = async ({ actions, graphql }) => {
    const pageurl = '/post';

    const {data} = await graphql(`
    {
        allContentfulPosts {
          nodes {
            title
            slug
            mainImage {
              fluid {
                src
              }
            }
            content {
              json
            }
          }
        }
      }
    `)

    // console.log(JSON.stringify(data));
    const {nodes} = data.allContentfulPosts;

    nodes.map(({title, slug, mainImage, content})=>{
        actions.createPage({
            path: slug,
            component: require.resolve('./src/templates/Post.tsx'),
            context: {
                title,
                slug,
                imgSrc: mainImage.fluid.src,
                content: content.json,
            }
        })
    })
    
}

exports.onCreatePage = async ({ page, actions }) => {

    if (page.path.match(/^\/app/)) {
        page.matchPath = '/app/*'
        actions.createPage(page);
    }

}