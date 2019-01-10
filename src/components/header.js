import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { headerNavStyle } from '../styles';

const Header = ({ siteTitle, description }) => (
  <div
    style={{
      marginBottom: '1.45rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 720,
        padding: '1.45rem 1.0875rem'
      }}
    >
      <nav css={headerNavStyle}>
        <ul>
          <li>
            <Link to='/subscribe/'>订阅邮件列表</Link>
          </li>
          <li>
            <Link to='/rss.xml'>RSS</Link>
          </li>
        </ul>
      </nav>
      <h1 style={{ margin: 0, fontSize: '3rem' }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none'
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <h4 style={{ marginTop: '1em' }}>{description}</h4>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string
};

export default Header;
