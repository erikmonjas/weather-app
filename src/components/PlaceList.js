import React from 'react';
import { connect } from "react-redux";
import Place from './Place';

const PlaceList = (props) => {
    return(
        <div>
            <ul className="mt-5">
                <div className="row">
                    {props.data.map(item => {
                        return <Place key={item.id} {...item} />
                    })}
                </div>
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