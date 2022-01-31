import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout'


export const query = graphql`
    query CocktailQuery {
        file(name: {eq: "cocktail"}) {
            childImageSharp {
            gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
        }
    }
`

export default function AboutPage({ data }) {
    return (
        <Layout
            title='About this site'
            description='More info about this site'
        >   
            <GatsbyImage
                image={getImage(data.file)}
                alt='a cocktail set insife an elaborate floral arrangement with dry ice mist curling around it'
            />
            <h1>About this site!</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}