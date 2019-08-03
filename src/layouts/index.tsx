import * as React from "react";
const { Helmet } = require("react-helmet");
require("github-markdown-css");
require("./index.scss");

interface DefaultLayoutProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
			};
		};
	};
	children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
	public render() {
		return (
			<div className="markdown-body">
				<Helmet
					title="Kevin Oliveira"
					meta={[
						{ name: "description", content: "Kevin Oliveira blog " },
						{ name: "keywords", content: "sample, something" },
						{ name: "theme-color", content: "#ffffff" },
					]}
				/>
				{this.props.children}
			</div>
		);
	}
}

export default DefaultLayout;
//@ts-ignore
export const pageQuery = graphql`
	query LayoutQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;
