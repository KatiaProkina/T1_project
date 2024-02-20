import { useGetFiltersQuery } from '../store/filterApi';

interface SelectionProductCardProps {
  id: number;
  name: string;
}
const SelectionProductCard: React.FC<SelectionProductCardProps> = ({
  id,
  name,
}) => (
  <div key={id} className="product-card">
    <form>
      <div className="checkbox-container">
        <input
          id={`product${id}`}
          type="checkbox"
          className="custom-checkbox"
        />
        <label htmlFor={`product${id}`}>{name}</label>
      </div>
    </form>
  </div>
);

const SelectionFilters = () => {
  const { data = [] } = useGetFiltersQuery();

  return (
    <div>
      <div className="selection-products-list">
        {data.map((item: SelectionProductCardProps) => (
          <SelectionProductCard key={item.id} name={item} />
        ))}
      </div>
    </div>
  );
};
export default SelectionFilters;
