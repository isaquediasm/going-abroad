import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    const cards = this.props.data.results
      .map((item, idx) =>
        <Card
          key={idx}
          data={item}
          currency={this.props.data.params.currency}
      />);

    return (
      <div className="card-list">
        {cards}
      </div>
    );
  }
}

export default CardList;
