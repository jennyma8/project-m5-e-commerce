import { combineReducers } from "redux";

import uiReducer from "./ui-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({ uiReducer, cartReducer });
