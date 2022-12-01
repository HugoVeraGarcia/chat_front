import { actions } from "./actions";

const INITIAL_STATE = {
    enterprise: [],
}

const reducer = (state = INITIAL_STATE, action) => {
		switch(action.type){

            case actions.setEnterprise:
                return{
                    ...state,
                    enterprise: action.payload
                }

        default:
            return state;
    }
}

export default reducer;