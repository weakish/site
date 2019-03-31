import React from 'react'
import Link from 'gatsby-link'
import footerStyles from './footer.module.css'

const Footer = () => (
  <div className={footerStyles.footer}>
    <nav>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <a href="mailto:newfrontendweekly0@163.com">联系我们</a>
        </li>
      </ul>
    </nav>
    <p>
      由加速开发的后端云服务 <a href="https://leancloud.cn">LeanCloud</a> 赞助。
    </p>
    <p>&copy; nextfe.com 2018 - 2019. All rights reserved.</p>
  </div>
)

export default Footer
