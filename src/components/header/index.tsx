import * as React from 'react'
import Link from 'gatsby-link'
import "./index.scss"

const Header = () => (

    // <div className="headerWrapper">
        <div className="header">
            <div className="titleWrapper">
                <Link to="/"><mark>Ho</mark>me</Link>
            </div>
            <div className="NavWrapper">
                <Link to="/blog/test">Menu</Link>
            </div>
      </div>
    // </div>
)

export default Header