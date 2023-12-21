import React, { FunctionComponent } from 'react';
import { CardWrapper } from './Cards.styled';
const Cards: FunctionComponent = () => {
  return (
    <CardWrapper>
      <div className="container">
        <img alt="hello"></img>
        <div>title</div>
        <div>colors</div>
        <div>
          <div>price</div>
          <button type="button">Add</button>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Cards;
