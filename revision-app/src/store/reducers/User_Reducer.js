import * as ACTION_TYPES from '../actions/Actions_Types';

const initialState = {
    user_text: ''
}

const UserReducer = (state = initialState, action)=>{
    switch(action.type){
        case ACTION_TYPES.USER_INPUT:
            return {
                ...state,
                user_text: action.payload
            }
            default:
                return state
    }
}
export default UserReducer;