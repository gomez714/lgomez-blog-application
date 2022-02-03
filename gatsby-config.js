module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.mydomain.tld',
        title: 'World of Gomez',
        description: "Here's the place where you can get a taste if who I am.",
        image: 
    'https://res.cloudinary.com/jlengstorf/image/upload/v1628127675/frontend-masters/gatsby-intro/share-image.jpg'
    },
    plugins: ['gatsby-plugin-react-helmet',

        // This set of plugins is to enable creating MDX blog posts 
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`
            },
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`
            },
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 1200
                        },
                    },
                ],
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js')
                }
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: 'vnkupgyb',
                dataset: `production`
            },
        },
    ]
}