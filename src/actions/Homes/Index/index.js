
import {APPLY_INIT} from "src/constants/apply";

let apply =  {
	init:(data)=>{
		return {
			type:APPLY_INIT,
			data
		};
	}
};
export default apply;


