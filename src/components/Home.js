import React, {Component} from "react";
import SearchForm from "./SearchForm";
import SearchMessage from "./SearchMessage";
import PlaceList from "./PlaceList";

class Home extends Component {
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
        <SearchMessage />
        <PlaceList />
      </div>
    );
  }
}

export default Home;