import { combineReducers } from "redux";
import { apiReducer } from "./FaqAdd.reducer";


export const rootReducer = combineReducers({
    // key:value
    fetcher:apiReducer,
})