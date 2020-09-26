import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const {img, name, seller, price, stock} = props.product;
    const element = <FontAwesomeIcon icon={faShoppingCart} />

    

    return (
        <div className="products">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} in a stock- order soon</p>
                <button
                 onClick={() => props.handleAddProduct(props.product)}
                 className="main-btn"
                 >{element} add to cart</button>
            </div>
        </div>
    );
};

export default Product;