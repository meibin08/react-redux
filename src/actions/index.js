
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 各模块勿重复相同的函数名；
 */



import apply from "./apply";
import home from "./home";
import intro from "./intro";
import handler from "./handler";

let actions = Object.assign({},apply,home,intro,handler);
export default actions;
