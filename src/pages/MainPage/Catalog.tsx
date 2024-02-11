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
      <img src={image} alt="product image" />
      <h3 className="title-product-card">{name}</h3>
      <p className="price-product-card"> {price} $</p>
    </div>
  );
  return (
    <div className="catalog-main">
      <h2 className="title-catalog-block">Catalog</h2>
      <div className="catalog-area">
        <div className="catalog-filters">
          <div className="title-filter-block">
            <div class="line">Selection</div>
            <div class="line">by parameters</div>
          </div>
          <h4 className="subtitle-filter-block">Category</h4>
          <table className="table-filter">
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
        <div className="catalog-product-block">
          <div className="catalog-product-list">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                className="product_card"
              />
            ))}
          </div>
          <button className="catalog-product-btn">Show more</button>
        </div>
      </div>
    </div>
  );
};
export default Catalog;
