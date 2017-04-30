
import {combineReducers} from "redux"; //combinReducers用于合并各模块的reducers;
import homeIndex from "./Home";
import homeStart from "./Home/start";
import introIndex from "./Intro";
import handlerIndex from "./Handler";

export default combineReducers({
	homeIndex,
	homeStart,
	introIndex,
	handlerIndex
});
