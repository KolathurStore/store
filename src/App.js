import React, { useState, useEffect } from 'react';
import { useNavigate, BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import myImage from './images/Cart.jpg';
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
import ChildComponent from './ChildComponent';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const navigate = useNavigate(); // Using useNavigate directly

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
      navigate(selectedOption.value);
    }
  };

  return (
    <Router>
      <Link to="/CartDetails">
        <img src={myImage} alt="" padding='right' width="50px" height="60px"/>
      </Link>

      <div>
        {/* Search input */}
        <input
          type="text"
          placeholder="Search products"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        {/* Autocomplete dropdown */}
        <Select
          value={selectedProduct}
          onChange={handleChange}
          options={suggestions.map(product => ({
            value: product.path,
            label: product.name
          }))}
          placeholder="Select a product"
        />
      </div>

      <nav style={{ backgroundColor: '#333', padding: '10px' }}>
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
          <li style={{ marginRight: '10px' }}><Link to="/" style={{ textDecoration: 'none', color: 'white', padding: '8px', borderRadius: '4px', transition: 'background-color 0.3s ease-in-out' }}>Home</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/Sports" element={<Sports />} />
        <Route path="/Cards" element={<Cards />} />
        <Route path="/CartDetails" element={<CartDetails />} />
        <Route path="/Stationery" element={<Stationery />} />
        <Route path="/ChartSticker" element={<ChartSticker />} />
        <Route path="/Notebooks" element={<Notebooks />} />
        <Route path="/child/:userId/:username/:urc" element={<ChildComponent />} />
        <Route path="/ProductDetails/:Price/:userId1/:userId2/:userId3/:userId4/:userId5" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
