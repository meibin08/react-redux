
import {SHADOW_TRANSITION} from "src/constants/Home/start";

let initStates = [
	{
		id:"01",
		status:true,
		maskPosition:"",
		options:{
			xMax:4,
			yMax:3,
			endNum:12,
			msec:60,
			xAttach:0,
			yAttach:-30
		}
	},{
		id:"02",
		status:true,
		maskPosition:"",
		options:{
			xMax:4,
			yMax:3,
			endNum:12,
			msec:60,
			xAttach:0,
			yAttach:10
		}
	},{
		id:"03",
		status:true,
		maskPosition:"",
		options:{
			xMax:4,
			yMax:3,
			endNum:12,
			msec:60,
			xAttach:-10,
			yAttach:0
		}
	},{
		id:"04",
		status:true,
		maskPosition:"",
		options:{
			xMax:4,
			yMax:5,
			endNum:20,
			msec:80,
			xAttach:0,
			yAttach:0

		}
	}
];
function start(state = initStates,action){
	switch(action.type){
		case SHADOW_TRANSITION:
			// console.log("TEST = 32",action.data);
			return state.map((item)=>{
				return (
					item.id != action.data.id ? item:{...item,...action.data}
				);
			});
		default:
			return state;
	};
};


export default start;


