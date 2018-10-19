import * as React from "react";
import Helmet from "react-helmet";
import "./index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="Kevin Oliveira"
          meta={[
            { name: "description", content: "Kevin Oliveira blog " },
            { name: "keywords", content: "sample, something" },
            { name: "theme-color", content: "#27ae60" }
          ]}
        />

        <div className="background-top" />
        <div className="children-wrapper">
          <Header />
          <div className="children-card">{this.props.children()}</div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default DefaultLayout;
