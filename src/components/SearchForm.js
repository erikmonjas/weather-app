import React from "react";
import { connect } from "react-redux";
import {
  setTextSearch,
  setInputValue,
  setMatches,
  setData
} from "../actions/searchAction";
import cityList from '../data/cityList.json';

const SearchForm = (props) => {
    let toRender = [];
    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(props.inputValue);
        props.dispatch(setTextSearch(props.inputValue));
        props.dispatch(setInputValue(""));

        let matches = [];

        cityList.map((city) => {
            if(city.name.toLowerCase() === props.inputValue.toLowerCase().trim()){
                matches = matches.concat(city);
            }
        })

        props.dispatch(setMatches(matches));



        let currentArray = [];
        matches.map((match) => {
            fetch("https://api.openweathermap.org/data/2.5/forecast?id="+ match.id +"&units=metric&APPID=b8027ef04ed1b2ed97f1668db34199b6")
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    const newArray = currentArray.concat(data);
                    currentArray = newArray;
                    itemsToRender(data)
                })
        })
    }

    const itemsToRender = (data) => {
        toRender = toRender.concat(data);
        props.dispatch(setData(toRender));
    }
    
    return (
        <form
            className="d-flex mt-4 justify-content-center search-form"
            onSubmit={handleOnSubmit}
        >
            <input
                className="input search-form__input mr-3"
                id="searchInput"
                type="text"
                value={props.inputValue}
                onChange={(e) => {
                props.dispatch(setInputValue(e.target.value));
                }}
            />
            <button type="submit" className="button">Search</button>
        </form>
    );
};

const mapStateToProps = state => {
  return {
    search: state.searchObject.search,
    inputValue: state.searchObject.inputValue,
    matches: state.searchObject.matches,
    data: state.searchObject.data
  };
};

export default connect(mapStateToProps)(SearchForm);
