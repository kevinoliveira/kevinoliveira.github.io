import * as React from "react";
// import Helmet from "react-helmet";
import "./index.scss";

class Posts extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    // const { children } = this.props;

    return (
      <div className="index-posts">
        <ul>
          {this.props.data.allMarkdownRemark.edges.map(edge => (
            <li key={edge.node.id} className="grid-index-page-card">
              {edge.node.frontmatter.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Posts;
