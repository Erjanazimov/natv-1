import {SAVE_BTN_INFO} from "./type";


const initialState = {
    infoUserBanner: {},
    url: "/glavnaya2"
}

export const infoUser2Reducer = (state = initialState, action) => {
    switch (action.type){
        case SAVE_BTN_INFO:
            return {
                ...state,
                infoUserBanner: action.infoBanner,
                url: action.url
            }
        default:
            return state;
    }
}