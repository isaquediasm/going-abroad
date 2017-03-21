import React, {Component} from 'react';
import Card from './Card';

class CardList extends Component {
  render() {
    return (
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
