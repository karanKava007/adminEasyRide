import { combineReducers } from "redux";
import { apiReducer } from "./FaqAdd.reducer";
import { PinCodeReducer } from "./Pincode.reducer";


export const rootReducer = combineReducers({
    // key:value
    fetcher:apiReducer,
    pinCds:PinCodeReducer
})