import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import 'prismjs/themes/prism-coy.css';
import './layout.css';
import layoutStyles from './layout.module.css';

// TODO: move all site metadata to query source.
const Layout = ({ children }) => (
  <StaticQuery query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description
            },
            {
              name: 'keywords', content: data.site.siteMetadata.keywords
            }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description} />
        <div className={layoutStyles.pageBody}>
          {children}
        </div>
        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.any,
  data: PropTypes.object
};

export default Layout;
