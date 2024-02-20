import { useGetFiltersQuery } from '../store/filterApi';
import '../pages/MainPage/MainPage.css';

const Filters = ({ onSelectCategory, selectedCategory }) => {
  const { data = [] } = useGetFiltersQuery();

  const column1 = data.slice(0, Math.ceil(data.length / 2));
  const column2 = data.slice(Math.ceil(data.length / 2));

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div>
      <table className="table-filter">
        <tbody>
          {column1.map((category, index) => (
            <tr key={index}>
              <td
                onClick={() => handleCategoryClick(category)}
                className={selectedCategory === category ? 'active' : ''}>
                {category}
              </td>
              <td
                onClick={() => handleCategoryClick(column2[index])}
                className={selectedCategory === column2[index] ? 'active' : ''}>
                {column2[index]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Filters;
