import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {baseReducer} from "./baseReducer";
import {homeReducer} from "./homeReducer";

const rootReducer= combineReducers({
    base: baseReducer,
    home: homeReducer
})

export const store= createStore(rootReducer, applyMiddleware(thunk))