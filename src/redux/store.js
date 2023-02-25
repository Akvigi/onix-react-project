import {configureStore} from '@reduxjs/toolkit';
import {dataReducer} from './dataSlice';
import {modalsReducers} from './modalsSlice';
import {orderReducer} from './orderSlice';

const store = configureStore({
	reducer: {
		order: orderReducer,
		data: dataReducer,
		modals: modalsReducers,
	},
});

export default store;
