import * as React from "react";
import Link from "gatsby-link";
const { Helmet } = require("react-helmet");
const _GHcss = require("github-markdown-css");
import "./index.scss";
import Title from "../components/title";

export default function Template({
  data // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <Title notHome />
      {/* <Links notHome /> */}
      <Helmet title={frontmatter.title} />
      <h1>{frontmatter.title}</h1>
      <h5>
        <Link to="/blog">Go back</Link>
        &nbsp;
        {frontmatter.date}
      </h5>

      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
//@ts-ignore
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
