import React, { Component } from 'react';
import Card from './Card';

class CardList extends Component {
	render() {
		this.props.items.results.map(item => {
			if(item.hostName === 'DragonflyHill') {
				console.log(item);
			}
		});

		return(
			<div>
				{
					this.props.items.results
						.map((item, idx) => <Card key={idx} data={item}/>)
				}
			</div>
		);
	}
}

export default CardList;
