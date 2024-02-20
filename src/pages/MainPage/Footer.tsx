import { useEffect } from 'react';
import './MainPage.css';

const Footer = () => {
  useEffect(() => {
    const handleScroll = () => {};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="footer">
      <div className="footer-menu">
        <span className="footer-logo">Goods4you</span>
        <ul className="footer-nav-link">
          <li className="link" onClick={() => scrollToSection('catalog')}>
            <span>Catalog</span>
          </li>
          <li className="link" onClick={() => scrollToSection('about')}>
            <span className="link">About us</span>
          </li>
          <li className="link" onClick={() => scrollToSection('selection')}>
            <span className="link">Product selection</span>
          </li>
          <li className="link">
            <span className="link" onClick={() => scrollToSection('team')}>
              Our team
            </span>
          </li>
          <li className="link" onClick={() => scrollToSection('faq')}>
            <span className="link">FAQ</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
