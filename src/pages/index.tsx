import * as React from "react";
import Footer from "../components/footer";

import Title from "../components/title";
import Posts from "../components/posts";
import Links from "../components/links";
import { IndexPageProps } from "../declarations";

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <Title />
        <Links />
        <hr />
        <h2>Lastest Activity</h2>
        <Posts data={this.props.data} />
        <Footer />
      </div>
    );
  }
}
//@ts-ignore
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
            path
            title
            date
            category
            description
          }
        }
      }
    }
  }
`;
