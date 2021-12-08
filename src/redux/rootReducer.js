import {combineReducers} from "redux";
import {textareaReducer} from "./textareaReducer";
import {channelsReducer} from "./channelsReducer";
import {dayDateReducer} from "./dayDateReducer";
import {infoUserReducer} from "./infoUserReducer";
import {imgInputReducer} from "./imgInputReducer";
import {channelsImagesReducer} from "./channelsImagesReducer";
import {appReducer} from "./appReducer";
import {infoUser2Reducer} from "./infoUser2Reducer";


export const rootReducer = combineReducers({
    textareaReducer,
    channelsReducer,
    dayDateReducer,
    infoUserReducer,
    imgInputReducer,
    channelsImagesReducer,
    appReducer,
    infoUser2Reducer
})