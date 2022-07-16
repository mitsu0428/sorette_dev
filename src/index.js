import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux';
import postsReducer from './features/Posts';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: "https://api-ap-northeast-1.hygraph.com/v2/cl5o0a6e319y801ug2ql1bwrv/master",
  cache: new InMemoryCache(),
})

const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ApolloProvider>
);