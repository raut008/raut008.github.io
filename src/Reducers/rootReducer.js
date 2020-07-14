import { combineReducers } from "redux";
import productsReducers from "./ProductsReducers";
import cartReducers from "./CartReducer";
import dropdownReducer from "./DropDownReducer";

export const rootReducer = {
    products: productsReducers,
    cartItems: cartReducers,
    dropdown: dropdownReducer,
}

export default combineReducers(rootReducer);