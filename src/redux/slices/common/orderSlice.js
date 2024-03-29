import {createSlice} from '@reduxjs/toolkit';
import {nanoid} from 'nanoid';
import {filterStatus} from '../../../constants';

const orderSlice = createSlice({
	name: 'order',
	initialState: {
		filter: filterStatus.basic,
		pokemon: [],
		coffee: [],
	},
	reducers: {
		changeFilter(state, actions) {
			return {
				...state,
				filter: actions.payload,
			};
		},
		addCoffeToOrder: {
			reducer(state, action) {
				return {
					...state,
					coffee: [...(state.coffee || []), action.payload],
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
				return {
					...state,
					pokemon: [...(state.pokemon || []), action.payload],
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
			return {
				...state,
				coffee: state.coffee.filter(item => item.id !== action.payload),
			};
		},
		deletePokemonFromOrder(state, action) {
			return {
				...state,
				pokemon: state.pokemon.filter(item => item.id !== action.payload),
			};
		},
		replaceCOWithSorted(state, action) {
			return {
				...state,
				coffee: [...action.payload],
			};
		},
		replacePOWithSorted(state, action) {
			return {
				...state,
				pokemon: [...action.payload],
			};
		},
	},
});

export const {
	changeFilter,
	addCoffeToOrder,
	addPokemonToOrder,
	deleteCoffeeFromOrder,
	deletePokemonFromOrder,
	replaceCOWithSorted,
	replacePOWithSorted,
} = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
