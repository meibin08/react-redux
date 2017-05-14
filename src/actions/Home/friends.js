/*
 * @authors :Bin Mei
 * @date    :2017-04-26
 * @description：React+Redux 从入门到崩溃、放弃至删代码跑路 示例 - 首页 模块
 */

import { fetchJson } from 'src/utils/fetch';
import { browserHistory } from 'react-router';
import StaticToast from 'src/components/common/Toast';
import aMap from "src/plugins/aMap";
import {FRIENDS_LOCATION,FRIENDS_SREACH} from "src/constants/Home/friends";
import Storage from 'src/utils/storage';



let friends =  {

	friends_location:(options)=>{

		let {map,...others} = options;
		return (dispatch)=>{
			let opt = {
				...others,
				map:map,
				complete:(res)=>{
					console.log(res);
					dispatch({
						type:FRIENDS_LOCATION,
						data:res.position
					});
					options.success&&options.success(res);
				}
			};
			aMap.getLocation(opt);
		};
		
		
	},
	friends_sreach:(data)=>{

		return {
			 type:FRIENDS_SREACH,
			 data
		};
		
		
	}
};


export default friends;



