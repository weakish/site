import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import headerStyles from './header.module.css';

const Header = ({ siteTitle, description }) => (
  <nav className={headerStyles.topNav}>
    <div>
      <Link to="/">
        <h1 className={headerStyles.siteName}>{siteTitle}</h1>
      </Link>
      <a className={headerStyles.feed} href="/rss.xml">
        RSS Feed
      </a>
    </div>
  </nav>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
};

export default Header;
