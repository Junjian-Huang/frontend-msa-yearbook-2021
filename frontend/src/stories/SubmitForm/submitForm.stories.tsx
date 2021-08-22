import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SumitForm from './SumitForm';

export default {
  title: 'UI Components/SubmitForm',
  component: SumitForm
} as ComponentMeta<typeof SumitForm>;

const Template: ComponentStory<typeof SumitForm> = () => <SumitForm />;

export const exampleSubmitform = Template.bind({});