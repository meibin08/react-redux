
/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：redux示例 - 基础介绍 模块
 */


import {INTRO_INIT,TOGGLE} from "src/constants/Intro";
import dataSource from "src/pages/Intro/Index/dataSource";

let Intro =  {
	introInit:()=>{

		return {
			type:INTRO_INIT,
			data:dataSource
		};
	},
	toggle:(id)=>{
		return {
			type:TOGGLE,
			id
		}
	}
};
export default Intro;



