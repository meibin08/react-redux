
import {SHADOW_TRANSITION} from "src/constants/Home/start";

let initStates = [
	{
		id:"01",
		status:true,
		maskPosition:""
	},{
		id:"02",
		status:true,
		maskPosition:""
	},{
		id:"03",
		status:true,
		maskPosition:""
	},{
		id:"04",
		status:true,
		maskPosition:""
	}
];
function start(state = initStates,action){
	switch(action.type){
		case SHADOW_TRANSITION:
			// console.log("TEST = 32",action.data);
			return state.map((item)=>{
				return (
					item.id != action.data.id ? item:action.data
				);
			});
		default:
			return state;
	};
};


export default start;


