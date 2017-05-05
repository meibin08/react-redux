
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 基础介绍 模块
 */


import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import {HANDLER_INIT,DELETE,ADD} from "src/constants/Handler";
let initStates = {
	handlerList:[],
};
function handler(state = initStates,action){
	switch(action.type){

		case HANDLER_INIT:
			console.log("handler_INIT =  20",action.data);
			return Object.assign({},state,{
				handlerList:action.data
			});
		case DELETE:
			console.log("DELETE =  24",action.id);
			return Object.assign({},state,{
				handlerList:state.handlerList.filter(item=>item.id !== action.id)
			});
		case ADD:
			return Object.assign({},state,{
				handlerList:[{
					id:(state.handlerList.reduce((max,item)=> Math.max(item.id,max),-1)+1),
					content:action.content
				},...state.handlerList]
			});
		default:
			return state;
	};
};


export default handler;



