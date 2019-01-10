import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const Article = ({ data }) => {
  const article = data.markdownRemark;
  const contentId = article.fields.slug.split('/').join('');
  return (
    <Layout>
      <article>
        <Helmet title={article.frontmatter.title} />
        <h1>{article.frontmatter.title}</h1>
        <time dateTime={article.frontmatter.date}>{article.frontmatter.date}</time>
        <div dangerouslySetInnerHTML={{ __html: article.html }} />
        <hr />
        <p>填写邮箱订阅我们的最新内容：</p>
        <MailchimpSubscribe url="https://jishuq.us17.list-manage.com/subscribe/post?u=3c5403dbe4d67ff90fa5ff1ec&amp;id=248ba7cad4"/>
      </article>
    </Layout>
  );
};

Article.propTypes = {
  data: PropTypes.object
};

export default Article;

export const query = graphql`
  query ArticleQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
      }
      fields {
        slug
      }
    }
  }
`;
