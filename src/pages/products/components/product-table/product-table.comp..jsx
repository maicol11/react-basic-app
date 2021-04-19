import React from 'react';
import './product-table.style.css';
import SportingGoodsCategory from '../product-category-row/sporting-goods.comp';
import ElectronicsCategory from '../product-category-row/electronics.comp';

const ProductTable = () => {
    return (
        <div className="product-table-container">
            <span className="product-name">Name</span>
            <span className="product-price">Price</span>
            <SportingGoodsCategory/>
            <ElectronicsCategory/>
        </div>
    );
}

export default ProductTable;
