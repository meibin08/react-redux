/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import {SHADOW_TRANSITION,HIDE_START} from "src/constants/Home/start";
import Storage from 'src/utils/storage';

let store = new Storage(),
	StorageKey = 'hideStart';

let transitionAnimate = (options,fn1,fn2)=>{
	let {xMax,yMax,endNum,msec,xAttach,yAttach} = options||{};
	var X = 0,Y=0;
	var _xAttach = xAttach || 0,_yAttach = yAttach || 0;
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
		var item = (W * -X +_xAttach +"px ")+(-Y* H +_yAttach+"px");
		result.push(item);
		fn1&&fn1(item);
		X+=1;
		num++;
		num >= endNum && (clearInterval(time),fn2&&fn2(result));
	},msec);
};

let start =  {
	touchNum:0,
	dotHandler:(item,lastItem)=>{
		return (dispatch)=>{
			transitionAnimate(item.options,(value)=>{
				dispatch({
					type:SHADOW_TRANSITION,
					data:{
						id:item.id,
						status:false,
						maskPosition:value,
					}
				});
			},(itemRes)=>{
				start.touchNum+=1;
				if(start.touchNum>=3){
					transitionAnimate(lastItem.options,(val)=>{
						dispatch({
							type:SHADOW_TRANSITION,
							data:{
								id:lastItem.id,
								status:false,
								maskPosition:val
							}
						});
					},()=>{
						dispatch({
							type:HIDE_START
						});
						setTimeout(()=>{
							store.set(StorageKey,true,30);
						},1100);
					});
				};
				console.log(start.touchNum);
			});
		};
		
		
	}
};


export default start;



