import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';

const items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' },
];

const Food = () => {
  return (
    <MasterLayout>
      <div className="main-content">
        <h1>Food</h1>
        <div className="items-grid">
          {items.map((item) => (
            <div key={item.id} className="item-card">
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </MasterLayout>
  );
};

export default Food;