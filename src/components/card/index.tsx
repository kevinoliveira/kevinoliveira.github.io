import * as React from "react";
import { language } from "../../declarations";

interface IProps {
  languages: language[];
  title: string;
  category: string;
  date?: Date;
  href?: string;
  description?: string;
}

class Card extends React.PureComponent<IProps, {}> {
  public render() {
    const { title, category, date, href, description } = this.props;
    return (
      <div>
        <a href={href}>
          <h3>{title}</h3>
        </a>
        <b>{`${date.getUTCFullYear()}-${date.getUTCMonth() +
          1}-${date.getUTCDate()} | ${category || "Others"} `}</b>
        <br />
        {description || "no description"}
      </div>
    );
  }
}

export default Card;
