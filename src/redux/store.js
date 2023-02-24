import {configureStore} from '@reduxjs/toolkit';
import {dataReducer} from './dataSlice';
import {orderReducer} from './orderSlice';

const store = configureStore({
	reducer: {
		order: orderReducer,
		data: dataReducer,
	},
});

export default store;
