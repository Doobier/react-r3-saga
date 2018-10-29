import React from 'react';
import { connect} from 'react-redux';
import Counter from '../components/Counter'
import Summary from '../components/Summary'

export default class Zdk extends React.Component{
    render(){
        return (
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <hr/>
                <Summary />
            </div>
        )
    }
}