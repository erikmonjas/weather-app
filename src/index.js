import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SearchForm from "./components/SearchForm";
import PlaceList from "./components/PlaceList";

import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';

function focusInput(){
  document.getElementById('searchInput').focus()
}

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="home-title mb-4">Weather App</h1>
        <div className="row d-flex justify-content-center mt-5">
          <div className="col-12 col-md-9 col-lg-7">
            <p className="paragraph text-center">Travel around the world searching for real-time weather conditions. Enter the name of any city you can imagine and watch its conditions and forecast for the next days!</p>
          </div>
        </div>
        <SearchForm />
        <PlaceList />
      </div>
    );
  }
}

const providerWrap = (
  <Provider store={store}>
    <App />
  </Provider>
);

// store.subscribe(() => {
//   console.log(store.getState());
// });


const rootElement = document.getElementById("root");
ReactDOM.render(providerWrap, rootElement);


focusInput();

// https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array
