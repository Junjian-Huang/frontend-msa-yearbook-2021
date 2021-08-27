import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ApolloProvider, InMemoryCache, ApolloClient} from '@apollo/client';
import {BrowserRouter} from 'react-router-dom';

const GraphQlClient = new ApolloClient({
  uri: 'http://localhost:56439/graphql/',
  cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ApolloProvider client={GraphQlClient}>
          <App />
        </ApolloProvider>
      </BrowserRouter>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
