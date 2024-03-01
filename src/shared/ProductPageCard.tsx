import { useParams } from 'react-router-dom';
import { useGetProductCardQuery } from '../store/productCardApi';
import '../pages/AllProducts/AllProducts.css';
import { useEffect, useState } from 'react';
import StarRating from './StarRating';
const ProductPageCard = () => {
  const { id } = useParams();
  const { data: product, error } = useGetProductCardQuery(id);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(null);
  const [discountPrice, setDiscountPrice] = useState<number | null>(null);

  useEffect(() => {
    setEditedProduct(product);
  }, [product]);
  useEffect(() => {
    if (editedProduct) {
      const calculatedDiscountPrice =
        editedProduct.price -
        (editedProduct.price * editedProduct.discountPercentage) / 100;

      setDiscountPrice(
        isNaN(calculatedDiscountPrice) ? null : calculatedDiscountPrice
      );
    }
  }, [editedProduct]);
  if (error) {
    return <div>Error loading product details</div>;
  }

  if (!product || !editedProduct) {
    return <div>Loading...</div>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const changedCharacteristics = {};
      Object.keys(editedProduct).forEach((key) => {
        if (editedProduct[key] !== product[key]) {
          changedCharacteristics[key] = editedProduct[key];
        }
      });

      console.log('Changed Characteristics:', changedCharacteristics);

      if (Object.keys(changedCharacteristics).length === 0) {
        setIsEditing(false);
        return;
      }

      const response = await fetch(
        `https://dummyjson.com/products/${editedProduct.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(changedCharacteristics),
        }
      );

      if (!response.ok) {
        console.error('Failed to save changes:', response.statusText);
        return;
      }

      console.log('Changes saved successfully');

      setEditedProduct({ ...editedProduct, ...changedCharacteristics });

      setIsEditing(false);
    } catch (error) {
      console.error('Error saving changes:', error);
    }
  };

  const handleInputChange = (
    fieldName: keyof Product,
    value: string | number
  ) => {
    setEditedProduct((prevProduct) => {
      const updatedProduct = {
        ...prevProduct!,
        [fieldName]: value,
      };

      if (fieldName === 'price' || fieldName === 'discountPercentage') {
        const calculatedDiscountPrice =
          updatedProduct.price -
          (updatedProduct.price * updatedProduct.discountPercentage) / 100;

        updatedProduct.calculatedDiscountPrice = isNaN(calculatedDiscountPrice)
          ? ''
          : calculatedDiscountPrice.toFixed(2);
      }

      return updatedProduct;
    });
  };

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
            Rating:
            <StarRating rating={product.rating} />
          </div>

          <div className="characteristic">
            Base price:
            {isEditing ? (
              <input
                className="characteristic-input-change price"
                type="text"
                value={editedProduct.price}
                onChange={(e) => handleInputChange('price', e.target.value)}
              />
            ) : (
              <p>{editedProduct.price} $</p>
            )}
          </div>

          <div className="characteristic">
            Discount percentage{' '}
            {isEditing ? (
              <input
                className="characteristic-input-change percentage"
                type="text"
                value={editedProduct.discountPercentage}
                onChange={(e) =>
                  handleInputChange('discountPercentage', e.target.value)
                }
              />
            ) : (
              <p>{editedProduct.discountPercentage} %</p>
            )}
          </div>

          <div className="characteristic">
            Discount price:{' '}
            {isEditing ? (
              <p className="discount">
                {discountPrice !== null ? `${discountPrice} $` : ''}
              </p>
            ) : (
              <p>{discountPrice !== null ? `${discountPrice} $` : ''}</p>
            )}
          </div>
          <div className="characteristic">
            Stock:{' '}
            {isEditing ? (
              <input
                className="characteristic-input-change stock"
                type="text"
                value={editedProduct.stock}
                onChange={(e) => handleInputChange('stock', e.target.value)}
              />
            ) : (
              <p>{editedProduct.stock} </p>
            )}
          </div>
          <div className="characteristic">
            Brand:{' '}
            {isEditing ? (
              <input
                className="characteristic-input-change brand"
                type="text"
                value={editedProduct.brand}
                onChange={(e) => handleInputChange('brand', e.target.value)}
              />
            ) : (
              <p>{editedProduct.brand} </p>
            )}
          </div>
          <div className="characteristic">
            Category:
            {isEditing ? (
              <input
                className="characteristic-input-change category"
                type="text"
                value={editedProduct.category}
                onChange={(e) => handleInputChange('category', e.target.value)}
              />
            ) : (
              <p>{editedProduct.category} </p>
            )}
          </div>
          <div className="characteristic">
            Description:{' '}
            {isEditing ? (
              <input
                className="characteristic-input-change description"
                type="text"
                value={editedProduct.description}
                onChange={(e) =>
                  handleInputChange('description', e.target.value)
                }
              />
            ) : (
              <p>{editedProduct.description} </p>
            )}
          </div>
          {isEditing ? (
            <button className="characteristic-btn" onClick={handleSaveClick}>
              Save
            </button>
          ) : (
            <button className="characteristic-btn" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductPageCard;
