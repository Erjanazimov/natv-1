import {CHANNELS_CONTENT, CONTENT_TV_CHANNEL, UPDATE_CHANNELS} from "./type";


const initialState = {
    contentChannels: [],
    channelsSave: [],
    summaTV: 0,
    addSumma: {}
}


export const channelsReducer = (state = initialState, action) => {
    switch (action.type){
        case CHANNELS_CONTENT:
            const channelsNew = action.data.map(item => {
                return {
                    id:item.id,
                    name: item.name,
                    image: item.image,
                    price_text_ad: item.price_text_ad,
                    price_image_ad: item.price_image_ad,
                }
            })
            return {
                ...state,
                contentChannels: channelsNew,
                addSumma: action.adSumma,
            }
        case UPDATE_CHANNELS:
            let text = action.updateTv.text.length;
            let channelsContent = action.updateTv.channelsContent.map(item => {
                if(item.summaInput !== undefined) {
                    item.summaInput.innerHTML = (item.price_text_ad * item.day.length) * text + " сом";
                }
                    return{
                        name: item.name,
                        day: item.day,
                        summa: (item.price_text_ad * item.day.length) * text
                    }
                })
            return {
                ...state,
                channelsSave: channelsContent
            }
        case CONTENT_TV_CHANNEL:
            let texts = action.texts;
            if(texts) {
                let content = action.contentDuplicates.map(item => {
                    if(item.summaInput !== undefined) {
                        item.summaInput.innerHTML = (item.price_text_ad * item.day.length) * texts.replace(/\s/g, '').length + " сом";
                    }
                    return {
                        name: item.name,
                        day: item.day,
                        summa: (item.price_text_ad * item.day.length) * texts.length
                    }
                })
                return {
                    ...state,
                    channelsSave: content
                }
            }
            return state;
        default:
            return state;
    }
}