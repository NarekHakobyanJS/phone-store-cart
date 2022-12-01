import { createStore, combineReducers } from "redux";
import bagReducer from "./bagReducer";
import cardReducer from "./cardReducer";
import pageReducer from "./pageReducer";

let reducers = combineReducers({
    cardPage : cardReducer,
    bagPage : bagReducer,
    page : pageReducer
})


let store = createStore(reducers)
window.store = store
export default store;