import * as React from "react";
import Link from "gatsby-link";
import Banner from "../components/banner";
import Footer from "../components/footer";

import "./index.scss";
import Grid from "../components/grid";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      totalCount: number;
      edges: {
        node: {
          id: string;
          frontmatter: {
            title: string;
            date: string;
            category: string;
          };
        };
      }[];
    };
  };
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <Grid>

        <h1>Ultimos posts</h1>

        {/* <div className="grid-index-page"> */}
        {this.props.data.allMarkdownRemark.edges.map(edge => (
          <div key={edge.node.id} className="grid-index-page-card">
            {edge.node.frontmatter.title}
          </div>
        ))}
        {/* </div> */}
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
