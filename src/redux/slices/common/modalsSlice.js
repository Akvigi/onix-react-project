import {createSlice} from '@reduxjs/toolkit';

const modalsSlice = createSlice({
	name: 'modals',
	initialState: {
		menu: false,
		order: false,
		table: false,
	},
	reducers: {
		toggleOrderModal(state) {
			return {
				...state,
				order: !state.order,
			};
		},
		toggleMenuModal(state) {
			return {
				...state,
				menu: !state.menu,
			};
		},
		toggleTableModal(state) {
			return {
				...state,
				table: !state.table,
			};
		},
	},
});

export const {
	toggleMenuModal,
	toggleOrderModal,
	toggleTableModal,
} = modalsSlice.actions;

export const modalsReducers = modalsSlice.reducer;
