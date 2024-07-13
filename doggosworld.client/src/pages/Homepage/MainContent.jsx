import React from 'react';
import '../../CSS/MainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h1>Doggos World</h1>
            <div className="content-section">
                <h2>Welcome to Doggos World</h2>
                <p>Explore a world of premium products designed exclusively for dogs. From nutritious dog food to engaging toys and irresistible snacks, Doggos World is your one-stop shop for everything your canine companion needs.</p>
                <p>Whether you're looking for wholesome meals, durable toys, or delicious treats, we've curated a selection that ensures the happiness and well-being of your furry friends.</p>
                <p>Our knowledgeable team is here to assist you with any questions you may have about caring for your beloved pets. Join us in celebrating the joyous life with dogs!</p>
            </div>
            <div className="content-section">
                <h2>Öppettider</h2>
                <p>Måndag - Fredag: 10.00 - 19.00</p>
                <p>Lördag: 10.00 - 17.00</p>
                <p>Söndag: 10.00 - 17.00</p>
            </div>
            <div className="content-section">
                <h2>Kontaktinformation</h2>
                <p>Adress: Bollbrogatan 1, 252 18 Helsingborg</p>
                <p>E-post: doggosworld@hotmail.com</p>
                <p>Telefon: 042 - ## ## ###</p>
            </div>
            <img src={""} />
        </div>
    );
};

export default MainContent;
