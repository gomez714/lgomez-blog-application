import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout'
export default function AboutPage() {
    return (
        <Layout
            title='About this site'
            description='More info about this site'
        >   
            <h1>About this site!</h1>
            <Link to="/">Back to Home</Link>
        </Layout>
    )
}