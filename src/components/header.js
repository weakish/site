import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import headerStyles from './header.module.css'
import logoImage from './assets/logo@2x.png'

const Header = ({ siteTitle, description }) => (
  <nav className={headerStyles.topNav}>
    <div>
      <Link to="/">
        <h1>
          <img src={logoImage} alt="Logo" />
          <span className={headerStyles.siteName}>{siteTitle}</span>
        </h1>
      </Link>
      <a className={headerStyles.submitButton} href="mailto:newfrontendweekly0@163.com">文章投稿</a>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  description: PropTypes.string,
}

export default Header
