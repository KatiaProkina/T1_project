import DiscountPrice from '../features/discountPrice';

describe('discountPrice', () => {
  it('calculates the discount price correctly', () => {
    const testData = {
      price: 100,
      discountPercentage: 20,
    };

    const expectedDiscountPrice = 80;

    const result = DiscountPrice(testData);

    expect(result).toEqual(expectedDiscountPrice);
  });
});
