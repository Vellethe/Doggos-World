import React, { useEffect, useState } from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
import getAllSnacks from '../../apiCalls/Snacks/GetAllSnacks';
import ShoppingCart from '../Checkout/ShoppingCart';

const Snacks = () => {

  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSnacks();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const addToCart = (item) => {
    console.log("Adding to cart", item);
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(cartItem => cartItem.id === item.id);
      if (existingItemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (itemId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== itemId));
  };

  const updateQuantity = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item.id);
    } else {
      setCart(prevCart => {
        const updatedCart = prevCart.map(cartItem =>
          cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
        );
        return updatedCart;
      });
    }
  };


  return (
    <MasterLayout>
      <div className="content-container">
        <aside className="sidebar left-sidebar">
          <p>Never forget dogsnacks</p>
        </aside>
        <div className="main-content">
          <h1>Snacks</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error loading snacks data: {error.message}</p>}
          {!loading && !error && (
            <div className="items-grid">
              {items.map((item) => (
                <div key={item.id} className="item-card">
                  <div className="item-content">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="item-image"
                    />
                    <div className="item-info">
                      <div className="item-brand">{item.brand}</div>
                      <div className="item-name">{item.name}</div>
                    </div>
                    <div className="item-price-and-button">
                      <div className="item-price">{item.price + "kr"}</div>
                      <button
                        className='amount'
                        onClick={() => addToCart(item)}
                      >
                        Lägg till
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <ShoppingCart
        cart={cart}
        removeFromCart={removeFromCart}
        updateQuantity={updateQuantity}
      />
    </MasterLayout>
  );
};

export default Snacks;