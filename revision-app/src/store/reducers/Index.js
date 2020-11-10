import Reducer1 from "./Reducer1";
import AuthReducer from './Auth_Reducers';
import UserReducer from './User_Reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    reducer1: Reducer1,
    auth_reducer: AuthReducer,
    user_reducer: UserReducer
  })
  
  export default rootReducer;