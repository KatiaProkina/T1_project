import React, { useState } from 'react';
import './MainPage.css';

interface AccordionItemProps {
  title: string;
}

const FAQ: React.FC<AccordionItemProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="faq-container">
      <div className="faq-block">
        <h2 className="faq-block-title">FAQ</h2>
        <div className="accordeon">
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3 className="accordeon-title">Question 1</h3>
            <button className={isOpen ? 'rotate' : ''}>
              {isOpen ? 'x' : '+'}
            </button>
          </div>
          {isOpen && (
            <div className="accordeon-children">
              {' '}
              <p>Long answer to the first question</p>
            </div>
          )}
        </div>
        <div className="accordeon accordeon-2">
          <div className="accordion-header" onClick={toggleAccordion}>
            <h3 className="accordeon-title">Question 2</h3>
            <button className={isOpen ? 'rotate' : ''}>
              {isOpen ? 'x' : '+'}
            </button>
          </div>
          {isOpen && (
            <div className="accordeon-children">
              {' '}
              <p>Long answer to the first question</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
