import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

const apollo_client = new ApolloClient({
  uri: 'https://api-eu-central-1.graphcms.com/v2/ckmvxjpn3zr6j01z11fj236wm/master'
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={ apollo_client }>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
