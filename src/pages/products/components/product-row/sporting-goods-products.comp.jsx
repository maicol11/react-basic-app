import React from 'react';
import './sporting-goods-products.style.css';

const SportingGoodsProducts = () => {
    return (
        <div>
            <div className="sporting-goods-product">
                <span className="item">Football</span> 
                <span className="price">$49.99</span>
            </div>
            <div className="sporting-goods-product">
                <span className="item">Baseball</span> 
                <span className="price">$9.99</span>
            </div>
            <div className="sporting-goods-product">
                <span className="item basketball-item">Basketball</span> 
                <span className="basketball-price">$29.99</span>
            </div>
        </div>
    );
}

export default SportingGoodsProducts;
