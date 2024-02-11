import basket from '../../../public/img/basket.svg';
import './MainPage.css';

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <span className="logo">Goods4you</span>
        <ul className="header-nav-link">
          <li className="link">
            <a href="http://" className="link">
              {' '}
              Catalog
            </a>
          </li>
          <li className="link">
            <a href="http://" className="link">
              {' '}
              About us
            </a>
          </li>
          <li className="link">
            <a href="http://" className="link">
              {' '}
              Product selection
            </a>
          </li>
          <li className="link">
            <a href="http://" className="link">
              {' '}
              Our team
            </a>
          </li>
          <li className="link">
            <a href="http://" className="link">
              {' '}
              Shipping and payment
            </a>
          </li>
          <li className="link">
            <a href="http://" className="link">
              Contacts
            </a>
          </li>
        </ul>
        <div className="header-basket-area">
          <a href="http://" className="cart">
            Cart
          </a>
          <img src={basket} alt="Basket" className="basket-icon" />
        </div>
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
    </div>
  );
};
export default HeaderComponent;
