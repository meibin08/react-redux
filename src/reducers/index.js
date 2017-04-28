
import {combineReducers} from "redux"; //combinReducers用于合并各模块的reducers;
import apply from "./apply";
import home from "./home";
import intro from "./intro";
import handler from "./handler";

const reducers = combineReducers({apply,home,intro,handler});
export default reducers;
