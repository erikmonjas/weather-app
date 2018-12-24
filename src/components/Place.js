import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Place = ( item ) => {
    const city = item.city;
    const firstItem = item.list[0];

    function getIcon (icon){
        if(icon === '01d'){
            return '../../../img/sunny.png'
        } else if(icon === '01n'){
            return '../../../img/moon.png'
        } else if(icon === '02d'){
            return '../../../img/sun-cloud.png'
        } else if(icon === '02n'){
            return '../../../img/moon-cloud.png'
        } else if(icon === '03n' || icon === '03d' || icon === '04d' || icon === '04n'){
            return '../../../img/cloudy.png'
        } else if(icon === '09n' || icon === '09d' || icon === '10n' || icon === '10d'){
            return '../../../img/rain.png'
        } else if(icon === '11n' || icon === '11d'){
            return '../../../img/storm.png'
        } else if(icon === '13n' || icon === '13d'){
            return '../../../img/snow.png'
        } else if(icon === '50n' || icon === '50d'){
            return '../../../img/mist.png'
        }
    }
    return(
        <li id={city.id} className="mb-4 col-12 col-md-6 col-xl-4 d-flex align-items-end">
            <Link to={"/"+ city.id +""} className="d-flex align-items-end w-100 hover-right justify-content-center">
                <div>
                    <img src={getIcon(firstItem.weather[0].icon)} className="mr-2" alt="weather icon" />
                </div>
                <div>
                    <p>
                        <span className="font-weight-bold text-uppercase">{city.name}</span> <span className="fz--sm">{city.country}</span>
                    </p>
                    
                    <p className="paragraph"><span>{firstItem.weather[0].main}</span> <span>{Math.round(firstItem.main.temp)}ºC</span></p>
                </div>
                <div className="w-30px">
                    <span className="ml-2 d-block w-100 receives-hover-right">></span>
                </div>
            </Link>
        </li>
    );
}

export default connect()(Place);