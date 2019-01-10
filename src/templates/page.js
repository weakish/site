import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Page = ({ data }) => {
  const article = data.markdownRemark;
  return (
    <Layout>
      <article>
        <h1>{article.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>
    </Layout>
  );
};

Page.propTypes = {
  data: PropTypes.object
};

export default Page;

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
