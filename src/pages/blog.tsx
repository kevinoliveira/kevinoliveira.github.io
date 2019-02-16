import * as React from "react";
//@ts-ignore
import * as groupBy from "lodash.groupby";

import Card from "../components/card";
import Grid from "../components/grid";
import Title from "../components/title";
import Links from "../components/links";

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
    allMarkdownRemark: {
      edges: IEdge[];
    };
  };
}

interface IEdge {
  node: {
    frontmatter: {
      title: string;
      path: string;
      date: string;
      tags?: string[];
      category?: string;
    };
  };
}

export default class BlogPages extends React.Component<IndexPageProps, {}> {
  public render() {
    const groups = groupBy(
      this.props.data.allMarkdownRemark.edges,
      (edge: IEdge) => edge.node.frontmatter.category
    );

    let categories = [];
    for (const group in groups) {
      const itens = groups[group];
      const groupName = group !== "null" ? group : "Others";
      const element = (
        <div key={groupName}>
          <h2 className="category">{groupName + ` (${itens.length})`}</h2>
          <dl className="itens">
            {itens.map(i => (
              <Card
                href={i.node.frontmatter.path}
                title={i.node.frontmatter.title}
                category={groupName}
                date={new Date(i.node.frontmatter.date)}
                languages={["en", "pt"]}
              />
            ))}
          </dl>
        </div>
      );
      categories.push(element);
    }

    return (
      <div>
        <Title notHome />
        <Links />
        <hr />
        <h1 className="title">Blog Posts</h1>
        {categories}
      </div>
    );
  }
}
//@ts-ignore
export const pageQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            path
            date
            tags
            category
          }
        }
      }
    }
  }
`;
