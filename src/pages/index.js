import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div>
        {articles.map(({ node }) => (
          <Link to={node.fields.slug} style={{ textDecoration: `none`, color: `inherit` }} key={node.frontmatter.date} className='article-list-item'>
            <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
            <h3>{node.frontmatter.title}</h3>
          </Link>))}
      </div>
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object
};

export default IndexPage;

export const query = graphql`
query IndexQuery {
  allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fields: { pageType: { eq: "article" } } }
  ) {
    edges {
      node {
        id,
        fileAbsolutePath
        frontmatter {
          title,
          date(formatString: "YYYY-MM-DD")
        }
        fields {
          slug,
          pageType
        }
      }
    }
  }
}
`;
