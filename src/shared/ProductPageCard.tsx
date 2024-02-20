import { useParams } from 'react-router-dom';
import { useGetProductCardQuery } from '../store/productCardApi';
import '../pages/AllProducts/AllProducts.css';
const ProductPageCard = () => {
  const { id } = useParams();
  const { data: product, error } = useGetProductCardQuery(id);

  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  const discountPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="product-card-container">
      <h1 className="title-products-container">Product {product.id}</h1>
      <div className="product-page-card">
        <div className="product-card-img">
          <img
            src={product.thumbnail}
            alt="Product Thumbnail"
            className="product-image"
          />
          <div className="product-images">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product Image ${index + 1}`}
                className="product-gallerea-img"
              />
            ))}
          </div>
        </div>
        <div className="product-characteristics">
          <div className="product-card-title-container">
            <h1 className="product-card-title">{product.title}</h1>
            <div className="product-id">
              SKU ID <p>000{product.id}</p>
            </div>
          </div>

          <div className="characteristic">
            Rating: <p>{product.rating}</p>
          </div>
          <div className="characteristic">
            Base price: <p> {product.price} $</p>
          </div>
          <div className="characteristic">
            Discount percentage: <p> {product.discountPercentage} %</p>
          </div>
          <div className="characteristic">
            Discount price: <p> {discountPrice} $</p>
          </div>
          <div className="characteristic">
            Stock: <p>{product.stock} </p>
          </div>
          <div className="characteristic">
            Brand: <p> {product.brand}</p>
          </div>
          <div className="characteristic">
            Category: <p> {product.category}</p>
          </div>
          <div className="characteristic">
            Description: <p> {product.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPageCard;
