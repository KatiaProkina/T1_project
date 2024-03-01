interface CalculateDiscountPriceProps {
  price: number;
  discountPercentage: number;
}

const DiscountPrice = ({
  price,
  discountPercentage,
}: CalculateDiscountPriceProps) => {
  return price - (price * discountPercentage) / 100;
};

export default DiscountPrice;
