import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Draft = ({ data }) => {
  const article = data.markdownRemark;
  return (
    <Layout>
      <article>
        <p css={{ backgroundColor: 'yellow' }}>This is a draft and is not ready to be published. Please do not post its content elsewhere or link to it. 本文尚未完稿，请勿转载或链接。</p>
        <h1>{article.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
      </article>
    </Layout>
  );
};

Draft.propTypes = {
  data: PropTypes.object
};

export default Draft;

export const query = graphql`
  query DraftQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
