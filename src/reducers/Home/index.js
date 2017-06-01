
import {HOME_INIT,WAVE_DATA} from "src/constants/Home";

let initStates = {
	classList:[],
	wave:[]
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
			return Object.assign({},state,{
				wave:[
					...action.data
				]
			});
		default:
			return state;
	};
};


export default home;


