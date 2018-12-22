import * as React from "react";
import Helmet from "react-helmet";
import "./index.scss";


class Grid extends React.PureComponent<{}, {}> {
    public render() {
        const { children } = this.props;


        return (
            <div className="main-grid-wrapper">

                <div className="main-grid">

                    {children}
                </div>
            </div>
        );
    }
}

export default Grid;
