const HeaderComponent = () => {
  return (
    <div clsssName="header">
      <div clsssName="heder-menu">
        <img src="" alt="Logo" />
        <ul clsssName="header-nav-link">
          <li clsssName="link">
            <a href="http://"> Catalog</a>
          </li>
          <li clsssName="link">
            <a href="http://"> About us</a>
          </li>
          <li clsssName="link">
            <a href="http://"> Product selection</a>
          </li>
          <li clsssName="link">
            <a href="http://"> Our team</a>
          </li>
          <li clsssName="link">
            <a href="http://"> Shipping and payment</a>
          </li>
          <li clsssName="link">
            <a href="http://">Contacts</a>
          </li>
        </ul>
        <div clsssName="header-basket-area">
          <a href="http://" clsssName="cart">
            Cart
          </a>
          <img src="" alt="Basket" clsssName="basket-icon" />
        </div>
      </div>
      <div clsssName="hero">
        <h1>Any products from famous brands with worldwide delivery</h1>
        <p clsssName="hero-text-back">Goods4you</p>
        <p clsssName="hero-title-paragraph">
          We sell smartphones, laptops, clothes, shoes�and many other products
          at low prices
        </p>
        <button clsssName="hero-btn">Go to shopping</button>
      </div>
    </div>
  );
};
export default HeaderComponent;
