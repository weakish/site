/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    if (node.fileAbsolutePath.indexOf('contents/articles/') > -1) {
      const slug = createFilePath({ node, getNode, basePath: 'articles' });
      createNodeField({
        node,
        name: `slug`,
        value: slug
      });
      createNodeField({
        node,
        name: 'pageType',
        value: 'article'
      });
    } else if (node.fileAbsolutePath.indexOf('contents/pages/') > -1) {
      const slug = createFilePath({ node, getNode, basePath: 'pages' });
      createNodeField({
        node,
        name: `slug`,
        value: slug
      });
      createNodeField({
        node,
        name: 'pageType',
        value: 'page'
      });
    } else if (node.fileAbsolutePath.indexOf('contents/drafts/') > -1) {
      const slug = createFilePath({ node, getNode, basePath: 'drafts' });
      createNodeField({
        node,
        name: `slug`,
        value: slug
      });
      createNodeField({
        node,
        name: 'pageType',
        value: 'draft'
      });
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
          {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug,
                    pageType
                  }
                }
              }
            }
          }
        `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/${node.fields.pageType}.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            pageType: node.fields.pageType
          }
        });
      });
      resolve();
    });
  });
};
