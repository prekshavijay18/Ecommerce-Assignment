import {combineReducers} from 'redux';
import cart from './slice/cartSlice';
const rootReducer = combineReducers({cart});
export default rootReducer;
