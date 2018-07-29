import * as React from 'react'
import Link from 'gatsby-link'
import "./index.scss"

const Header = () => (

    // <div className="headerWrapper">
        <div className="header">
            <div className="titleWrapper">
                {/* <Link to="/">home</Link> */}
            </div>
            <div className="NavWrapper">
                <Link to="/">Home</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/page-2/">Contact</Link>
                <Link to="/blog">Github</Link>
                <Link to="/blog">RSS</Link>
            </div>
      </div>
    // </div>
)

export default Header