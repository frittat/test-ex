import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import { article, error } from "./reducers";

export default combineReducers({
    article,
    error,
    router: routerReducer
});
