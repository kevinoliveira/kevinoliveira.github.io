import * as React from "react";
// import Link from "gatsby-link";
const { Helmet } = require("react-helmet");
const _GHcss = require("github-markdown-css");
import "./index.scss";
import Title from "../components/title";
import Footer from "../components/footer";
import Links from "../components/links";

export default function Template({
	data, // this prop will be injected by the GraphQL query below.
}: any) {
	console.log(data);
	const { markdownRemark } = data; // data.markdownRemark holds our post data
	const { frontmatter, html } = markdownRemark;
	return (
		<div>
			<Helmet title={frontmatter.title} />
			<Title notHome />
			<Links />
			<hr />

			<h1>{frontmatter.title}</h1>
			{!frontmatter.published ? (
				<h4>
					WARNING! this post is unpublished, there still work to be done and nothing here
					should be taken seriously.
				</h4>
			) : null}
			<h5>
				<a href="/blog">Go back</a>
				&nbsp;
				{frontmatter.date}
			</h5>

			<div dangerouslySetInnerHTML={{ __html: html }} />
			<Footer />
		</div>
	);
}
//@ts-ignore
export const pageQuery = graphql`
	query BlogPostByPath($id: String!) {
		markdownRemark(id: { eq: $id }) {
			html
			fileAbsolutePath
			id
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
				published
			}
		}
	}
`;
