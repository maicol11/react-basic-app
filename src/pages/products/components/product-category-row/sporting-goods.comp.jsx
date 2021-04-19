import React from 'react';
import './sporting-goods.style.css';
import SportingGoodsProducts from '../product-row/sporting-goods-products.comp';

const SportingGoodsCategory = () => {
    return (
        <div>
            <div className="sporting-goods-container">
                <strong>Sporting Goods</strong>
            </div>
            <SportingGoodsProducts/>
        </div>
    
    );
}

export default SportingGoodsCategory;
