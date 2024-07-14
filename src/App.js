import React, { useState, useEffect,useRef } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import myImage from './images/Cart.jpg';
import Homepic from './images/Home.jpg';
import Select from 'react-select';
import CartDetails from './CartDetails';
import Cards from './Cards';
import Home from './Home';
import Store from './Store';
import Sports from './sports';
import Stationery from './Stationery';
import ChartSticker from './ChartSticker';
import Notebooks from './Notebooks';
import ProductDetails from './ProductDetails';
import Disposable from './Disposable';
import Decoration from './Decoration';

import ChildComponent from './ChildComponent';
import './App.css';
import Actualhome from './Actualhome';

import Slider from './Slider';
//import Slideshow from './Slideshow';
import Carousel from './Carousel';
const App = () => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState); 
  };

  const images = [
    'https://www.wallpaperflare.com/static/264/707/824/iron-man-the-avengers-robert-downey-junior-tony-wallpaper.jpg',
    myImage,
    'https://th.bing.com/th/id/OIP.98qY8YNHD_UsLJ_AE0CRcAHaI4?rs=1&pid=ImgDetMain',
    // Add more image URLs as needed
  ];
 
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  //const navigate = useNavigate(); // Using useNavigate directly

  useEffect(() => {
    // Fetch suggestions based on the input value (replace with your own fetching logic)
    const fetchSuggestions = async () => {
      // Simulating asynchronous fetching (you can replace this with an API call)
      const fetchedSuggestions = [
        { id: 1, name: 'Product 1', path: '/product1' },
        { id: 2, name: 'Product 2', path: '/product2' },
        { id: 3, name: 'Product 3', path: '/product3' },
        // Add more products as needed
      ];

      setSuggestions(fetchedSuggestions);
    };

    // Delay the fetch to avoid unnecessary API calls while typing
    const timeoutId = setTimeout(fetchSuggestions, 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  const handleChange = (selectedOption) => {
    setSelectedProduct(selectedOption);
    if (selectedOption) {
     // navigate(selectedOption.value);
    }
  };

  return (
    <Router >
      {/*basename ="/store"*/}
      <div>
        {/* Sliding drawer for the cart */}
        <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`} ref={cartRef}>
          <CartDetails />
        </div>
      </div>
      
      <div>
        {/* Search input */}
     

        {/* Autocomplete dropdown */}
      
      </div>


     

      <div className="container">
      <div className="image-container">
      <Link to="/Home">
        
       
        <img src={Homepic} alt="Description of image 1" />
        </Link>
      </div>
      <div className="image-container">
      
      </div>
      <div className="image-container">
      <Link to="/Home">
       
        </Link>
      </div>
      <div className="image-container">
        
        <img src={myImage} onClick={toggleCart}  alt="Description of image 3" />
      </div>
    </div>

  {/*  <nav className="Menubar" style={{ backgroundColor: '#333', padding: '0px' }}>
      <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '50px' }}><Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '20px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Homes</Link></li>
        <li style={{ marginRight: '50px' }}><Link to="/Home" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Categories</Link></li>
        
       
        <div><li className="list-item" style={{ marginRight: '10px',   textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }} className="cart-button">
        Cart
        
            </li></div>
   </ul>
      </nav>*/} 
      <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/" element={<Actualhome />} />
      
      <Route path="/Decoration" element={<Decoration />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/CartDetails" element={<CartDetails />} />
        <Route path="/Stationery" element={<Stationery />} />
        <Route path="/ChartSticker/:Price" element={<ChartSticker />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/Disposable" element={<Disposable />} />
        
        <Route path="/child/:userId/:username/:urc" element={<ChildComponent />} />
        <Route path="/ProductDetails/:Price/:userId1/:userId2/:userId3/:userId4/:userId5" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
