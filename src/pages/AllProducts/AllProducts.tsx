import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useDebounce from '../../features/useDebounce';

import Products from '../../shared/Products';
import './AllProducts.css';
const AllProducts = () => {
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedProducts] = useDebounce(searchQuery, 1000);
  const handleStart = () => {
    navigate('/');
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <div className="products">
      <div className="header-products-container">
        <div className="header-content">
          <span className="logo-products-container">Goods4you</span>
          <li className="link-back-to-site" onClick={handleStart}>
            <span className="link-back-to-site">Back to site</span>
          </li>
        </div>
      </div>
      <div className="products-section">
        <div className="products-container">
          <h1 className="title-products-container">All products</h1>
          <form className="products-container-form" onSubmit={handleSearch}>
            <input
              type="text"
              className="products-container-input"
              placeholder="Search by title"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="button"
              className="products-container-btn"
              onClick={handleSearch}>
              Search
            </button>
          </form>
          <div>
            <Products searchQuery={debouncedProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AllProducts;
