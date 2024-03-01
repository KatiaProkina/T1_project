import { render } from '@testing-library/react';
import StarRating from '../shared/StarRating';
import '@testing-library/jest-dom';

test('renders star rating with correct number of stars and filled/empty classes', () => {
  const rating = 3;

  const { container } = render(<StarRating rating={rating} />);

  const stars = container.querySelectorAll('.star');
  expect(stars).toHaveLength(5);

  stars.forEach((star, index) => {
    const isFilled = index + 1 <= rating;
    expect(star).toHaveClass(isFilled ? 'filled' : 'empty');
  });
});
