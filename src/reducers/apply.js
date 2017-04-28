
import {APPLY_INIT} from "src/constants/apply";

let states = [{
	id:"123",
	completed:false,
	text:"test redux"
}];
function apply(state = states,action){
	switch(action.type){
		case APPLY_INIT:
		console.log(...state);
			return [{
				id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      			completed: false
			},...state,...action.data];
		default:
			return state;
	};
};


export default apply;


