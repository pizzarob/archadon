// @flow
import React, { Component } from 'react';
import AddToCartBtn from 'Ui/AddToCartBtn';
import FavoriteBtn from 'Ui/FavoriteBtn';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { IMAGE_ORIGIN, DEFAULT_ITEM } from 'Constants';

function ProductDetail({ product = DEFAULT_ITEM }) {

  if (!product) {
    return <Redirect to="/shop" />;
  }

  return (
    <div className="padding--top-10 flex-parent product-detail-wrap flex-col">
      <div className="product-detail flex-grow-1 global-padding ">
        <div className="product-detail-image">
          {product.Images && <img alt={product.Name} src={`${IMAGE_ORIGIN}/${product.Images[0].src}`} />}
        </div>
        <div className="product-detail-info">
          <h1 className="margin--bottom-2">Hand-Knotted {product.Name}</h1>
          <h3 className="strong">${product.Price}</h3>
          <hr />
          <FavoriteBtn id={product.ID} />
          <p className="margin--top-3">{product.LongDescription}</p>
          <p className="margin--bottom-5">{product.ShortDescription}</p>
          {product.Qty > 0 && <AddToCartBtn id={product.ID} />}
          {product.Qty === 0 && <h3>Sold</h3>}
        </div>
      </div>
      {/*<div className="next-bar">
        <h2>Next</h2>
      </div>*/}
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    product: state.productDetails.find(product => product.ID === id),
  };
};

export default connect(mapStateToProps)(ProductDetail);
