import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';
import {getOrderStFromLocal} from '../helpers';

const orderSlice = createSlice({
	name: 'order',
	initialState: getOrderStFromLocal(),
	reducers: {
		addItemToOrder: {
			reducer(state, action) {
				// State.push(action.payload)
				// const order = [...state, action.payload]
				// localStorage.setItem("order", JSON.stringify(order))
				return [...state, action.payload];
			},
			prepare(name, price) {
				return {
					payload: {
						name,
						price,
						id: nanoid(),
					},
				};
			},
		},
		deleteItemFromOrder(state, action) {
			// Const index = state.findIndex(state => state.id === action.id);
			// state.splice(index, 1);
			return state.filter(item => item.id !== action.payload);
		},
		replaceWithSorted(state, action) {
			// State = [...action.payload];
			return [...action.payload];
		},
	},
});

export const {
	addItemToOrder,
	deleteItemFromOrder,
	replaceWithSorted,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
