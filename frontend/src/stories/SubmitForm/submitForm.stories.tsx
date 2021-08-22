import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SumitForm from './SumitForm';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export default {
  title: 'UI Components/SubmitForm',
  component: SumitForm
} as ComponentMeta<typeof SumitForm>;



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

const Template: ComponentStory<typeof SumitForm> = () => (
<ApolloProvider client={mockedClient}>
<SumitForm />
</ApolloProvider>);

export const exampleSubmitform = Template.bind({});