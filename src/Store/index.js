import { createStore, applyMiddleware } from "redux";
import rootReducer from "../Reducers/rootReducer"
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Sagas";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

const sagaMiddleware = createSagaMiddleware();
let middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export default store;