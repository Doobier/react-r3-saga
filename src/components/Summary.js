import React from 'react';
import {connect} from 'react-redux';

function Summary({value}) {
    return (
      <div>Total Count: {value}</div>
    );
}


function mapStateToProps(state) {
    console.log(state)
    const zdkReducer = state.zdkReducer;
    let sum = 0;
    for (const key in zdkReducer) {
        if (zdkReducer.hasOwnProperty(key)) {
            sum += zdkReducer[key];
        }
    }
    return {value: sum};
}


export default connect(mapStateToProps)(Summary);