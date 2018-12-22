import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import SearchForm from "./components/SearchForm";
import PlaceList from "./components/PlaceList";

function focusInput(){
  document.getElementById('searchInput').focus()
}

const store = configureStore();

class App extends Component {
  render() {
    return (
      <div>
        <h1>Weather App</h1>
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
