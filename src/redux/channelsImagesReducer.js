import {CONTENTS_AD_2, CONTENTS_CHANNELS_AD_2, TOTAL_SUMMA_AD_2} from "./type";


const initialState = {
    saveChannelsImages: {},
    contentsChannels: [],
    total: 0
}

export const channelsImagesReducer = (state = initialState, action) => {
    switch (action.type){
        case CONTENTS_AD_2:
            return {
                ...state,
                saveChannelsImages: action.contents
            }

        case CONTENTS_CHANNELS_AD_2:
            action.contentDuplicates.map(item => {
                if(item.summa !== undefined){
                    item.summa.innerHTML = item.day.length * item.price_image_ad + " сом";
                    item.date.innerHTML = item.day
                }
            })
            return  {
                ...state,
                contentsChannels: action.contentDuplicates
            }

        case TOTAL_SUMMA_AD_2:
            let sum = 0;
           state.contentsChannels.map(item => {
               sum += item.day.length * item.price_image_ad;
           })

            if(action.input !== undefined){
                action.input.innerHTML = ` ${sum} сом`
            }
            return {
                ...state
            }
        default:
            return state;
    }
}