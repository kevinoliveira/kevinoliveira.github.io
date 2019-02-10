import * as React from "react";
import { language } from "../../declarations";

interface IProps {
  languages: language[];
  title: string;
  category: string;
  date?: Date;
  href?: string;
}

class Card extends React.PureComponent<IProps, {}> {
  public render() {
    const { languages, title, category, date, href } = this.props;
    return (
      <div>
        <a href={href}>
          <h3>{`${title}`}</h3>
        </a>
        <h6>{`${date.toDateString()} | ${category || "others"} | ${"[" +
          languages.join(", ") +
          "]"}`}</h6>
      </div>
    );
  }
}

export default Card;
