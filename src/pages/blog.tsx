import * as React from "react";
//@ts-ignore
import * as groupBy from "lodash.groupby";

import Card from "../components/card";
import Grid from "../components/grid";
import Title from "../components/title";
import Links from "../components/links";

interface IndexPageProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
		allMarkdownRemark: {
			edges: IEdge[];
		};
	};
}

interface IEdge {
	node: {
		fileAbsolutePath: string;
		frontmatter: {
			title: string;
			date: string;
			tags?: string[];
			category?: string;
			description?: string;
			published: boolean;
		};
	};
}

export default class BlogPages extends React.Component<IndexPageProps, {}> {
	public render() {
		const groups = groupBy(
			this.props.data.allMarkdownRemark.edges.filter(i => i.node.frontmatter.published),
			(edge: IEdge) => edge.node.frontmatter.category,
		);

		let categories = [];
		for (const group in groups) {
			const itens = groups[group];
			const groupName = group !== "null" ? group : "Others";
			const element = (
				<div key={groupName}>
					<h2 className="category">{groupName + ` (${itens.length})`}</h2>
					<dl className="itens">
						{itens.map(i => (
							<Card
								key={i.node.fileAbsolutePath}
								absolutePath={i.node.fileAbsolutePath}
								title={i.node.frontmatter.title}
								category={groupName}
								date={new Date(i.node.frontmatter.date)}
								languages={["en", "pt"]}
								description={i.node.frontmatter.description}
							/>
						))}
					</dl>
				</div>
			);
			categories.push(element);
		}

		return (
			<div>
				<Title notHome />
				<Links />
				<hr />
				<h1 className="title">Blog Posts</h1>
				{categories}
			</div>
		);
	}
}
//@ts-ignore
export const pageQuery = graphql`
	query BlogQuery {
		site {
			siteMetadata {
				title
			}
		}
		allMarkdownRemark {
			edges {
				node {
					id
					fileAbsolutePath
					frontmatter {
						title
						date
						tags
						category
						description
						published
					}
				}
			}
		}
	}
`;
