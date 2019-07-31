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
				<Title notHome/>
				<Links />
				{/*<hr />*/}
				<h3>Lastest Activity</h3>
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
					fileAbsolutePath
					frontmatter {
						title
						date
						category
						description
						published
					}
				}
			}
		}
	}
`;
