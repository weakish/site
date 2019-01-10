module.exports = {
  siteMetadata: {
    title: '新前端',
    description: '收集整理知识、见识、见闻，陪伴程序员前进',
    siteUrl: 'https://nextfe.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { fields: [frontmatter___date], order: DESC }
                  filter: { fields: { pageType: { eq: "article" } } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
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
            `,
            output: '/rss.xml'
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'contents',
        path: `${__dirname}/contents/`
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-prismjs',
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 650,
              showCaptions: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-28361803-1'
      }
    },
    `gatsby-plugin-netlify`, // make sure to put last in the array
  ]
};
