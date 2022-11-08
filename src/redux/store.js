import { createStore, combineReducers } from "redux";
import bagReducer from "./bagReducer";
import cardReducer from "./cardReducer";

let reducers = combineReducers({
    cardPage : cardReducer,
    bagPage : bagReducer
})


let store = createStore(reducers)
window.store = store
export default store;