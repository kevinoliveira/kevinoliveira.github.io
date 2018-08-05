import * as React from 'react'
import Link from 'gatsby-link'
import "./index.scss"

// const men


// const Header = () => (


//     // <div className="headerWrapper">
//         <div className="header">
//             <div className="titleWrapper">
//                 <Link to="/"><mark>Ho</mark>me</Link>
//             </div>
//             <div className="NavWrapper">
//                 <Link to="/blog/test">Menu</Link>
//             </div>
//       </div>
//     // </div>
// )

interface State {
    menuOpen: boolean;
}
class Header extends React.Component<{}, State> {
    state = {menuOpen: false};


    private flipState = () =>{
        this.setState({menuOpen: !this.state.menuOpen})
    }

    render(){

        const menuItens = [
            {key:"blog" ,to: "/blog",title:"blog"},
            // {key:"/blog/test" ,to: "/blog/test",title:"test"},
            // {key:"/rss" ,to: "/rss",title:"rss"},
            {key:"contact" ,to: "/contact",title:"contact"},
            {external: true,key:"github" ,to: "https://www.github.com/kevinoliveira",target: "_blank",title:"Github"},
        ]
        const menuItensJSX = menuItens.map(item =>{
            const {title,to,external,...rest} = item;
            return !!external? <a href={to} {...rest}>{title}</a> : <Link {...rest} to={to} >{title}</Link>;
        })

        return (
            <div className="header">
                <div className="title-wrapper">
                    {/* <Link to="/"><mark>Ke</mark>vin Oliveira</Link> */}
                    <Link to="/">kevinoliveira.github.io</Link>
                </div>
                <div className="nav-wrapper-desktop">
                    {menuItensJSX}
                </div>
                <div className="nav-wrapper-mobile">
                    <div className="nav-wrapper-mobile-menu" onClick={this.flipState}>Menu</div>
                    <div className={this.state.menuOpen? "nav-wrapper-mobile-itens-open": "nav-wrapper-mobile-itens-close"}  >{menuItensJSX}</div>
                </div>
                
        </div>
        )
    }
}


export default Header