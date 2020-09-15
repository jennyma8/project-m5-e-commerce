import { combineReducers } from "redux";

import TOGGLERS from "./ui-reducer";
import CART from "./cart-reducer";
import DATA from "./data-reducer";

export default combineReducers({ TOGGLERS, CART, DATA });
