import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {

    const data = useStaticQuery(graphql`
        query GetBlogPosts {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                nodes {
                    slug
                    id
                    frontmatter {
                        date(fromNow: true)
                        description
                        title
                    }
                }
            }
            allSanityEpisode(
                filter: {youtubeID: {ne: null}}
                sort: {fields: date, order: DESC}
                limit: 20
            ) {
                nodes {
                id
                slug {
                    current
                }
                title
                guest {
                    name
                }
                gatsbyPath(filePath: "/episode/{SanityEpisode.slug__current}")
                }
            }
        }
    `);

    const posts = data.allMdx.nodes;
    const episodes = data.allSanityEpisode.nodes;

    return (
        <Layout>
            <div className={imageWrapper}>
                <StaticImage
                    src='../images/ivana-la-61jg6zviI7I-unsplash.jpg'
                    alt='a corgi sitting on a bed with red paper hearts all over it. It looks unamused'
                    placeholder='dominantColor'
                    width={300}
                    height={300}
                />
            </div>
            <h1>Hello Friends!</h1>
            <Link to='/about'>About this site</Link>

            <h2>Chcek out my recent blog posts</h2> 
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
                        <small>Posted {post.frontmatter.date}</small>
                    </li>
                ))}
            </ul>

            <h2>Latest Episodes of <em>Learn with Jason</em></h2>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.id}>
                        <Link to={episode.gatsbyPath}>
                            {episode.title} (with {episode.guest?.[0]?.name})
                        </Link>
                    </li>
                ))}
            </ul>
            <a href='https://www.learnwithjason.dev/'>
                Watch all episodes of <em>Learn with Jason</em>
            </a>
        </Layout>
    );
}