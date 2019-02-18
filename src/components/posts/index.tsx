import * as React from "react";
import Card from "../card";
import { IndexPageProps } from "../../declarations";

class Posts extends React.PureComponent<IndexPageProps, {}> {
  public render() {
    return (
      <div>
        {this.props.data.allMarkdownRemark.edges
          .filter(i => i.node.frontmatter.published)
          .sort((a, b) => {
            return (
              new Date(b.node.frontmatter.date).getTime() -
              new Date(a.node.frontmatter.date).getTime()
            );
          })
          .map((edge, i) => {
            const date = edge.node.frontmatter.date.split("-").map(Number);

            return (
              <Card
                key={edge.node.fileAbsolutePath}
                absolutePath={edge.node.fileAbsolutePath}
                category={edge.node.frontmatter.category}
                title={edge.node.frontmatter.title}
                date={new Date(Date.UTC(date[0], date[1] - 1, date[2]))}
                languages={["en", "pt"]}
                description={edge.node.frontmatter.description}
              />
            );
          })}
      </div>
    );
  }
}

export default Posts;
