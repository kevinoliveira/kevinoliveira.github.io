import * as React from "react";
import Link from "gatsby-link";
import "./index.scss";
import classNames = require("classnames");

interface State {
  menuOpen: boolean;
}

interface IMenuItem {
  key: string;
  to: string;
  title: string | JSX.Element;
  external?: boolean;
  target?: string;
  rel?: string;
}

interface IProps {
  notHome?: boolean;
}

class Links extends React.Component<IProps, State> {
  state = { menuOpen: false };

  private flipState = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  };

  render() {
    const menuItens: IMenuItem[] = [
      { key: "blog", to: "/blog", title: "blog" },
      { key: "page-2", to: "/page-2", title: "page2" },
      { key: "contact", to: "/contact", title: "contact" },
      {
        external: true,
        key: "github",
        to: "https://www.github.com/kevinoliveira",
        target: "_blank",
        title: "Github"
      }
    ];
    const menuItensJSX = menuItens.map(item => {
      const { title, to, external, ...rest } = item;
      return !!external ? (
        <a href={to} {...rest}>
          {title}
        </a>
      ) : (
        <Link {...rest} to={to}>
          {title}
        </Link>
      );
    });

    return (
      <div
        className={classNames("index-links", this.props.notHome && "not-home")}
      >
        {menuItensJSX}
      </div>
    );
  }
}

export default Links;