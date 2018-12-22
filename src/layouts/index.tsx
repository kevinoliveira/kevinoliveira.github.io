import * as React from "react";
import Helmet from "react-helmet";
import "./index.scss";

interface DefaultLayoutProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {

    return (
      <div className="helmet-wrapper">
        <Helmet
          title="Kevin Oliveira"
          meta={[
            { name: "description", content: "Kevin Oliveira blog " },
            { name: "keywords", content: "sample, something" },
            { name: "theme-color", content: "#f5f5f5" }
          ]}
        />
        {this.props.children()}
      </div>
    );
  }
}

export default DefaultLayout;

export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
