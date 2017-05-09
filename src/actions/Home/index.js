/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import {HOME_INIT,WAVE_DATA} from "src/constants/Home";

let home =  {
	init:()=>{
		//真实的异步加载数据，
		return (dispatch)=>{
			fetchJson({
				type:"GET",
				url:"/react-redux/json/home.json",
				success:(res)=>{
					if(res.code == 0){
						let {result}=res;
						dispatch({
							type:HOME_INIT,
							data:result
						});
					}else{
						StaticToast.error(res.error);
					};
				}
			});
		};
	},
	wave:()=>{
		//模拟异步加载
		return (dispatch)=> {
			let data = [
				{
					id:"001",
					_class:"a a1",
					url:"./images/b.png",
					_alt:"wave1"
				},
				{
					id:"002",
					_class:"b a1",
					url:"./images/b.png",
					_alt:"wave2"
				},
				{
					id:"003",
					_class:"c a1",
					url:"./images/a.png",
					_alt:"wave3"
				},
				{
					id:"004",
					_class:"d a1",
					url:"./images/a.png",
					_alt:"wave4"
				},
			];
			setTimeout(()=>{

				dispatch({
					type:WAVE_DATA,
					data
				});

			},500);
		};
	}
};
export default home;



