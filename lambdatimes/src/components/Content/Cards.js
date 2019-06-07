import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const Cards = props => {
  return (
    <div className='cards-container'>
      {props.cards.map((card, i) => {
        return <Card card={card} key={i} />;
      })}
    </div>
  );
};

Cards.propTypes = {
  card: PropTypes.object,
};

export default Cards;
