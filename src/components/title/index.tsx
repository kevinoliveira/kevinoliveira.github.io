import * as React from "react";
// import Link from "gatsby-link";

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
      <a className="index-title-link" href="/">
        <h3>Kevin Oliveira</h3>
      </a>
    );
  }
}

export default Title;
