import {CHANNELS_SAVE, CONTENT_CHANNELS, SUMMA_TOTAL, SUMMA_TV} from "./type";

const initialState = {
    saveChannels: {},
    contentTV: [],
    symbol: 0
}

export const dayDateReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANNELS_SAVE:
            return {
                ...state,
                saveChannels:  action.channelsSave
            }
        case CONTENT_CHANNELS:
            return {
                ...state,
                contentTV: action.contentDuplicates
            }

        case SUMMA_TV:
            let sum = 0;
            state.contentTV.map(item => {
                action.num === 0 ? item.day = [] : item.day = item.day
                sum += (item.price_text_ad * item.day.length)
            })
            return {
                ...state,
                symbol: action.num === 0 ? 0 : sum
            }
        default:
            return state;
    }
}