
import {GET_LIST} from "src/constants/Home/list";

let initStates = {
	list:[],

};
function list(state = initStates,action){
	switch(action.type){

		case GET_LIST:
			console.log("HOME_INIT = 12",action.data);
			return Object.assign({},state,{
				list:action.data
			});
		
		default:
			return state;
	};
};


export default list;


