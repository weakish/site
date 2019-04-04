import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

const Page = ({ data }) => {
  const article = data.markdownRemark;
  return (
    <Layout>
      <article>
        <h1>{article.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
        <p>填写邮箱订阅我们的最新内容：</p>
        <MailchimpSubscribe url="https://jishuq.us17.list-manage.com/subscribe/post?u=3c5403dbe4d67ff90fa5ff1ec&amp;id=248ba7cad4"/>
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
