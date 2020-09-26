import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total, prd) => total + prd.price , 0);
    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if(total > 20){
        shipping = 8.50;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = total + shipping + Number(tax);
    const formatPrice = num =>{
        const pricision = num.toFixed(2)
        return pricision;
    }

    return (
        <div>
            <h1>Order Summery</h1>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {formatPrice(total)}</p>
            <p>Shipping & Handling: {shipping}</p>
            <p>Estimated Tax: {tax}</p>
            <h2>Order Total: {formatPrice(grandTotal)}</h2>
        </div>
    );
};

export default Cart;