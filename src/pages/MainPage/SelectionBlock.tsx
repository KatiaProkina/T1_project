import React from 'react';
import image from '../../../public/img/selection_product.png';

interface SelectionProduct {
  id: number;
  name: string;
  img: string;
}

interface SelectionProductCardProps {
  id: number;
  name: string;
  img: string;
}

const SelectionProductCard: React.FC<SelectionProductCardProps> = ({
  id,
  name,
  img,
}) => (
  <div key={id} className="product-card">
    <img src={img} alt="product" />
    <form>
      <div className="checkbox-container">
        <input
          id={`product${id}`}
          type="checkbox"
          className="custom-checkbox"
        />
        <label htmlFor={`product${id}`}>{name}</label>
      </div>
    </form>
  </div>
);

const SelectionBlock: React.FC = () => {
  const selectionProducts: SelectionProduct[] = [
    { id: 1, name: 'sneakers', img: image },
    { id: 2, name: 'sneakers', img: image },
    { id: 3, name: 'sneakers', img: image },
    { id: 4, name: 'sneakers', img: image },
    { id: 5, name: 'sneakers', img: image },
    { id: 6, name: 'sneakers', img: image },
  ];

  return (
    <div className="selection-container">
      <div className="selection-block">
        <div className="selection-block-title">
          <h3 className="selection-title">
            We will select the perfect product for you
          </h3>
          <p className="selection-block-paragraph">
            Answer three questions, and we will send you a catalog with the most
            suitable products for you.
          </p>
        </div>
        <div className="selection-products-block">
          <h4 className="selection-products-block-title">
            What type of product are you considering?
          </h4>
          <div className="selection-products-list">
            {selectionProducts.map((product) => (
              <SelectionProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                img={product.img}
              />
            ))}
          </div>
        </div>
        <div className="selection-block-pagination">
          <div className="selection-pages">1 of 3</div>
          <button className="selection-block-pagination-btn">Next step</button>
        </div>
      </div>
    </div>
  );
};

export default SelectionBlock;
