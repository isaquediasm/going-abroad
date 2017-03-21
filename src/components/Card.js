import React, { Component } from 'react';

class Card extends Component {
    render() {
				const { roomPhoto, hostPhoto = 'https://images.vexels.com/media/users/3/129733/isolated/preview/a558682b158debb6d6f49d07d854f99f-casual-male-avatar-silhouette-by-vexels.png', hostName, homeCity } = this.props.data;

				let style = {
						'backgroundImage': `url(https://abroadwith.imgix.net${roomPhoto})`,
						'backgroundSize': 'cover',
						'backgroundPosition': '50% 50%'
				};

        return(
					<div className="card">
						<div className="image" style={style}></div>
						<div className="host">
							<img className="photo" src={`https://abroadwith.imgix.net${hostPhoto}`} />
						</div>
						<div className="info">
							<h4 className="title">{ `${hostName}'s Home` }</h4>
							<p className="place">{ homeCity }</p>
							<p className="place">ITA, ENG</p>
						</div>

					</div>
        );
    }
}

export default Card;
/**/
