import * as zdkaction from '../actions/zdkactions';

export default (state={"First":0,"Second":2,"Third":4}, action)=>{
    const {caption} = action;
    console.log(state)
    switch(action.type){
        case zdkaction.INCREMENT:
            return {...state, [caption]: state[caption]+1};
        case zdkaction.DECREMENT:
            return {...state, [caption]: state[caption]-1};
        default:
            return state;        
    }
}