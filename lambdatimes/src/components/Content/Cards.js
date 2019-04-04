import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card =>
      <Card card={card} />
        )}
    </div>
  )
}

//Use map to return card component with card properties//


// Make sure you include prop types for all of your incoming props

Cards.PropTypes = {
  Cards: PropTypes.shape({
    headline: PropTypes.string.isRequired,
    img: PropTypes.symbol.isRequired,
    author: PropTypes.string.isRequired
  })
}






export default Cards;



{/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/}