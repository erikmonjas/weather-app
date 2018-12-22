import React from "react";
import { connect } from 'react-redux';

const Place = ( { id, name, sys } ) => (
    <li id={id}>
        <p>{name}</p>
        <span>{sys.country}</span>
    </li>
)

export default connect()(Place);