import * as React from "react";
// import Helmet from "react-helmet";
// import "./index.scss";
import classNames = require("classnames");
import Link from "gatsby-link";

interface IProps {
  notHome?: boolean;
}

class Title extends React.PureComponent<IProps, {}> {
  public render() {
    // const { children } = this.props;

    return (
      <div
        className={classNames("index-title", this.props.notHome && "not-home")}
      >
        <Link className="index-title-link" to="/">
          kevin olivera
        </Link>
      </div>
    );
  }
}

export default Title;
