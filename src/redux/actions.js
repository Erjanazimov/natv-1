import {
    BTN_PLACE,
    CHANNELS_CONTENT,
    CHANNELS_IMAGES,
    CHANNELS_SAVE,
    CONTENT_CHANNELS,
    CONTENT_TV_CHANNEL,
    CONTENTS_AD_2, CONTENTS_CHANNELS_AD_2,
    CONTENTS_TV_AD2,
    IMG_INPUT,
    INPUT_USER,
    PLACE_SUMMA,
    SUMMA_CHANNELS_TOTAL,
    SUMMA_TOTAL,
    SUMMA_TV,
    TEXT_JOB,
    TEXTAREA, TOTAL_SUMMA_AD_2,
    UPDATE_CHANNELS
} from "./type";

const duplicates = []

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
        const response = await fetch("https://natv-apps.herokuapp.com/api/v1/active-channels/");
        const jsonData = await response.json();
        dispatch({
            type: CHANNELS_CONTENT,
            data: jsonData,
            adSumma
        })
    }
}

export const saveContent = (channelsSave) => {
    return{
        type: CHANNELS_SAVE,
        channelsSave
    }
}

export const content_channels = (content) => {
    duplicates.push(content);
    let contentDuplicates = removeDuplicates(duplicates, "name");
    return{
        type:CONTENT_CHANNELS,
        contentDuplicates
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
    return{
        type: SUMMA_TV,
        num
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
    return{
        type: CONTENTS_CHANNELS_AD_2,
        contentDuplicates
    }
}

export const totalSummaAd2 = (input) => {
    return{
        type: TOTAL_SUMMA_AD_2,
        input
    }
}
