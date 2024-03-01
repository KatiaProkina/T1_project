import { useGetFiltersQuery } from '../store/filterApi';
import '../pages/MainPage/MainPage.css';

const Filters = ({ onSelectCategory, selectedCategory }) => {
  const { data = [] } = useGetFiltersQuery();

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div>
      <div className="radio-group">
        {data.map((category, index) => (
          <label
            key={index}
            className={`label-radio-group ${
              selectedCategory === category ? 'active' : ''
            }`}>
            <input
              type="radio"
              value={category}
              checked={selectedCategory === category}
              onChange={() => handleCategoryClick(category)}
              className="input-radio-group"
            />
            {category}
          </label>
        ))}
      </div>
    </div>
  );
};
export default Filters;
