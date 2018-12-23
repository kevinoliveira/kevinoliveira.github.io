import * as React from "react";
import Link from "gatsby-link";
import Banner from "../components/banner";
import Footer from "../components/footer";

import "./index.scss";
import Grid from "../components/grid";
import Title from "../components/title";
import Art from "../components/art";
import Posts from "../components/posts";
import Links from "../components/links";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Grid>
        <Title />
        <Art />
        <Links />
        {/* <div className="index-links">links</div> */}
        <Footer />
        <Posts data={this.props.data} />

        {/* <div className="index-posts">
          {this.props.data.allMarkdownRemark.edges.map(edge => (
            <div key={edge.node.id} className="grid-index-page-card">
              {edge.node.frontmatter.title}
            </div>
          ))}
        </div> */}
      </Grid>
    );
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
            category
          }
        }
      }
    }
  }
`;
