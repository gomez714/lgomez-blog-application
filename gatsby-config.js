module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.mydomain.tld',
        title: 'Blog application',
        description: 'An application that allows for blogs to be created and posted',
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
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js')
                }
            },
        },

    ]
}