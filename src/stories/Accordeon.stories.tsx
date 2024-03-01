import React from 'react';
import { Story, Meta } from '@storybook/react';
import FAQ from '../pages/MainPage/faq/FAQ';

export default {
  component: FAQ,
  title: 'FAQ',
} as Meta;

const Template: Story = () => <FAQ />;

export const Default = Template.bind({});
Default.args = {};
