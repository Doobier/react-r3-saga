import React from 'react';
import { Button } from 'antd';
import {connect} from 'react-redux';
import { increment, decrement } from '../actions/zdkactions';

class Counter extends React.Component{
    render(){
        console.log(this.props)
        const {caption, increment, decrement, value} = this.props;
        return (
            <div>
                <Button onClick={increment}>+</Button>
                <Button onClick={decrement}>-</Button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    console.log(state)
    console.log(ownProps)
    return {
        value: state.zdkReducer[ownProps.caption]
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        increment: ()=>{
            dispatch(increment(ownProps.caption))
        },
        decrement: ()=>{
            dispatch(decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)