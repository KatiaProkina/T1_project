import React, { useState } from 'react';
import Filters from '../../shared/Filters';
import ProductCard from '../../shared/ProductCard';
import { useGetProductsQuery } from '../../store/productsApi';

const Catalog: React.FC = () => {
  const [catalogProducts, setCatalogProducts] = useState(9);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: response } = useGetProductsQuery(catalogProducts);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleApplyFilters = () => {
    const filteredData = response.products.filter(
      (product) => product.category === selectedCategory
    );

    setFilteredProducts(filteredData);
  };

  if (!response || !response.products) {
    return <div>Loading...</div>;
  }

  const { products } = response;

  const handleShowMore = () => {
    setCatalogProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };

  return (
    <div className="catalog-main" id="catalog">
      <h2 className="title-catalog-block">Catalog</h2>
      <div className="catalog-area">
        <div className="catalog-filters">
          <div className="title-filter-block">
            <div className="line">Selection</div>
            <div className="line">by parameters</div>
          </div>
          <h4 className="subtitle-filter-block">Category</h4>
          <Filters
            onSelectCategory={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
          <button
            className="catalog-filter-btn-apply"
            onClick={handleApplyFilters}>
            Apply
          </button>
          <button className="catalog-filter-btn-reset">Reset</button>
        </div>
        <div className="catalog-product-block">
          <div className="catalog-product-list">
            {filteredProducts.length > 0
              ? filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    img={product.thumbnail}
                  />
                ))
              : products.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    img={product.thumbnail}
                  />
                ))}
          </div>
          <button className="catalog-product-btn" onClick={handleShowMore}>
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
