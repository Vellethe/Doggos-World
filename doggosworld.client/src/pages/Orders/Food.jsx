import React from 'react';
import MasterLayout from '../Homepage/MasterLayout';
import '../../CSS/ItemGrid.css';
// import mockData from '../../data/mockData.json'; //removed until I can import image in json.
import dogfood from '../../assets/images/dogfood.jpg';

const items = [
  { id: 1, name: "Probiotix Premium Blend", brand: "Svenska DjurApoteket", price: "299kr", image: dogfood },
  { id: 2, name: "NutriBites Chicken Delight", brand: "PetCare Co.", price: "108kr", image: dogfood },
  { id: 3, name: "OmegaPlus Salmon Feast", brand: "FurryFriends Inc.", price: "122kr", image: dogfood },
  { id: 4, name: "VitalPaws Beef & Barley", brand: "HealthyPaws Ltd.", price: "397kr", image: dogfood },
  { id: 5, name: "Holistic Grain-Free Formula", brand: "PurePet Supplies", price: "428kr", image: dogfood },
  { id: 6, name: "SavorySelect Lamb & Rice", brand: "BestBuddies Pet Products", price: "390kr", image: dogfood },
  { id: 7, name: "Probiotix Small Bites", brand: "Svenska DjurApoteket", price: "82kr", image: dogfood },
  { id: 8, name: "NutriBites Puppy Growth", brand: "PetCare Co.", price: "213kr", image: dogfood },
  { id: 9, name: "OmegaPlus Duck & Sweet Potato", brand: "FurryFriends Inc.", price: "358kr", image: dogfood },
  { id: 10, name: "VitalPaws Chicken & Veggie", brand: "HealthyPaws Ltd.", price: "361kr", image: dogfood },
  { id: 11, name: "Holistic Adult Formula", brand: "PurePet Supplies", price: "210kr", image: dogfood },
  { id: 12, name: "SavorySelect Senior Blend", brand: "BestBuddies Pet Products", price: "488kr", image: dogfood },
  { id: 13, name: "Probiotix Lamb & Oatmeal", brand: "Svenska DjurApoteket", price: "353kr", image: dogfood },
  { id: 14, name: "NutriBites Sensitive Stomach", brand: "PetCare Co.", price: "328kr", image: dogfood },
  { id: 15, name: "OmegaPlus Turkey & Rice", brand: "FurryFriends Inc.", price: "263kr", image: dogfood },
  { id: 16, name: "VitalPaws Grain-Free Chicken", brand: "HealthyPaws Ltd.", price: "298kr", image: dogfood },
  { id: 17, name: "Holistic Puppy Formula", brand: "PurePet Supplies", price: "76kr", image: dogfood },
  { id: 18, name: "SavorySelect Beef & Potato", brand: "BestBuddies Pet Products", price: "245kr", image: dogfood },
  { id: 19, name: "Probiotix Adult Maintenance", brand: "Svenska DjurApoteket", price: "349kr", image: dogfood },
  { id: 20, name: "NutriBites High Energy", brand: "PetCare Co.", price: "488kr", image: dogfood },
  { id: 21, name: "OmegaPlus Salmon & Pea", brand: "FurryFriends Inc.", price: "481kr", image: dogfood },
  { id: 22, name: "VitalPaws Senior Chicken", brand: "HealthyPaws Ltd.", price: "420kr", image: dogfood },
  { id: 23, name: "Holistic Wild Game Blend", brand: "PurePet Supplies", price: "481kr", image: dogfood },
  { id: 24, name: "SavorySelect Venison & Pumpkin", brand: "BestBuddies Pet Products", price: "446kr", image: dogfood },
  { id: 25, name: "Probiotix Healthy Joints", brand: "Svenska DjurApoteket", price: "132kr", image: dogfood },
  { id: 26, name: "NutriBites Active Dog Formula", brand: "PetCare Co.", price: "140kr", image: dogfood },
  { id: 27, name: "OmegaPlus Chicken & Lentils", brand: "FurryFriends Inc.", price: "286kr", image: dogfood },
  { id: 28, name: "VitalPaws Puppy Care", brand: "HealthyPaws Ltd.", price: "431kr", image: dogfood },
  { id: 29, name: "Holistic Salmon & Sweet Potato", brand: "PurePet Supplies", price: "69kr", image: dogfood },
  { id: 30, name: "SavorySelect Turkey & Peas", brand: "BestBuddies Pet Products", price: "133kr", image: dogfood }
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
                <div className="item-content">
                  <img src={item.image} alt={item.name} className="item-image" />
                  <div className="item-info">
                    <div className="item-brand">{item.brand}</div>
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