import { Link } from "react-router-dom";
import React from "react";
import '../CSS/Navbar.css';

const NavMenu = [
  { name: "Food", link: "/Order/Food" },
  { name: "Snacks", link: "/Order/Snacks" },
  { name: "Toys", link: "/Order/Toys" },
  { name: "Historical Orders", link: "/Order/HistoricalOrders" },
  { name: "Shopping Cart", link: "/Checkout/Shoppingcart" }
];

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <ul className="nav-list">
          <div className="nav-center">
            {NavMenu.filter(item => item.name !== "ShoppingCart").map((menuItem) => (
              <li key={menuItem.name} className="nav-item">
                <Link to={menuItem.link} className="nav-link">
                  {menuItem.name}
                </Link>
              </li>
            ))}
          </div>
          <li className="nav-item shopping-cart">
            <Link to="/Checkout/ShoppingCart" className="nav-link">
              ShoppingCart
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;