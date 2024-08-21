import React from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MasterLayout from './pages/Homepage/MasterLayout';
import Toys from './pages/Orders/Toys';
import Food from './pages/Orders/Food';
import Snacks from './pages/Orders/Snacks';
// import HistocialOrders from './pages/Orders/HistocialOrders';
import Shoppingcart from './pages/Checkout/ShoppingCart';
import MainContent from './pages/Homepage/MainContent';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MasterLayout><MainContent /></MasterLayout>} />
                <Route path="/Homepage" element={<MasterLayout><MainContent /></MasterLayout>} />
                <Route path="/Order/Toys" element={<Toys />} />
                <Route path="/Order/Food" element={<Food />} />
                <Route path="/Order/Snacks" element={<Snacks />} />
                {/* <Route path="/Order/HistocialOrders" element={<HistocialOrders />} /> */}
                <Route path="/Checkout/Shoppingcart" element={<Shoppingcart />} />
            </Routes>
        </Router>
    );
}

export default App;