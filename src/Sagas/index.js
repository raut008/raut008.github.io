import { put, call, takeLatest } from "redux-saga/effects";
import { loadProductsRequest } from "../Actions/ProductsActions";

const getProducts = () => {
    return fetch("https://extendsclass.com/api/json-storage/bin/acfaccd")
        .then(response => ({ response }))
        .catch(error => ({ error }));
}

function* getProductsSaga() {
    const { response, error } = yield call(getProducts);
    if (response) {
        const data = yield response.json();
        yield put({ type: "LOAD_PRODUCTS_SUCCESS", payload: data });
    }
    else {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeLatest(loadProductsRequest, getProductsSaga);
}