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
          ]}
        />

         <div className="mainwrapper"> 
            <Header />
            <div
                className="children"
            >
              {this.props.children()}
            </div>
            <Footer/>
         </div>
      </div>
    )
  }
}

export default DefaultLayout
