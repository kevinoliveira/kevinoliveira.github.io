import * as React from "react";
import Link from "gatsby-link";

interface IProps {
  notHome?: boolean;
}

class Title extends React.PureComponent<IProps, {}> {
  public render() {
    return (
      <Link className="index-title-link" to="/">
        {this.props.notHome ? <h3>Kevin Oliveira</h3> : <h1>Kevin Oliveira</h1>}
      </Link>
    );
  }
}

export default Title;
