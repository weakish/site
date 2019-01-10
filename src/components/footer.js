import React from 'react';
import Link from 'gatsby-link';
import { footerStyle, footerNavStyle } from '../styles';

const Footer = () => (
  <div css={footerStyle}>
    <nav css={footerNavStyle}>
      <ul>
        <li>
          <Link to='/'>首页</Link>
        </li>
        <li>
          <Link to='/subscribe/'>订阅邮件列表</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Footer;
