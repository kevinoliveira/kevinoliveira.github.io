import * as React from "react";
import Link from "gatsby-link";

interface IProps {
  notHome?: boolean;
}

class Title extends React.PureComponent<IProps, {}> {
  public render() {
    return !this.props.notHome ? (
      <div className="index-title-link">
        <h1>Kevin Oliveira</h1>
      </div>
    ) : (
      <Link className="index-title-link" to="/">
        <h3>Kevin Oliveira</h3>
      </Link>
    );
  }
}

export default Title;
