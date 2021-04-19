import React from 'react';
import './electronics-products.style.css';

const ElectronicsProducts = () => {
    return (
        <div>
            <div className="electronics-product">
                <span className="item">iPod Touch</span> 
                <span className="electronic-price"> $99.99</span>
            </div>
            <div className="electronics-product">
                <span className="item iphone-item">iPhone 5</span> 
                <span className="electronic-price iphone-price">$399.99</span>
            </div>
            <div className="electronics-product">
                <span className="item">Nexus 7</span> 
                <span className="electronic-price nexus-price">$199.99</span>
            </div>
        </div>
    );
}

export default ElectronicsProducts;