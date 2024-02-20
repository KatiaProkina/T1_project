import '../pages/MainPage/MainPage.css';

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  img: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  img,
  onClick,
}) => (
  <div key={id} className="product-card" onClick={onClick}>
    <img src={img} alt="product image" />
    <h3 className="title-product-card">{title}</h3>
    <p className="price-product-card">{price} $</p>
  </div>
);
export default ProductCard;
