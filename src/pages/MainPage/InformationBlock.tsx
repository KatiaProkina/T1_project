import line from '../../../public/img/Line.png';
import img from '../../../public/img/information-block-img.png';
import figura from '../../../public/img/figure.png';

const InformationBlock = () => {
  return (
    <div className="information-container">
      <img src={figura} alt="element" className="figure" />
      <div className="information-block">
        <h3 className="title-information-block">About us</h3>
        <div className="information-block-paragraph">
          <div>
            Every day a person has a choice what to spend his money on. Stores
            and websites offer an endless list of products.
          </div>
          <div>But we will help you make the right choice!</div>
        </div>
        <div className="goods">
          <img src={line} alt="line" className="goods-line" />
          <p className="logo-information-paragrapgh">Goods4you</p>
        </div>
      </div>
      <div>
        <img
          src={img}
          alt="information-block-img"
          className="information-block-img"
        />
      </div>
    </div>
  );
};
export default InformationBlock;
