import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
import dogfood from '../../assets/Images/dogfood.jpg';

const items = [
  { id: 1, name: 'Item 1', image: dogfood },
  { id: 2, name: 'Item 2', image: dogfood },
  { id: 3, name: 'Item 3', image: dogfood },
  { id: 4, name: 'Item 4', image: dogfood },
  { id: 5, name: 'Item 5', image: dogfood },
  { id: 6, name: 'Item 6', image: dogfood },
  { id: 7, name: 'Item 7', image: dogfood },
  { id: 8, name: 'Item 8', image: dogfood },
  { id: 9, name: 'Item 9', image: dogfood },
  { id: 10, name: 'Item 10', image: dogfood },
  { id: 11, name: 'Item 1', image: dogfood },
  { id: 12, name: 'Item 2', image: dogfood },
  { id: 13, name: 'Item 3', image: dogfood },
  { id: 14, name: 'Item 4', image: dogfood },
  { id: 15, name: 'Item 5', image: dogfood },
  { id: 16, name: 'Item 6', image: dogfood },
  { id: 17, name: 'Item 7', image: dogfood },
  { id: 18, name: 'Item 8', image: dogfood },
  { id: 19, name: 'Item 9', image: dogfood },
  { id: 20, name: 'Item 10', image: dogfood },
  { id: 21, name: 'Item 1', image: dogfood },
  { id: 22, name: 'Item 2', image: dogfood },
  { id: 23, name: 'Item 3', image: dogfood },
  { id: 24, name: 'Item 4', image: dogfood },
  { id: 25, name: 'Item 5', image: dogfood },
  { id: 26, name: 'Item 6', image: dogfood },
  { id: 27, name: 'Item 7', image: dogfood },
  { id: 28, name: 'Item 8', image: dogfood },
  { id: 29, name: 'Item 9', image: dogfood },
  { id: 30, name: 'Item 10', image: dogfood }
];

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
            {items.map((item) => (
              <div key={item.id} className="item-card">
                <div className='item-content'>
                <img src={item.image} alt={item.name} className="item-image" />
                <div className="item-name">{item.name}</div>
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