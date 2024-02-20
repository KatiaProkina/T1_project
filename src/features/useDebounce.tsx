import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
  const [debouncedProducts, setDdebouncedProducts] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDdebouncedProducts(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedProducts;
}

export default useDebounce;
