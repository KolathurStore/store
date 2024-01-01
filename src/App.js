// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {Link} from 'react-router-dom';
import CartDetails from './CartDetails';
import Cards from './Cards';
import Home from './Home';
import Sports from './sports'; // Import your About component
import Stationery from './Stationery'; 
import Notebooks from './Notebooks'; 
import ProductDetails from './ProductDetails';

import ChildComponent from './ChildComponent';
const App = () => {
  console.log("inside sports");
  return (
  
    
    <Router>
     
      <Link to="/CartDetails">
      
      <img src="/Cart.jpg" alt="" padding='right' width="50px" height="60px"/>
        </Link>
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '10px' }}><Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Home</Link></li>
        <li style={{ marginRight: '10px' }}><a href="#" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>About</a></li>
        <li style={{ marginRight: '10px' }}><a href="#" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Contact</a></li>
        <li style={{ marginRight: '10px' }}><Link to="/CartDetails" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Cart details</Link></li>
      </ul>
    </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/CartDetails" element={<CartDetails />} />
        <Route path="/Stationery" element={<Stationery />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/child/:userId/:username/:urc" element={<ChildComponent />} />
        <Route path="/ProductDetails/:Price/:userId1/:userId2/:userId3/:userId4/:userId5" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
