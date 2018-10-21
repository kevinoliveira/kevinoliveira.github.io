import * as React from "react";
import Link from "gatsby-link";
import Banner from "../components/banner";
import Footer from "../components/footer";

import "./index.scss";

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
      <div>
        <h1>Ultimos posts</h1>
        {/* <p>
          This is my personal page and is under construction. and o only have
          <strong> {this.props.data.allMarkdownRemark.totalCount}</strong> blog
          posts... what a shame.
        </p> */}
        {/* <Link to="/blog/">Go to Blog</Link> */}
        <div className="grid-index-page">
          {this.props.data.allMarkdownRemark.edges.map(edge => (
            <div key={edge.node.id} className="grid-index-page-card">
              {edge.node.frontmatter.title}
            </div>
          ))}
        </div>
      </div>
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
