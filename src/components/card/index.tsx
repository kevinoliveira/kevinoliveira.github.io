import * as React from "react";
import { language } from "../../declarations";

import "./index.scss";

interface IProps {
  languages: language[];
  title: string;
  category: string;
  date?: Date;
}

class Card extends React.PureComponent<IProps, {}> {
  public render() {
    const { languages, title, category, date } = this.props;
    return (
      <div className="card-body">
        <div className="card-body-title">{title}</div>
        <div className="card-body-content">
          <div className="card-body-content-left">
            <div className="card-body-category">{category}</div>
            <div className="card-body-date">{date.toDateString()}</div>
          </div>
          <div className="card-body-content-right">
            <div className="card-body-languages">
              {"[" + languages.join(", ") + "]"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
