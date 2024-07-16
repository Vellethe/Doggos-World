import React from 'react';
import '../../CSS/MainContent.css';
import rightsidebarDog from '../../assets/Images/rightsidebarDog.jpg';
import leftsidebarDog from '../../assets/Images/leftsidebarDog.jpg';
import rightsidebarDog2 from '../../assets/Images/rightsidebarDog2.jpg';
import leftsidebarDog2 from '../../assets/Images/leftsidebarDog2.jpg';
import rightsidebarDog3 from '../../assets/Images/rightsidebarDog3.jpg';
import leftsidebarDog3 from '../../assets/Images/leftsidebarDog3.jpg';

const MainContent = () => {
    return (
        <div className="container">
            <aside className="sidebar left-sidebar">
            <img src={leftsidebarDog}/>
            <img src={leftsidebarDog2}/>
            <img src={leftsidebarDog3}/>
            </aside>
            <div className="main-content">
                <h1>Doggos World</h1>
                <div className="content-section-details">
                    <h2>Welcome to Doggos World</h2>
                    <p>Explore a world of premium products designed exclusively for dogs. From nutritious dog food to engaging toys and irresistible snacks, Doggos World is your one-stop shop for everything your canine companion needs.</p>
                    <p>Whether you're looking for wholesome meals, durable toys, or delicious treats, we've curated a selection that ensures the happiness and well-being of your furry friends.</p>
                    <p>Our knowledgeable team is here to assist you with any questions you may have about caring for your beloved pets. Join us in celebrating the joyous life with dogs!</p>
                </div>
                <div className="content-section-hours">
                    <h2>Opening hours</h2>
                    <p>Måndag - Fredag: 10.00 - 19.00</p>
                    <p>Lördag: 10.00 - 17.00</p>
                    <p>Söndag: 10.00 - 17.00</p>
                </div>
            </div>
            <aside className="sidebar right-sidebar">
                <img src={rightsidebarDog}/>
                <img src={rightsidebarDog2}/>
                <img src={rightsidebarDog3}/>
            </aside>
        </div>
    );
};

export default MainContent;