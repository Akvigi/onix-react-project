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
	},
});

export const {toggleCoffeePage} = pageSlice.actions;

export const pagesReducer = pageSlice.reducer;
