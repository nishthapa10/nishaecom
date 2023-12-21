import React, { FunctionComponent } from 'react';
import allProducts from './../../assets/allproducts.png';
import { BodyWrapper } from './Body.styled';
const Body: FunctionComponent<any> = () => {
  return (
    <BodyWrapper>
      <div className="bodyWrapper">
        <div className="allProductsImg">
          <div className="imgContainer">
            <img className="image" src={allProducts}></img>
            <div className="bodyText">All Products</div>
          </div>
        </div>
      </div>
    </BodyWrapper>
  );
};

export default Body;
