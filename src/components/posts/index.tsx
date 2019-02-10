import * as React from "react";
import Card from "../card";
import { IndexPageProps } from "../../declarations";

class Posts extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    return (
      <div className="index-posts">
        {this.props.data.allMarkdownRemark.edges.map((edge, i) => (
          <Card
            href={edge.node.frontmatter.path}
            category={edge.node.frontmatter.category}
            title={edge.node.frontmatter.title}
            date={new Date(edge.node.frontmatter.date)}
            languages={["en", "pt"]}
            key={i}
          />
        ))}
      </div>
    );
  }
}

export default Posts;
