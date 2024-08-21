import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ShoppingCart.css';

const ShoppingCart = ({ cart = [], removeFromCart, updateQuantity }) => {
    const totalCheckoutPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <MasterLayout>
            <div className="shopping-cart">
                <h2>Your Shopping Cart</h2>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <>
                        <ul>
                            {cart.map((item) => {
                                const totalPrice = item.price * item.quantity;

                                return (
                                    <li key={item.id} className="cart-item">
                                        <div className="cart-item-details">
                                            <img src={item.image} alt={item.name} className="cart-item-image" />
                                            <div className="cart-item-info">
                                                <h3>{item.name}</h3>
                                                <p className='cart-item-brand'>{item.brand}</p>
                                                <p>Styckpris: {item.price} kr</p>
                                                <p>Total: {totalPrice} kr</p>
                                                <div className="cart-item-quantity">
                                                    <button className='buttonQuantity'
                                                        onClick={() => updateQuantity(item, item.quantity - 1)}
                                                        disabled={item.quantity <= 1} 
                                                    >
                                                        -
                                                    </button>
                                                    <span>{item.quantity}</span>
                                                    <button className='buttonQuantity'
                                                        onClick={() => updateQuantity(item, item.quantity + 1)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="cart-total">
                            <h3>Total Checkout Price: {totalCheckoutPrice} kr</h3>
                        </div>
                    </>
                )}
            </div>
        </MasterLayout>
    );
};

export default ShoppingCart;