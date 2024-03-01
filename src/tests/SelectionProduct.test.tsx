import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import SelectionProducts from '../pages/MainPage/selection/SelectionProducts';
import { useGetCategoryProductsQuery } from '../store/productsApi';
import { QueryClient, QueryClientProvider } from 'react-query';

jest.mock('../store/productsApi');

describe('SelectionProducts component', () => {
  test('renders top three products correctly', async () => {
    const mockCategoryProducts = {
      data: {
        products: [
          {
            id: 1,
            title: 'Product 1',
            price: 20,
            rating: 4.5,
            thumbnail: 'image1.jpg',
          },
          {
            id: 2,
            title: 'Product 2',
            price: 30,
            rating: 4.0,
            thumbnail: 'image2.jpg',
          },
          {
            id: 3,
            title: 'Product 3',
            price: 25,
            rating: 4.8,
            thumbnail: 'image3.jpg',
          },
        ],
      },
    };

    (useGetCategoryProductsQuery as jest.Mock).mockReturnValue(
      mockCategoryProducts
    );

    const { getByText } = render(
      <QueryClientProvider client={new QueryClient()}>
        <SelectionProducts selectedCategory="Electronics" />
      </QueryClientProvider>
    );

    await waitFor(() => {
      expect(getByText('Product 3')).toBeInTheDocument();
      expect(getByText('Product 1')).toBeInTheDocument();
      expect(getByText('Product 2')).toBeInTheDocument();
    });
  });
});
