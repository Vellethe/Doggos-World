import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
import mockData from '../../data/mockData.json';


const Food = () => {
  return (
    <MasterLayout>
      <div className="content-container">
        <aside className="sidebar left-sidebar">
          <p>Never forget dogtreats</p>
        </aside>
        <div className="main-content">
          <h1>Food</h1>
          <div className="items-grid">
            {mockData.map((item) => (
              <div key={item.id} className="item-card">
                <div className="item-content">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <div className="item-name">{item.name}</div>
                    <div className="item-price">{item.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Food;