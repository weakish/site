import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

import Layout from '../components/layout';
import SubscribeForm from '../components/subscribe-form';
import indexStyles from './index.module.css';

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges;
  return (
    <Layout>
      <section className={indexStyles.featuredContainer}>
        {articles.slice(0, 3).map(({ node }) => (
          <BackgroundImage
            Tag="div"
            fluid={node.frontmatter.coverImage.childImageSharp.fluid}
            key={node.fields.slug}
            className={indexStyles.article}
          >
            <Link to={node.fields.slug} className={indexStyles.articleLink}>
              <h3>{node.frontmatter.title}</h3>
            </Link>
          </BackgroundImage>
        ))}
        <section className={indexStyles.subscribeBox}>
          <SubscribeForm />
        </section>
      </section>
      <section className={indexStyles.remainingArticles}>
        {articles.slice(3).map(({ node }) => (
          <Link
            key={node.fields.slug}
            to={node.fields.slug}
            className={indexStyles.articleLink}
          >
            <BackgroundImage
              Tag="div"
              fluid={node.frontmatter.coverImage.childImageSharp.fluid}
              key={node.fields.slug}
              className={indexStyles.articleImage}
            />
            <div className={indexStyles.articleInfo}>
              <h3>{node.frontmatter.title}</h3>
              <p className={indexStyles.summary}>{node.frontmatter.summary}</p>
              <time dateTime={node.frontmatter.date}>
                {node.frontmatter.date}
              </time>
            </div>
          </Link>
        ))}
      </section>
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
          id
          fileAbsolutePath
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            summary
            coverImage {
              childImageSharp {
                fluid(maxWidth: 520) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
            pageType
          }
        }
      }
    }
  }
`;
