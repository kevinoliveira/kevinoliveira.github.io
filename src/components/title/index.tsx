import * as React from "react";
// import Helmet from "react-helmet";
import "./index.scss";
import classNames = require("classnames");

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
        kevin olivera
      </div>
    );
  }
}

export default Title;
