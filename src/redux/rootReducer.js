import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './slices/dataSlice';
import {filterReducer} from './slices/filterSlice';
import {modalsReducers} from './slices/modalsSlice';
import {orderReducer} from './slices/orderSlice';
import {pagesReducer} from './slices/pageSlice';

const rootReducer = combineReducers({
	order: orderReducer,
	data: dataReducer,
	modals: modalsReducers,
	filter: filterReducer,
	pages: pagesReducer,
});

export default rootReducer;
