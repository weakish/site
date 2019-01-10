import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Footer from './footer';

import 'prismjs/themes/prism-coy.css';
import './layout.css';

// TODO: move all site metadata to query source.
const Layout = ({ children }) => (
  <StaticQuery query={graphql`
    query SiteTitleQuery {
        site {
      siteMetadata {
        title
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
              content: 'Articles about life, technology, and startups.'
            },
            {
              name: 'keywords', content: 'programming, startup, software, internet'
            }
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: '0 auto',
            maxWidth: 720,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0
          }}
        >
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
