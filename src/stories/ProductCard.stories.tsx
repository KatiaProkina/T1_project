import React from 'react';
import { Meta, Story } from '@storybook/react';
import ProductCard, {
  ProductCardProps,
} from '../pages/MainPage/catalog/Catalog';

export default {
  title: 'Catalog',
  component: ProductCard,
} as Meta;

const Template: Story<ProductCardProps> = (args) => <ProductCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: 1,
  name: 'Nike Air Force 1 07 QS',
  price: 110,
  img: 'путь_к_изображению',
};
