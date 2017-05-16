
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 各模块勿重复相同的函数名；
 */

import homeIndex from "./Home/index";
import homeStart from "./Home/start";
import homeFriends from "./Home/friends";
import homeList from "./Home/list";
import introIndex from "./Intro/index";
import handlerIndex from "./Handler/index";

let actions = Object.assign({},
	homeIndex,
	homeStart,homeFriends,homeList,
	introIndex,
	handlerIndex
	);
export default actions;
