import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {reducer as AuthReducer} from "./AuthReducer/reducer"
import {reducer as CarsReducer} from "./ProductReducer/reducer"
import thunk from "redux-thunk";

const rootReducers = combineReducers({AuthReducer,CarsReducer});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));