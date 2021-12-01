import {TEXTAREA} from "./type";


const initialState = {
    text: "",
    symbol: 0
}

export const textareaReducer = (state = initialState, action) => {
    switch (action.type){
        case TEXTAREA:
            return {
                ...state,
                text: action.text,
                symbol: action.symbol
            }
        default:
            return state;
    }
}