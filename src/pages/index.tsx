import * as React from "react";
import Footer from "../components/footer";

import "./index.scss";
import Grid from "../components/grid";
import Title from "../components/title";
import Art from "../components/art";
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
      <Grid>
        <Title />
        <Art />
        <Links />
        {/* <Footer /> */}
        <Posts data={this.props.data} />
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
            path
            title
            date
            category
          }
        }
      }
    }
  }
`;
