import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './slices/dataSlice';
import {filterReducer} from './slices/filterSlice';
import {modalsReducers} from './slices/modalsSlice';
import {orderReducer} from './slices/orderSlice';

const rootReducer = combineReducers({
	order: orderReducer,
	data: dataReducer,
	modals: modalsReducers,
	filter: filterReducer,
});

export default rootReducer;
