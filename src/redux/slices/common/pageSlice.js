import {createSlice} from '@reduxjs/toolkit';

const pageSlice = createSlice({
	name: 'pages',
	initialState: {
		coffee: true,
		pokemon: false,
	},
	reducers: {
		toggleCoffeePage(state) {
			return {
				...state,
				coffee: !state.coffee,
				pokemon: !state.pokemon,
			};
		},
		setCoffeePageTrue(state) {
			return {
				...state,
				coffee: true,
				pokemon: false,
			};
		},
	},
});

export const {
	toggleCoffeePage,
	setCoffeePageTrue,
} = pageSlice.actions;

export const pagesReducer = pageSlice.reducer;
