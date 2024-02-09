import image from '../../../public/img/image.png';
const Catalog = () => {
  const products = [
    { id: 1, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 2, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 3, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 4, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 5, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 6, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 7, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 8, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
    { id: 9, name: 'Nike Air Force 1 07 QS', price: 110, img: image },
  ];

  const ProductCard = ({ id, name, price }) => (
    <div key={id} className="product-card">
      <h3>{name}</h3>
      <p>Price: {price} $</p>
      <img src={image} alt="product image" />
    </div>
  );
  return (
    <div clsssName="catalog-main">
      <div clsssName="catalog-filters">
        <h3>Selection by parameters</h3>
        <h4>Category</h4>
        <table>
          <tbody>
            <tr>
              <td>smartphones</td>
              <td>laptops</td>
            </tr>
            <tr>
              <td>sneakers</td>
              <td>sneakers</td>
            </tr>
            <tr>
              <td>sneakers</td>
              <td>sneakers</td>
            </tr>
            <tr>
              <td>sneakers</td>
              <td>sneakers</td>
            </tr>
          </tbody>
        </table>
        <button className="catalog-filter-btn-apply">Apply</button>
        <button className="catalog-filter-btn-reset">Reset</button>
      </div>
      <div className="catalog-product-list">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <button className="catalog-product-btn">Show more</button>
    </div>
  );
};
export default Catalog;
