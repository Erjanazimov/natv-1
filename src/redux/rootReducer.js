import {combineReducers} from "redux";
import {textareaReducer} from "./textareaReducer";
import {channelsReducer} from "./channelsReducer";
import {dayDateReducer} from "./dayDateReducer";
import {infoUserReducer} from "./infoUserReducer";
import {imgInputReducer} from "./imgInputReducer";
import {channelsImagesReducer} from "./channelsImagesReducer";


export const rootReducer = combineReducers({
    textareaReducer,
    channelsReducer,
    dayDateReducer,
    infoUserReducer,
    imgInputReducer,
    channelsImagesReducer
})