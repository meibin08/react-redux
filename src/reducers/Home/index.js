
import {HOME_INIT,WAVE_DATA} from "src/constants/Home";

let initStates = {
	classList:[],
	wave:[],
	loadOver:false,//加载完成
};
function home(state = initStates,action){
	switch(action.type){

		case HOME_INIT:
			console.log("HOME_INIT = 12",action.data);
			return Object.assign({},state,{
				classList:action.data
			});

		case WAVE_DATA:
			console.log("reducers=16",action.data);
			let loadOver = true;
			return Object.assign({},state,{
				wave:[
					...state.wave,
					...action.data
				],
				loadOver
			});
		default:
			return state;
	};
};


export default home;


