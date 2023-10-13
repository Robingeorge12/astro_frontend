import { legacy_createStore, applyMiddleware,combineReducers} from "redux"
import thunk from 'redux-thunk'
import {reducer} from "./app/reducer"


export const store = legacy_createStore(reducer,applyMiddleware(thunk))