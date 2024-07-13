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
      <div>
        <ul>
          {NavMenu.map((menuItem) => (
            <li key={menuItem.name}>
              <Link to={menuItem.link} className="">
                {menuItem.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;