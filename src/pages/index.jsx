import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to my site.</p>
    <p>Great things is coming.</p>
    <Link href="/page-2/" to="/page-2/">
      Go to page 2
    </Link>
  </div>
);

export default IndexPage;
