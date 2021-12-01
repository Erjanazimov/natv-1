import {BTN_PLACE, INPUT_USER, PLACE_SUMMA} from "./type";


const initialState = {
    phone: "",
    email: "",
    name: "",
    summa: 0,
    placeUser: {},
    nameUrl: ""
}

export const infoUserReducer = (state = initialState, action) => {
    switch (action.type){
        case INPUT_USER:
            return {
                ...state,
                phone: action.phone,
                email: action.email,
                name: action.name
            }
        case PLACE_SUMMA:
            return {
                ...state,
                summa: action.summa
            }
        case BTN_PLACE:
            return {
                ...state,
                placeUser: action.place,
                nameUrl: action.nameUrl
            }
        default:
            return state;
    }

}