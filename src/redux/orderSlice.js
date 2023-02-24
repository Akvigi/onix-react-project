import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';
import {getOrderStFromLocal} from './helpers';

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
			// state = [...action.payload];
			return [...action.payload];
		},
		// SortOrderFromLowest(state, _) {
		// 	return state.sort((a, b) => a.price - b.price);
		// },
		// sortOrderFromBiggest(state, _) {
		// 	return state.sort((a, b) => b.price - a.price);
		// },
		// sortOrderFromA(state, _) {
		// 	return state.sort((a, b) => a.name.localeCompare(b.name));
		// },
		// sortOrderFromZ(state, _) {
		// 	return state.sort((a, b) => b.name.localeCompare(a.name));
		// },
	},
});

export const {
	addItemToOrder,
	deleteItemFromOrder,
	replaceWithSorted,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
