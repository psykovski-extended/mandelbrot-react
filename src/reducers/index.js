import { combineReducers } from "redux";
import mandelbrotRecalculationReducer from "./mandelbrotReducer";

export default combineReducers({
    mandelbrotData: mandelbrotRecalculationReducer
});
