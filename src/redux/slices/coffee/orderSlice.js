import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		pokemon: [],
		coffee: [],
	},
	reducers: {
		addCoffeToOrder: {
			reducer(state, action) {
				// State.push(action.payload)
				// const order = [...state, action.payload]
				// localStorage.setItem("order", JSON.stringify(order))
				return {
					...state,
					coffee: [...state.coffee, action.payload],
				};
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
		addPokemonToOrder: {
			reducer(state, action) {
				// State.push(action.payload)
				// const order = [...state, action.payload]
				// localStorage.setItem("order", JSON.stringify(order))
				return {
					...state,
					pokemon: [...state.pokemon, action.payload],
				};
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
		deleteCoffeeFromOrder(state, action) {
			// Const index = state.findIndex(state => state.id === action.id);
			// state.splice(index, 1);
			return {
				...state,
				coffee: state.coffee.filter(item => item.id !== action.payload),
			};
		},
		replaceCOWithSorted(state, action) {
			// State = [...action.payload];
			return {
				...state,
				coffee: [...action.payload],
			};
		},
	},
});

export const {
	addCoffeToOrder,
	addPokemonToOrder,
	deleteCoffeeFromOrder,
	replaceCOWithSorted,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
