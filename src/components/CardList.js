import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
      <div className="card-list">
        {
          this.props.data.results
            .map((item, idx) => <Card key={idx} data={item} currency={this.props.data.params.currency} />)
        }
      </div>
    );
  }
}

export default CardList;
