import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MSASubmitForm from './MSASubmitForm';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import "./MSASubmitForm.css";

export default {
  title: 'UI Components/SubmitForm',
  component: MSASubmitForm
} as ComponentMeta<typeof MSASubmitForm>;



const mockedClient = new ApolloClient({
  uri: 'https://your-graphql-endpoint',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
});

const Template: ComponentStory<typeof MSASubmitForm> = () => (
<ApolloProvider client={mockedClient}>
<MSASubmitForm />
</ApolloProvider>);

export const MSASubmitform = Template.bind({});