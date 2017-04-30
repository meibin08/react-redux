
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 基础介绍 模块
 */


import {HANDLER_INIT,DELETE,ADD} from "src/constants/Handler";

let Handler =  {
	handlerInit:()=>{
		let data = [{
			id:"01",
			content:"一切伟大的行动和思想，都有一个微不足道的开始"
		},{
			id:"02",
			content:"花开不是为了花落，而是为了开的更加灿烂"
		},{
			id:"03",
			content:"当你决定坚持一件事情，全世界都会为你让路"
		},{
			id:"04",
			content:"只有在开水里，茶叶才能展开生命浓郁的香气"
		},{
			id:"05",
			content:"三观不正，我说大海很漂亮，你却说淹死过很多人"
		},{
			id:"06",
			content:"每天醒来，敲醒自己的不是钟声，而是梦想"
		},];
		return {
			type:HANDLER_INIT,
			data
		};
	},
	deleteHandle:(id)=>{
		return {
			type:DELETE,
			id
		};
	},
	addHandle:(content)=>{
		return {
			type:ADD,
			content
		};
	}
};
export default Handler;



