import { useGetProductsQuery } from '../store/productsApi';
import '../pages/MainPage/MainPage.css';
import ProductCard from './ProductCard';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Products = ({ searchQuery }) => {
  const [visibleProducts, setVisibleProducts] = useState(9);

  const { data: response } = useGetProductsQuery(visibleProducts, {
    search: searchQuery,
  });
  const navigate = useNavigate();

  if (!response || !response.products) {
    return <div>Loading...</div>;
  }

  const { products } = response;

  const handleShowMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };
  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };
  const filteredProducts = searchQuery
    ? products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  return (
    <div>
      <div className="catalog-product-block">
        <div className="catalog-product-list">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              price={product.price}
              img={product.thumbnail}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
        <button className="catalog-product-btn" onClick={handleShowMore}>
          Show more
        </button>
      </div>
    </div>
  );
};
export default Products;
