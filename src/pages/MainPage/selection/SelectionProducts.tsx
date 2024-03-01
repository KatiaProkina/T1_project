import React from 'react';
import { useGetCategoryProductsQuery } from '../../../store/productsApi';
import ProductCard from '../../../shared/ProductCard';
import './Selection-Block-Style.css';

interface SelectionProductsProps {
  selectedCategory: string;
}

const SelectionProducts: React.FC<SelectionProductsProps> = ({
  selectedCategory,
}) => {
  const { data: categoryProducts } =
    useGetCategoryProductsQuery(selectedCategory);

  if (!categoryProducts || !categoryProducts.products) {
    return <div>Loading...</div>;
  }

  const { products } = categoryProducts;

  const topThreeProducts = [...products]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="selection-block">
      <div className="selection-block-title">
        <h3 className="selection-title">Your selection is ready!</h3>
      </div>
      <div className="selection-products-block selected-products">
        {topThreeProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            img={product.thumbnail}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectionProducts;
