import {createSlice} from '@reduxjs/toolkit';

const pageSlice = createSlice({
	name: 'pages',
	initialState: {
		coffee: true,
		// Pokemon: false,
	},
	reducers: {
		toggleCoffeePage(state, _) {
			return {
				...state,
				coffee: !state.coffee,
			};
		},
		setCoffeePageTrue(state, _) {
			return {
				...state,
				coffee: true,
			};
		},
	},
});

export const {
	toggleCoffeePage,
	setCoffeePageTrue,
} = pageSlice.actions;

export const pagesReducer = pageSlice.reducer;
