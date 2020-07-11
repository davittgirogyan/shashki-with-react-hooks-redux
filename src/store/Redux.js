import { createStore, combineReducers } from "redux";
import  QartezReducer   from "./reducers/QartezReducer";


const combine = combineReducers({qartez:QartezReducer})


const store  = createStore(combine);


export default store;