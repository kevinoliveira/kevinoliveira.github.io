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
          <h3>{title}</h3>
        </a>
        <b>{`${date.toDateString()} | ${category || "others"} `}</b>
        <br />
        Rerum sed quo aperiam et. Ut dolorem possimus assumenda labore est
        neque.
      </div>
    );
  }
}

export default Card;
