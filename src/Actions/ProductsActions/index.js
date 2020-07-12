import { createAction } from "redux-actions";

export const loadProductsRequest = createAction("LOAD_PRODUCTS_REQUEST");
export const loadProductsSuccess = createAction("LOAD_PRODUCTS_SUCCESS");
export const loadProductsFailure = createAction("LOAD_PRODUCTS_FAILURE");



