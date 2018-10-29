export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';

export const increment = (caption)=>{
    return {
        type:INCREMENT,
        caption
    }
}

export const decrement = (caption)=>{
    return {
        type: DECREMENT,
        caption
    }
}