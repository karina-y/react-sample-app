import React from 'react';
import {formatPrice} from '../helpers';

//react's version of ng-repeat
class Fish extends React.Component {
  render() {
    const {details} = this.props;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add To Order' : 'Sold Out!';
    
    return (
      <li className="menu-fish">
        {/* when setting the attribute value of a tag to a variable, you don't need the double quotes */}
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">
            {/* remember, anything in the curlies is JUST JS */}
            {formatPrice(details.price)}
          </span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={() => this.props.addToOrder('fish-1')}>{buttonText}</button>
      </li>
    )
  }
}

export default Fish;
