import {IMG_INPUT} from "./type";


const initialState = {
    images: ""
}

export const imgInputReducer = (state = initialState, action) => {
    switch (action.type){
        case IMG_INPUT:
            return {
                ...state,
                images: action.images
            }
        default:
            return state;
    }
}