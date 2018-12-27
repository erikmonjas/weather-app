import React from 'react';
import { connect } from "react-redux";
import { setCityDetails } from "../actions/cityDetailsAction";
import { Link } from 'react-router-dom';
import NotFound from './NotFound';


class PlaceInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:{}
        }
    }

    getIcon() {
        const data = this.state.data;
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

    getForecastIcon(number) {
        const data = this.state.data;
        const forecastItem = data.list[number];
        const itemWeatherIcon = forecastItem.weather[0].icon;

        if(itemWeatherIcon === '01d' || itemWeatherIcon === '01n'){
            return '../../../img/sunny-lg.png'
        } else if(itemWeatherIcon === '02d' || itemWeatherIcon === '02n'){
            return '../../../img/sun-cloud-lg.png'
        } else if(itemWeatherIcon === '03n' || itemWeatherIcon === '03d' || itemWeatherIcon === '04d' || itemWeatherIcon === '04n'){
            return '../../../img/cloudy-lg.png'
        } else if(itemWeatherIcon === '09n' || itemWeatherIcon === '09d' || itemWeatherIcon === '10n' || itemWeatherIcon === '10d'){
            return '../../../img/rain-lg.png'
        } else if(itemWeatherIcon === '11n' || itemWeatherIcon === '11d'){
            return '../../../img/storm-lg.png'
        } else if(itemWeatherIcon === '13n' || itemWeatherIcon === '13d'){
            return '../../../img/snow-lg.png'
        } else if(itemWeatherIcon === '50n' || itemWeatherIcon === '50d'){
            return '../../../img/mist-lg.png'
        }
    }

    getDateFormatted(number) {
        const data = this.state.data;
        const dateItem = data.list[number].dt_txt;
        const firstDayN = dateItem.charAt(8);
        const secDayN = dateItem.charAt(9);
        const formattedDay = firstDayN.concat(secDayN); 
        const firstMonthN = dateItem.charAt(5);
        const secMonthN = dateItem.charAt(6);
        const formattedMonth = firstMonthN.concat(secMonthN);
        let month = '';

        switch (formattedMonth) {
            case '01':
                month = 'January';
                break
            case '02':
                month = 'February';
                break
            case '03':
                month = 'March';
                break
            case '04':
                month = 'April';
                break
            case '05':
                month = 'May';
                break
            case '06':
                month = 'June';
                break
            case '07':
                month = 'July';
                break
            case '08':
                month = 'August';
                break
            case '09':
                month = 'September';
                break
            case '10':
                month = 'October';
                break
            case '11':
                month = 'November';
                break
            case '12':
                month = 'December';
                break
            default:
                break;
        }

        const formattedDate = formattedDay +" "+ month;

        return formattedDate;
    }

    getData() {
        const data = this.state.data;
        const city = data.city;
        const firstItem = data.list[0];
        const forecast1 = data.list[7];
        const forecast2 = data.list[15];
        const forecast3 = data.list[23];
        const forecast4 = data.list[31];
        const forecast5 = data.list[39];


        return (
            <div className="w-100">
                <div className="d-flex justify-content-center">
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

                
                <div className="forecast mt-5">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                            <div>
                                <p className="text-uppercase mb-2">{this.getDateFormatted(7)}</p>
                                <div className="d-flex flex-column">
                                    <img className="forecast__icon mb-1" src={this.getForecastIcon(7)} alt="forecast one icon" />
                                    <div>
                                        <p className="font-weight-light"><span>{forecast1.weather[0].main}</span> <span>{Math.round(forecast1.main.temp)}ºC</span></p>
                                        <p className="paragraph mt-1">Wind speed: {Math.round(forecast1.wind.speed)}km/h</p>
                                        <p className="paragraph mt-1">Humidty: {forecast1.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                            <div>
                                <p className="text-uppercase mb-2">{this.getDateFormatted(15)}</p>
                                <div className="d-flex flex-column">
                                    <img className="forecast__icon mb-1" src={this.getForecastIcon(15)} alt="forecast two icon" />
                                    <div>
                                        <p className="font-weight-light"><span>{forecast2.weather[0].main}</span> <span>{Math.round(forecast2.main.temp)}ºC</span></p>
                                        <p className="paragraph mt-1">Wind speed: {Math.round(forecast2.wind.speed)}km/h</p>
                                        <p className="paragraph mt-1">Humidty: {forecast2.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                            <div>
                                <p className="text-uppercase mb-2">{this.getDateFormatted(23)}</p>
                                <div className="d-flex flex-column">
                                    <img className="forecast__icon mb-1" src={this.getForecastIcon(23)} alt="forecast three icon" />
                                    <div>
                                        <p className="font-weight-light"><span>{forecast3.weather[0].main}</span> <span>{Math.round(forecast3.main.temp)}ºC</span></p>
                                        <p className="paragraph mt-1">Wind speed: {Math.round(forecast3.wind.speed)}km/h</p>
                                        <p className="paragraph mt-1">Humidty: {forecast3.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                            <div>
                                <p className="text-uppercase mb-2">{this.getDateFormatted(31)}</p>
                                <div className="d-flex flex-column">
                                    <img className="forecast__icon mb-1" src={this.getForecastIcon(31)} alt="forecast four icon" />
                                    <div>
                                        <p className="font-weight-light"><span>{forecast4.weather[0].main}</span> <span>{Math.round(forecast4.main.temp)}ºC</span></p>
                                        <p className="paragraph mt-1">Wind speed: {Math.round(forecast4.wind.speed)}km/h</p>
                                        <p className="paragraph mt-1">Humidty: {forecast4.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-5">
                            <div>
                                <p className="text-uppercase mb-2">{this.getDateFormatted(39)}</p>
                                <div className="d-flex flex-column">
                                    <img className="forecast__icon mb-1" src={this.getForecastIcon(39)} alt="forecast five icon" />
                                    <div>
                                        <p className="font-weight-light"><span>{forecast5.weather[0].main}</span> <span>{Math.round(forecast5.main.temp)}ºC</span></p>
                                        <p className="paragraph mt-1">Wind speed: {Math.round(forecast5.wind.speed)}km/h</p>
                                        <p className="paragraph mt-1">Humidty: {forecast5.main.humidity}%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                {this.state && this.state.data.city && <Link to="/" className="close-icon ml-1 ml-sm-4">X</Link>}
                {this.state && this.state.data.cod === "404" && <NotFound />}
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        cityDetails: state.cityObject.setCityDetails
    };
};
  
  export default connect(mapStateToProps)(PlaceInfo);