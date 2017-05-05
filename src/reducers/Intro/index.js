
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 基础介绍 模块
 */


import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import {INTRO_INIT,TOGGLE} from "src/constants/Intro";

let initStates = {
	introList:[],
};
function intro(state = initStates,action){
	switch(action.type){

		case INTRO_INIT:
			console.log("INTRO_INIT =  20",action.data);
			return Object.assign({},state,{
				introList:[...state.introList,...action.data]
			});
		case TOGGLE:
			console.log("TOGGLE =  25",action.id);
			return Object.assign({},state,{
				introList:state.introList.map((item) => ({...item,status:(item.id==action.id?!item.status:!1)}))
			});
		default:
			return state;
	};
};


export default intro;



