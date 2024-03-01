import React, { useState } from 'react';

import './Selection-Block-Style.css';
import SelectionFilters from '../../../shared/SelectionFilters';
import SelectionProducts from './SelectionProducts';

const SelectionBlock: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleNextStep = () => {
    setCurrentPage(2);
  };

  return (
    <div className="selection-container" id="selection">
      <div className="selection-block">
        {currentPage === 1 && (
          <>
            <div className="selection-block-title">
              <h3 className="selection-title">
                We will select the perfect product for you
              </h3>
              <p className="selection-block-paragraph">
                Answer three questions, and we will send you a catalog with the
                most suitable products for you.
              </p>
            </div>
            <div className="selection-products-block">
              <h4 className="selection-products-block-title">
                What type of product are you considering?
              </h4>
              <SelectionFilters
                onSelectCategory={handleCategoryChange}
                selectedCategory={selectedCategory}
              />
            </div>
            <div className="selection-block-pagination">
              <div className="selection-pages">1 of 2</div>
              <button
                className="selection-block-pagination-btn"
                onClick={handleNextStep}>
                Next step
              </button>
            </div>
          </>
        )}
        {currentPage === 2 && (
          <>
            <div className="selection-products-block">
              <SelectionProducts selectedCategory={selectedCategory} />
            </div>
            <div className="selection-block-pagination">
              <div className="selection-pages">2 of 2</div>
              <button
                className="selection-block-pagination-btn"
                onClick={() => setCurrentPage(1)}>
                Change selection
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SelectionBlock;
