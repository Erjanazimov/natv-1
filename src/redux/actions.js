import {
    BTN_PLACE,
    CHANNELS_CONTENT,
    CHANNELS_SAVE,
    CONTENT_CHANNELS,
    CONTENT_TV_CHANNEL,
    CONTENTS_AD_2, CONTENTS_CHANNELS_AD_2, ERROR_DISPLAY_OFF, ERROR_DISPLAY_ON,
    IMG_INPUT,
    INPUT_USER, LOADER_DISPLAY_OFF, LOADER_DISPLAY_ON,
    PLACE_SUMMA, SAVE_BTN_INFO,
    SUMMA_TV,
    TEXTAREA, TOTAL_SUMMA_AD_2,
    UPDATE_CHANNELS
} from "./type";

let duplicates = []

function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};

    for(let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

export const textareaSymbol = (text, symbol) => {
    return{
        type: TEXTAREA,
        text,
        symbol
    }
}

export const channelsContent = (adSumma) => {
    return async dispatch => {
        try {
            dispatch(loaderOn());
            const response = await fetch("https://natv-apps.herokuapp.com/api/v1/active-channels/");
            const jsonData = await response.json();
            dispatch({
                type: CHANNELS_CONTENT,
                data: jsonData,
                adSumma
            })
            dispatch(errorOff())
            dispatch(loaderOff());
        } catch (err){
            dispatch(errorOn("Ошибка API"))
            dispatch(loaderOff())

            setTimeout(() => {
                dispatch(errorOff())
            }, 10000)
        }
    }
}

export const saveContent = (channelsSave) => {
    return{
        type: CHANNELS_SAVE,
        channelsSave
    }
}

export const content_channels = (content, formatDay) => {
    duplicates.push(content);
    let contentDuplicates = removeDuplicates(duplicates, "name");
    return{
        type:CONTENT_CHANNELS,
        contentDuplicates,
        formatDay
    }
}

export const updateChannels = (updateTv) => {
    return{
        type: UPDATE_CHANNELS,
        updateTv
    }
}

export const channelsTvContent = (channels, texts) => {
    duplicates.push(channels);
    let contentDuplicates = removeDuplicates(duplicates, "name");
    return{
        type: CONTENT_TV_CHANNEL,
        contentDuplicates,
        texts
    }
}

export const summaTV = (num) => {
    if (num === 0) {
        duplicates = []
    }
    let contentDuplicates = removeDuplicates(duplicates, "name");
    let summa = 0
    contentDuplicates.map(item => {
        summa += item.price_text_ad * item.day.length
    })
    return{
        type: SUMMA_TV,
        summa
    }
}

export const summaContent = (summa) => {
    return{
        type: PLACE_SUMMA,
        summa
    }
}

export const inputUser = (phone, email, name) => {
    return{
        type: INPUT_USER,
        phone,
        email,
        name
    }
}

export const btnPlaceInfo = (place, nameUrl) => {
    return{
        type: BTN_PLACE,
        place,
        nameUrl
    }
}

export const imgInput = (images) => {
    return{
        type: IMG_INPUT,
        images
    }
}

export const contentsAdSave2 = (contents) => {
    return{
        type: CONTENTS_AD_2,
        contents
    }
}

export const contentsChannelsAd2 = (channels) => {
    duplicates.push(channels);
    let contentDuplicates = removeDuplicates(duplicates, "name");
    contentDuplicates.map(item => {
        item.date.innerHTML = ` <span> ${item.formatModal} </span>`
    })
    return{
        type: CONTENTS_CHANNELS_AD_2,
        contentDuplicates
    }
}

export const totalSummaAd2 = (input) => {
    if(input === 2){
        duplicates = []
    }
    let contentDuplicates = removeDuplicates(duplicates, "name");
    let summa = 0;
    contentDuplicates.map(item => {
        summa += item.price_image_ad * item.day.length
    })
    return{
        type: TOTAL_SUMMA_AD_2,
        summa
    }
}

export function loaderOn(){
    return{
        type: LOADER_DISPLAY_ON
    }
}

export function loaderOff(){
    return{
        type: LOADER_DISPLAY_OFF
    }
}

export function errorOn(text) {
    return{
        type: ERROR_DISPLAY_ON,
        text
    }
}

export function errorOff() {
    return{
        type: ERROR_DISPLAY_OFF,
    }
}

export const infoUser2 = (infoBanner, url) =>{
    return{
        type: SAVE_BTN_INFO,
        infoBanner,
        url
    }
}