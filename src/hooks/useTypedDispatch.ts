import { useDispatch } from "react-redux";
import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { RootState } from "../store";

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>;
 
export const useTypedDispatch = () => useDispatch<TypedDispatch<RootState>>();