import { useNavigate } from 'react-router-dom';
import ProductPageCard from '../../shared/ProductPageCard';
const ProductPage = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/');
  };
  return (
    <div className="product">
      <div className="header-products-container">
        <div className="header-content">
          <span className="logo-products-container">Goods4you</span>
          <li className="link-back-to-site" onClick={handleStart}>
            <span className="link-back-to-site">Back to site</span>
          </li>
        </div>
      </div>
      <div className="products-section">
        <div className="products-container">
          <ProductPageCard />
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
