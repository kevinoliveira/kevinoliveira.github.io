import * as React from "react";
// import Link from "gatsby-link";

interface State {
	menuOpen: boolean;
}

interface IMenuItem {
	key: string;
	to: string;
	title: string | JSX.Element;
	external?: boolean;
	target?: string;
	rel?: string;
}

interface IProps {
	notHome?: boolean;
}

class Links extends React.Component<IProps, State> {
	state = { menuOpen: false };

	private flipState = () => {
		this.setState({ menuOpen: !this.state.menuOpen });
	};

	render() {
		const menuItens: IMenuItem[] = [
			{ key: "blog", to: "/blog", title: "Posts" },
			{ key: "projects", to: "/projects", title: "Projects" },
			{ key: "broken", to: "/broken", title: "Broken Link" },
			{
				external: true,
				key: "github",
				to: "https://www.github.com/kevinoliveira",
				target: "_blank",
				title: "Github",
			},
		];
		const menuItensJSX = menuItens.map(item => {
			const { title, to, external, ...rest } = item;
			return !!external ? (
				<span key={to}>
					<a href={to} {...rest}>
						{title}
					</a>
					&nbsp; &nbsp; &nbsp;
				</span>
			) : (
				<span key={to}>
					<a {...rest} href={to}>
						{title}
					</a>
					&nbsp; &nbsp; &nbsp;
				</span>
			);
		});

		return <h5>{menuItensJSX}</h5>;
	}
}

export default Links;
