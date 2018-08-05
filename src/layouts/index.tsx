import * as React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'


import "./index.scss"
import Header from '../components/header';
import Footer from '../components/footer';







interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  
  public render() {
    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
            { name: 'theme-color',content: '#234A56'}
          ]}
        />

         {/* <div className="background"> */}
            <div  className="background-top" /> 
            <div className="children-wrapper">
              <Header/>
              <div className="children-card">
              {this.props.children()}
              </div>
              <Footer/>
            </div>
            {/* <Footer/> */}
         {/* </div> */}
      </div>
    )
  }
}

export default DefaultLayout
