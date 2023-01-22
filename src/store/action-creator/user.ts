import { RootState } from './../reducers/index';
import { ThunkAction} from 'redux-thunk';
import axios from 'axios';
import { UserAction, UserActionTypes } from './../../types/user';

export const fetchUsers =():ThunkAction<void,RootState,unknown, UserAction> =>{
  // return async (dispatch:Dispatch<UserAction>)=>{
  return async (dispatch)=>{
     try {
        dispatch({type:UserActionTypes.FETCH_USERS});
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        dispatch({type:UserActionTypes.FETCH_USERS_SUCCESS,payload:response.data})
     } catch (e) {
        dispatch({type:UserActionTypes.FETCH_USERS_ERROR,payload:"Произошла ошибка =( при загрузке пользователей"})

     }  
  }
}