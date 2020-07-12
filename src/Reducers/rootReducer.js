import { combineReducers } from "redux";
import productsReducers from "./ProductsReducers";
import cartReducers from "./CartReducer";

export const rootReducer = {
    products: productsReducers,
    cartItems: cartReducers
}

export default combineReducers(rootReducer);