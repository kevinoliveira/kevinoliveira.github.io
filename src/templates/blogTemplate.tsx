import * as React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "./index.scss";
import CardWrapper from "../components/cardWrapper";
import Grid from "../components/grid";
import Title from "../components/title";
import Links from "../components/links";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Grid>
      <Title notHome />
      <Links notHome />
      <div className="blog-post-container">
        <Helmet title={frontmatter.title} />
        <div className="blog-post">
          <h1 className="title">{frontmatter.title}</h1>
          <div className="subtitle">
            <Link to="/blog" className="go-back-wrapper">
              go back
            </Link>
            <h5>{frontmatter.date}</h5>
          </div>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Grid>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
