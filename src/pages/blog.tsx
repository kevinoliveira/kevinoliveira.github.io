import * as React from "react";
import Link from "gatsby-link";
import * as groupBy from "lodash.groupby";

import "./blog.scss";
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

// interface IState {
//   offline: boolean;
// }
export default class BlogPages extends React.Component<IndexPageProps, {}> {
  // state = {
  //   // I KNOW THIS IS STRANGE,
  //   // BUT GATSBY DOES NOT LIKE THE WINDOW, SEE MORE ON https://github.com/gatsbyjs/gatsby/issues/5835
  //   // I KNOW... I HATE IT TOO.
  //   offline: typeof window !== "undefined" && !window.navigator.onLine
  // };
  // constructor(props: IndexPageProps, context: any) {
  //   super(props, context);
  // }

  // setOnline = () => {
  //   this.setState({ offline: false });
  // };
  // setOffline = () => {
  //   this.setState({ offline: true });
  // };

  // public componentWillMount = () => {
  //   console.log("mount");
  //   if (typeof window !== "undefined") {
  //     window.addEventListener("offline", this.setOffline, false);
  //     window.addEventListener("online", this.setOnline, false);
  //   }
  // };

  // public componentWillUnmount = () => {
  //   console.log("unmount");
  //   if (typeof window !== "undefined") {
  //     window.removeEventListener("offline", this.setOffline, false);
  //     window.removeEventListener("online", this.setOnline, false);
  //   }
  // };

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
          <h3 className="category">{groupName + ` (${itens.length})`}</h3>
          <div className="itens">
            {itens.map(i => (
              <a href={i.node.frontmatter.path}>
                <Card
                  title={i.node.frontmatter.title}
                  category={groupName}
                  date={new Date(i.node.frontmatter.date)}
                  languages={["en", "pt"]}
                />
              </a>
            ))}
          </div>
        </div>
      );
      categories.push(element);
    }

    return (
      <Grid>
        <Title notHome />
        <Links notHome />
        <div className="grid-wrapper-categories">
          <h1 className="title">Blog Posts</h1>
          {categories}
        </div>
      </Grid>
    );
  }
}

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
