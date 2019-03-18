import React from 'react';
import Link from 'gatsby-link';
import footerStyles from './footer.module.css';

const Footer = () => (
  <div className={footerStyles.footer}>
    <p>
      &copy; nextfe.com 2018 - 2019. All rights reserved.
    </p>
    <nav>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <a href='mailto:newfrontendweekly0@163.com'>联系我们</a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
