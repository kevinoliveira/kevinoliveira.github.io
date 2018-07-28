import * as React from 'react'
import Link from 'gatsby-link'
import Banner from '../components/banner';
import Footer from '../components/footer';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }
  public render() {
    return (
      // <div>
      //   <h1>Hi people</h1>
      //   <p>
      //     Welcome to your new{' '}
      //     <strong>{this.props.data.site.siteMetadata.title}</strong> site.
      //   </p>
      //   <p>Now go build something great.</p>
      //   <Link to="/page-2/">Go to page 2</Link>
      // </div>
      // <section className="hero is-medium is-link is-bold">
      //   <div className="hero-body">
      //     <div className="container">
      //       <h1 className="title">
      //          Hi people
      //       </h1>
      //       <p className="subtitle">
      //         Welcome to your new{' '}
      //         <strong>{this.props.data.site.siteMetadata.title}</strong> site.
      //       </p>
      //       <p >
      //         Now go build something great.
      //         <Link to="/page-2/">Go to page 2</Link>
      //       </p>
      //     </div>
      //   </div>
      // </section>
      <div style={{display:"flex",alignItems:"center", flexDirection: "column"}}> 
        <Banner/>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
