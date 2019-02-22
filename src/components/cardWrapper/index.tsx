import * as React from "react";

class CardWrapper extends React.PureComponent<{}, {}> {
	public render() {
		return <div className="children-card">{this.props.children}</div>;
	}
}

export default CardWrapper;
