import * as React from "react";
import Helmet from "react-helmet";
import "./index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "gatsby-link";
import InformationCards, { Item } from "../components/informationCards";

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
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
    const items: Item[] = [
      // { legend: "BTC", value: "1DECAF2uSpFTP4L1fAHR8GCLrPqdwdLse9" },
      // { legend: "ETC", value: "0xDECAF9CD2367cdbb726E904cD6397eDFcAe6068D" }
      { legend: "POLITICAL", value: "anarcho-capitalist" },
      { legend: "FREEDOM", value: "FIGHTER" }
    ];

    return (
      <div>
        <Helmet
          title="Kevin Oliveira"
          meta={[
            { name: "description", content: "Kevin Oliveira blog " },
            { name: "keywords", content: "sample, something" },
            { name: "theme-color", content: "#fffff0" }
          ]}
        />

        <div className="background-top" />
        <div className="children-wrapper">
          {/* <Header /> */}
          {/* <div className="children-card">{this.props.children()}</div> */}
          {/* {this.props.children()} */}
          {/* <Footer /> */}
          <div className="page-title-grid">
            <Link to="/">
              <h1>{this.props.data.site.siteMetadata.title}</h1>
            </Link>
          </div>
          <div className="links-grid">
            <Header />
          </div>
          <div className="information-grid">
            <InformationCards items={items} />
          </div>
          {/* <div className="example-3 title-grid">
            <h1>{window.document.title}</h1>
          </div> */}
          <div className="example content-grid">
            {/* content-grid */}
            {this.props.children()}
          </div>
          {/* <div className="example six">Six</div> */}
        </div>
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
