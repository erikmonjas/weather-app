import React from 'react';
import { connect } from "react-redux";
import { setCityDetails } from "../actions/cityDetailsAction";
import { Link } from 'react-router-dom';


class PlaceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    getIcon() {
        const data = this.state.data
        const weatherIcon = data.list[0].weather[0].icon;

        if(weatherIcon === '01d'){
            return '../../../img/sunny-lg.png'
        } else if(weatherIcon === '01n'){
            return '../../../img/moon-lg.png'
        } else if(weatherIcon === '02d'){
            return '../../../img/sun-cloud-lg.png'
        } else if(weatherIcon === '02n'){
            return '../../../img/moon-cloud-lg.png'
        } else if(weatherIcon === '03n' || weatherIcon === '03d' || weatherIcon === '04d' || weatherIcon === '04n'){
            return '../../../img/cloudy-lg.png'
        } else if(weatherIcon === '09n' || weatherIcon === '09d' || weatherIcon === '10n' || weatherIcon === '10d'){
            return '../../../img/rain-lg.png'
        } else if(weatherIcon === '11n' || weatherIcon === '11d'){
            return '../../../img/storm-lg.png'
        } else if(weatherIcon === '13n' || weatherIcon === '13d'){
            return '../../../img/snow-lg.png'
        } else if(weatherIcon === '50n' || weatherIcon === '50d'){
            return '../../../img/mist-lg.png'
        }
    }

    getData() {
        const data = this.state.data;
        const city = data.city;
        const firstItem = data.list[0];


        return (
            <div className="w-100 d-flex justify-content-center">
                <div className="main-info d-sm-flex">
                    <img className="main-info__img mr-5 d-block mb-4 mb-sm-0" src={this.getIcon()} alt="weather icon" />
                    <div className="main-info__text">
                        <div className="d-sm-flex align-items-end">
                            <h1 className="home-title text-uppercase font-weight-normal text-left text-truncate text-sm-not-truncate">{city.name}</h1>
                            <p className="mt-1 mt-sm-0 ml-0 ml-sm-2 paragraph">{city.country}</p>
                        </div>
                        <p className="main-info__conditions mt-3"><span>{firstItem.weather[0].main}</span> <span>{Math.round(firstItem.main.temp)}ºC</span></p>
                        <p className="font-weight-light mt-1">Wind speed: {Math.round(firstItem.wind.speed)}km/h</p>
                        <p className="font-weight-light mt-1">Humidty: {firstItem.main.humidity}%</p>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch("https://api.openweathermap.org/data/2.5/forecast?id="+ this.props.match.params.id +"&units=metric&APPID=b8027ef04ed1b2ed97f1668db34199b6")
            .then((result) => {
                return result.json();
            })
            .then((data) => {
                const self = this
                this.props.dispatch(setCityDetails(data));
                self.setState({ data })
                console.log(this.state.data)
            })
    }

    render() {
        return (
            <div className="d-flex justify-content-between">
                {this.state && this.state.data.city && this.getData()}
                <Link to="/" className="close-icon ml-1 ml-sm-4">X</Link>
            </div>
        );
    }
}

// const PlaceInfo = (props) => {
//     function getCityData(){
//         fetch("https://api.openweathermap.org/data/2.5/forecast?id="+ props.match.params.id +"&units=metric&APPID=b8027ef04ed1b2ed97f1668db34199b6")
//                 .then((result) => {
//                     return result.json();
//                 })
//                 .then((data) => {
//                     props.dispatch(setCityDetails(data))
//                     return <PlaceInfoItem />
//                 })
//     }
//     return (
//         <div>
//             {getCityData()}
//         </div>
//     );
// }

const mapStateToProps = state => {
    return {
        cityDetails: state.cityObject.setCityDetails
    };
};
  
  export default connect(mapStateToProps)(PlaceInfo);