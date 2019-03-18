import React from 'react'
import PropTypes from 'prop-types'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SubscribeForm from '../components/subscribe-form'

import articleStyles from './article.module.css'

const Article = ({ data }) => {
  const article = data.markdownRemark
  const contentId = article.fields.slug.split('/').join('')
  return (
    <Layout>
      <div className={articleStyles.articleContainer}>
        <article>
          <Helmet title={article.frontmatter.title} />
          <h1>{article.frontmatter.title}</h1>
          <time dateTime={article.frontmatter.date}>
            {article.frontmatter.date}
          </time>
          <div
            className={articleStyles.articleBody}
            dangerouslySetInnerHTML={{ __html: article.html }}
          />
        </article>
        <div className={articleStyles.subscribeBox}>
          <SubscribeForm />
        </div>
      </div>
    </Layout>
  )
}

Article.propTypes = {
  data: PropTypes.object,
}

export default Article

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
`
