import React, { useState, useEffect } from 'react';
import Filters from '../../../shared/Filters';
import ProductCard from '../../../shared/ProductCard';
import {
  useGetProductsQuery,
  useGetCategoryProductsQuery,
} from '../../../store/productsApi';
import { v4 as uuid } from 'uuid';
import './Catalog-Style.css';

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const Catalog: React.FC = () => {
  const [catalogProducts, setCatalogProducts] = useState<number>(9);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isFilterApplied, setIsFilterApplied] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const { data: response } = useGetProductsQuery(catalogProducts);
  const { data: categoryResponse } = useGetCategoryProductsQuery(
    selectedCategory || ''
  );

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleApplyFilters = () => {
    if (selectedCategory) {
      setIsFilterApplied(true);
      setFilteredProducts(categoryResponse?.products || []);
    }
  };

  const handleResetFilters = () => {
    setIsFilterApplied(false);
    setFilteredProducts([]);
    setSelectedCategory(null);
  };

  const getDisplayedProducts = () => {
    return isFilterApplied ? filteredProducts : response?.products || [];
  };

  const handleShowMore = () => {
    setCatalogProducts((prevVisibleProducts) => prevVisibleProducts + 9);
  };

  useEffect(() => {
    if (!isFilterApplied) {
      setFilteredProducts([]);
    }
  }, [selectedCategory]);

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
          <button
            className="catalog-filter-btn-reset"
            onClick={handleResetFilters}>
            Reset
          </button>
        </div>
        <div className="catalog-product-block">
          <div className="catalog-product-list">
            {getDisplayedProducts().map((product) => (
              <ProductCard
                key={uuid()}
                id={product.id}
                title={product.title}
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
