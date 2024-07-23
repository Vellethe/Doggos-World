import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
// import mockData from '../../data/mockData.json'; //removed until I can import image in json.
import dogfood from '../../assets/images/dogfood.jpg';


const items = [
  { id: 1, name: "Basia", price: "260kr", image: dogfood },
  { id: 2, name: "Gil", price: "108kr", image: dogfood },
  { id: 3, name: "Bail", price: "122kr", image: dogfood },
  { id: 4, name: "Nettie", price: "397kr", image: dogfood },
  { id: 5, name: "Krystalle", price: "428kr", image: dogfood },
  { id: 6, name: "Xylina", price: "390kr", image: dogfood },
  { id: 7, name: "Rafaello", price: "82kr", image: dogfood },
  { id: 8, name: "Alta", price: "213kr", image: dogfood },
  { id: 9, name: "Albertine", price: "358kr", image: dogfood },
  { id: 10, name: "Fanchette", price: "361kr", image: dogfood },
  { id: 11, name: "Loutitia", price: "210kr", image: dogfood },
  { id: 12, name: "Bartolemo", price: "488kr", image: dogfood },
  { id: 13, name: "Felita", price: "353kr", image: dogfood },
  { id: 14, name: "Courtnay", price: "328kr", image: dogfood },
  { id: 15, name: "Jasun", price: "263kr", image: dogfood },
  { id: 16, name: "Natividad", price: "298kr", image: dogfood },
  { id: 17, name: "Gertrude", price: "76kr", image: dogfood },
  { id: 18, name: "Dulcia", price: "245kr", image: dogfood },
  { id: 19, name: "Mar", price: "349kr", image: dogfood },
  { id: 20, name: "Stepha", price: "488kr", image: dogfood },
  { id: 21, name: "Chester", price: "481kr", image: dogfood },
  { id: 22, name: "Thurston", price: "420kr", image: dogfood },
  { id: 23, name: "Adams", price: "481kr", image: dogfood },
  { id: 24, name: "Gizela", price: "446kr", image: dogfood },
  { id: 25, name: "Miguela", price: "132kr", image: dogfood },
  { id: 26, name: "Rice", price: "140kr", image: dogfood },
  { id: 27, name: "Nathanael", price: "286kr", image: dogfood },
  { id: 28, name: "Falkner", price: "431kr", image: dogfood },
  { id: 29, name: "Gabriellia", price: "69kr", image: dogfood },
  { id: 30, name: "Arne", price: "133kr", image: dogfood }
];

const Snacks = () => {
  return (
    <MasterLayout>
      <div className="main-content">
        <h1>Snacks</h1>
        <div className="items-grid">
            {items.map((item) => (
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
    </MasterLayout>
  );
};

export default Snacks;