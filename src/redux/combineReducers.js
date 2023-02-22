import { combineReducers } from "redux";
import { reducer, wishlistReducer } from "./reducer";

const rootReducer = combineReducers({
  login: reducer,
  like: wishlistReducer
})

export default rootReducer