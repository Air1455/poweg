import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {baseReducer} from "./baseReducer";

const rootReducer= combineReducers({
    base: baseReducer
})

export const store= createStore(rootReducer, applyMiddleware(thunk))