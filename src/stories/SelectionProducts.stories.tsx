import React from 'react';
import { Meta, Story } from '@storybook/react';
import SelectionBlock from '../pages/MainPage/SelectionBlock';

export default {
  title: 'SelectionBlock',
  component: SelectionBlock,
} as Meta;

const Template: Story = (args) => <SelectionBlock {...args} />;

export const Default = Template.bind({});
