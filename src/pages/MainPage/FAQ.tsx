import React, { useState } from 'react';
import './MainPage.css';
import plusIcon from '../../../public/img/vector1.svg';

interface AccordionItemProps {
  title: string;
  content: string;
}

const FAQ: React.FC = () => {
  const accordions: AccordionItemProps[] = [
    { title: 'Question 1', content: 'Long answer to the first question' },
    { title: 'Question 2', content: 'Long answer to the second question' },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-container" id="faq">
      <div className="faq-block">
        <h2 className="faq-block-title">FAQ</h2>
        {accordions.map((accordion, index) => (
          <div className="accordeon" key={index}>
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(index)}>
              <h3 className="accordeon-title">{accordion.title}</h3>
              <button className={openIndex === index ? 'rotate' : ''}>
                <img src={plusIcon} alt="icon" />
              </button>
            </div>
            {openIndex === index && (
              <div className="accordeon-children">
                <p>{accordion.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
