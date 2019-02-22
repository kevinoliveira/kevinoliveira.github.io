declare const graphql: (query: TemplateStringsArray) => void;
// declare module "react-helmet";

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
					fileAbsolutePath: string;
					frontmatter: {
						title: string;
						date: string;
						category: string;
						description: string;
						published: boolean;
					};
				};
			}[];
		};
	};
}

export type language = "en" | "pt";
