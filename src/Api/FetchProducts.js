import axios from "axios";
import { loadProductsSuccess, loadProductsFailure, loadProductsRequest } from "../Actions/ProductsActions"

export function fetchProducts() {
    return dispatch => {
        dispatch(loadProductsRequest);
        axios
            .get(
                "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"
            )
            .then(response => {
                dispatch(loadProductsSuccess(response.data));
            })
            .catch(error => {
                dispatch(loadProductsFailure(error));
            });
    };
}

