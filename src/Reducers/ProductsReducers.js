import { loadProductsRequest, loadProductsSuccess, loadProductsFailure } from "../Actions/ProductsActions";
import { handleActions } from "redux-actions";

const initialState = {
    loading: false,
    loaded: false,
    error: false,
    products: []
}
export default handleActions(
    {
        [loadProductsRequest](state, action) {
            return {
                ...state,
                loading: true,
                loaded: false,
                error: false,
            }
        },
        [loadProductsSuccess](state, action) {
            return {
                ...state,
                loading: true,
                loaded: true,
                error: false,
                products: action.payload
            }
        },
        [loadProductsFailure](state, action) {
            return {
                ...state,
                loading: false,
                loaded: false,
                error: true,
                products: []
            }
        }
    },
    initialState
);