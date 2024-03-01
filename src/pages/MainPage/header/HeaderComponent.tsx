import './Header-style.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = () => {
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/allproducts');
  };

  return (
    <header className="header">
      <div className="header-menu">
        <span className="logo">Goods4you</span>
        <nav className="header-nav-link">
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
          <li className="link" onClick={handleClick}>
            <span className="link">For staff</span>
          </li>
        </nav>
      </div>
      <div className="hero">
        <div className="hero-content">
          <h1>Any products from famous brands with worldwide delivery</h1>

          <div className="hero-title-paragraph">
            We sell smartphones, laptops, clothes, shoes and many other products
            at low prices
          </div>
          <button className="hero-btn">Go to shopping</button>
        </div>
      </div>
    </header>
  );
};
export default HeaderComponent;
