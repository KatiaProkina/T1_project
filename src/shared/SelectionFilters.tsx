import { useGetFiltersQuery } from '../store/filterApi';
import '../pages/MainPage/selection/Selection-Block-Style.css';

interface SelectionProductCardProps {
  id: number;
  name: string;
}
const SelectionProductCard: React.FC<SelectionProductCardProps> = ({
  id,
  name,
  onSelectCategory,
  selectedCategory,
}) => (
  <div key={id} className="product-card">
    <form>
      <div className="checkbox-container">
        <input
          id={`product${id}`}
          type="checkbox"
          className="custom-checkbox"
          checked={selectedCategory === name}
          onChange={() => onSelectCategory(name)}
        />
        <label htmlFor={`product${id}`}>{name}</label>
      </div>
    </form>
  </div>
);

const SelectionFilters = ({ onSelectCategory, selectedCategory }) => {
  const { data = [] } = useGetFiltersQuery();

  return (
    <div>
      <div className="selection-products-list">
        {data.map((item: SelectionProductCardProps) => (
          <SelectionProductCard
            key={item.id}
            name={item}
            onSelectCategory={onSelectCategory}
            selectedCategory={selectedCategory}
          />
        ))}
      </div>
    </div>
  );
};
export default SelectionFilters;
