exports.onCreatePage = async ({page, actions })=>{
    
    if (page.path.match(/^\/app/)){
        page.matchPath  = '/app/*'
        actions.createPage(page);
    }

};

exports.createPages = async ({actions, })=>{
    const pageurl = '/dynamic-page'
    actions.createPage({
        path: pageurl,
        component: require.resolve('./src/templates/DynamicPage.tsx'),
        context:{
            pageUrl: pageurl,
            name: 'murtaza',
        }
    })
}