// -*- mode: rjsx; -*-

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import Layout from '../components/layout';
import SubscribeForm from '../components/subscribe-form';
import BackgroundImage from 'gatsby-background-image';

import articleStyles from './article.module.css';

const Article = ({ data }) => {
  const article = data.markdownRemark;
  const recentArticles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <div className={articleStyles.articleContainer}>
        <article>
          <Helmet
            title={article.frontmatter.title}
            meta={[
              {
                name: 'twitter:card',
                content: 'summary_large_image'
              },
              {
                name: 'og:title',
                content: article.frontmatter.title
              },
              {
                name: 'og:description',
                content: article.frontmatter.summary
              },
              {
                name: 'og:image',
                content:
                  data.site.siteMetadata.siteUrl +
                  article.frontmatter.coverImage.childImageSharp.fluid.src
              }
            ]}
            link={[
              {
                rel: 'stylesheet',
                href: 'https://assets.remarkninjia.com/remark-ninjia.css'
              }
            ]}
            script={[
              {
                defer: 1,
                src: 'https://assets.remarkninjia.com/remark-ninjia.js',
                type: 'text/javascript'
              }
            ]}
          />
          <BackgroundImage
            Tag="div"
            fluid={article.frontmatter.coverImage.childImageSharp.fluid}
            key={article.fields.slug}
            className={articleStyles.heroImage}
          >
            <div className={articleStyles.heroForeground}>
              <h1>{article.frontmatter.title}</h1>
              <time dateTime={article.frontmatter.date}>
                {article.frontmatter.date}
              </time>
            </div>
          </BackgroundImage>
          <div
            className={articleStyles.articleBody}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </article>
        <div className={articleStyles.subscribeBox}>
          <SubscribeForm />
        </div>
      </div>
      <div className={articleStyles.recentArticles}>
        <h2>最新文章</h2>
        <ul>
          {recentArticles.map(({ node }) => (
            <li key={node.id}>
              <Link to={node.fields.slug}>
                <h3>{node.frontmatter.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={articleStyles.comments}>
        <h2>评论</h2>
        <div id="remark-ninjia-container" />
      </div>
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
        summary
        coverImage {
          childImageSharp {
            fluid(maxWidth: 784) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
    site {
      siteMetadata {
        siteUrl
      }
    }
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { pageType: { eq: "article" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
