import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import indexStyles from './index.module.css';

const IndexPage = ({ data }) => {
  const articles = data.allMarkdownRemark.edges
  return (
    <Layout>
      <div className={indexStyles.container}>
        {articles.map(({ node }) => (
          <Link
            to={node.fields.slug}
            style={{ textDecoration: `none`, color: `inherit` }}
            key={node.frontmatter.date}
            className={indexStyles.article}
          >
          <Img sizes={node.frontmatter.coverImage.childImageSharp.sizes} />
            <time dateTime={node.frontmatter.date}>
              {node.frontmatter.date}
            </time>
            <h3>{node.frontmatter.title}</h3>
          </Link>
        ))}
        <section>
          <h2>文章订阅</h2>
          <form>
          <input type="text" placeholder="输入您的邮箱地址" />
          <p>我们绝不会分享您的电子邮件地址。您可以随时退订。</p>
          <input type="submit" value="提交订阅" />
          </form>
        </section>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.object,
}

export default IndexPage

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
            coverImage {
              childImageSharp {
                sizes(maxWidth: 520) {
                  ...GatsbyImageSharpSizes
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
`
