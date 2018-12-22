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
        <div className="index-title">title</div>
        <div className="index-art">art</div>
        <div className="index-links">links</div>
        <div className="index-footer">footer</div>
        <div className="index-posts">posts</div>
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
