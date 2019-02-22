import * as React from "react";

export interface Item {
	legend: string;
	value: string;
}
interface IProps {
	items: Item[];
}

class InformationCards extends React.PureComponent<IProps, {}> {
	public render() {
		return (
			<div className="information-wrapper">
				{this.props.items.map((item, i) => (
					<div key={i} className="information-item">
						<div className="information-item-legend">{item.legend}</div>
						<div className="information-item-value">{item.value}</div>
					</div>
				))}
			</div>
		);
	}
}

export default InformationCards;
