/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import {SHADOW_TRANSITION} from "src/constants/Home/start";


let transitionAnimate = (xMax,yMax,endNum,msec,attach,fn1,fn2)=>{
	var X = 0,Y=0;
	var _G = attach || 0;
	var num=0;
	var W = document.documentElement.clientWidth|| document.body.clientWidth;
	var H =(document.documentElement.clientHeight|| document.body.clientHeight);
	var time = null;
	var result = [];
	time = setInterval(()=>{
		if(X >= xMax){
			X = 0;
			Y = Y>= yMax ? 0 :Y+=1;
		};
		var item = (W * -X -_G +"px ")+(-Y* H+"px");
		result.push(item);
		fn1&&fn1(item);
		X+=1;
		num++;
		num >= endNum && (clearInterval(time),fn2&&fn2(result),console.log(result));
	},msec);
};

let start =  {
	touchNum:0,
	dotHandler:(id,attach)=>{
		return (dispatch)=>{
			transitionAnimate(4, 3, 12, 60,(attach||0),(item)=>{
				dispatch({
					type:SHADOW_TRANSITION,
					data:{
						id:id,
						status:false,
						maskPosition:item
					}
				});
			},(result)=>{
				start.touchNum+=1;
				if(start.touchNum>=3){
					transitionAnimate(4, 5, 20, 80,0,(s)=>{
						dispatch({
							type:SHADOW_TRANSITION,
							data:{
								id:"04",
								status:false,
								maskPosition:s
							}
						});
					});
				}
				console.log(start.touchNum);
			});
		};
		
		
	}
};


export default start;



