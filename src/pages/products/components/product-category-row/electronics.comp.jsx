import React from 'react';
import './electronics.style.css';
import ElectronicsProducts from '../product-row/electronics-products.comp';

const ElectronicsCategory = () => {
    return (
        <div>
            <div className="electronics-container">
                <strong>Electronics</strong>
            </div>
            <ElectronicsProducts/>
        </div>
        
    );
}

export default ElectronicsCategory;
