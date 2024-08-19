import React, { useEffect, useState } from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
import getAllFood from '../../apiCalls/Food/GetAllFood';

const Food = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllFood();
        setItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  return (
    <MasterLayout>
      <div className="content-container">
        <aside className="sidebar left-sidebar">
          <p>Never forget dogtreats</p>
        </aside>
        <div className="main-content">
          <h1>Food</h1>
          {loading && <p>Loading...</p>}
          {error && <p>Error loading food data: {error.message}</p>}
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
                      <button className='amount'>Click here</button>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MasterLayout>
  );
};

export default Food;