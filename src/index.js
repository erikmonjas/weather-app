import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import AppRouter from './router/AppRouter';

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

const store = configureStore();
const providerWrap = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

// console.log(store.getState());

// store.subscribe(() => {
//   console.log(store.getState());
// });


const rootElement = document.getElementById("root");
ReactDOM.render(providerWrap, rootElement);

if (!!document.getElementById('searchInput')) {
  document.getElementById('searchInput').focus();
}