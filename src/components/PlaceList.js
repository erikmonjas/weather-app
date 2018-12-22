import React from 'react';
import { connect } from "react-redux";
import Place from './Place';
import configureStore from '../store/configureStore';

const PlaceList = (props) => {
    return(
        <div>
            <h2>Place List{console.log(props.data)}</h2>
            <ul>
                {props.data.map(item => {
                    return <Place key={item.id} {...item} />
                })}
            </ul>
        </div>
    );
}

const mapStateToProps = state => {
  return {
    data: state.searchObject.data
  };
};


export default connect(mapStateToProps)(PlaceList);