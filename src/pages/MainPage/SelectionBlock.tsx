import React from 'react';
import SelectionFilters from '../../shared/SelectionFilters';

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

const SelectionBlock: React.FC = () => {
  const selectionProducts: SelectionProduct[] = [
    { id: 1, name: 'sneakers' },
    { id: 2, name: 'sneakers' },
    { id: 3, name: 'sneakers' },
    { id: 4, name: 'sneakers' },
    { id: 5, name: 'sneakers' },
    { id: 6, name: 'sneakers' },
    { id: 7, name: 'sneakers' },
    { id: 8, name: 'sneakers' },
    { id: 9, name: 'sneakers' },
    { id: 10, name: 'sneakers' },
    { id: 11, name: 'sneakers' },
    { id: 12, name: 'sneakers' },
    { id: 13, name: 'sneakers' },
    { id: 14, name: 'sneakers' },
    { id: 15, name: 'sneakers' },
    { id: 16, name: 'sneakers' },
    { id: 17, name: 'sneakers' },
    { id: 18, name: 'sneakers' },
    { id: 19, name: 'sneakers' },
  ];

  return (
    <div className="selection-container" id="selection">
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
          <SelectionFilters />
          {/* <div className="selection-products-list">
            {selectionProducts.map((product) => (
              <SelectionProductCard
                key={product.id}
                id={product.id}
                name={product.name}
              />
            ))}
          </div> */}
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
