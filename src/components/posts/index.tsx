import * as React from "react";
// import Helmet from "react-helmet";
// import "./index.scss";
import Card from "../card";
import { IndexPageProps } from "../../declarations";
import Link from "gatsby-link";

class Posts extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    // const { children } = this.props;

    return (
      <div className="index-posts">
        {this.props.data.allMarkdownRemark.edges.map((edge, i) => (
          <a href={edge.node.frontmatter.path}>
            <Card
              category={edge.node.frontmatter.category}
              title={edge.node.frontmatter.title}
              date={new Date(edge.node.frontmatter.date)}
              languages={["en", "pt"]}
              key={i}
            />
          </a>
        ))}
      </div>
    );
  }
}

export default Posts;
