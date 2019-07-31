import * as React from "react";
import { language } from "../../declarations";
import "./card.scss";

interface IProps {
	languages: language[];
	title: string;
	category: string;
	date?: Date;
	absolutePath: string;
	description?: string;
}

class Card extends React.PureComponent<IProps, {}> {
	public pathTourlResolver = (path: string) => {
		return `/blog${path.split("src/md")[1]}`.replace(".md", "");
	};
	public render() {
		const { title, category, date, absolutePath, description } = this.props;
		return (

			<a href={this.pathTourlResolver(absolutePath)} className="link">
				<div className="card">
						<h3 >{title}</h3>
					
					<b>{`${date.getUTCFullYear()}-${date.getUTCMonth() +
						1}-${date.getUTCDate()} | ${category || "Others"} `}</b>
					<br />
					{description || "no description"}
				</div>
			</a>
		);
	}
}

export default Card;
