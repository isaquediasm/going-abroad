import React, {Component} from 'react';
import profile from '../resources/profile.png';

const domain = 'https://abroadwith.imgix.net';

class Card extends Component {
  /**
  * Render host's info like picture.
  *
  * @param {string} hostPhoto
  */
  renderHostInfo(hostPhoto = profile) {
    return (
      <div className="host">
        <img className="photo" src={hostPhoto}/>
      </div>
    );
  }

  /**
  * Render the room's picture based on the passed parameter. If the parameter is undefined,
  * catch the first home picture.
  *
	* @param {string} roomPhoto
	*/
  renderRoomPhoto(roomPhoto = this.props.data.homePhotosWithOrder[0].split(',')[0]) {
    const style = {
      'backgroundImage': `url(${domain + roomPhoto})`,
      'backgroundSize': 'cover',
      'backgroundPosition': '50% 50%'
    };

    return <div className="image" style={style}></div>;
  }

  /***
  * Render the price with the respective currency
	**/
  renderPrice(price) {
    const availableCurrencies = {
      'EUR': '€',
      'USD': '$'
    };
    const userCurrency = availableCurrencies[this.props.currency];

    return <div className="price">{userCurrency + price.toFixed(2)}</div>
  }

  render() {
    let {
      roomPhoto,
      hostPhoto,
      hostName,
      homeCity,
      price,
      interestedLanguages
    } = this.props.data;

    const languages = interestedLanguages && interestedLanguages.map((lang, idx) => <span key={idx}>{lang}</span>);

    return (
      <div className="card">
        {this.renderRoomPhoto(roomPhoto)}
        {this.renderPrice(price)}
        {this.renderHostInfo(hostPhoto && `${domain + hostPhoto}`)}

        <div className="info">
          <h4 className="title">{`${hostName}'s Home`}</h4>
          <p className="place">{homeCity}</p>
          <p className="languages">{languages}</p>
        </div>
      </div>
    );
  }
}

export default Card;
