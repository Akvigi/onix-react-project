import {createSlice} from '@reduxjs/toolkit';

const modalsSlice = createSlice({
	name: 'modals',
	initialState: {
		menu: false,
		order: false,
		table: false,
	},
	reducers: {
		toggleOrderModal(state, _) {
			return {
				...state,
				order: !state.order,
			};
		},
		toggleMenuModal(state, _) {
			return {
				...state,
				menu: !state.menu,
			};
		},
		toggleTableModal(state, _) {
			return {
				...state,
				order: !state.order,
			};
		},
		closeMenuModal(state, _) {
			return {
				...state,
				menu: false,
			};
		},
		closeOrderModal(state, _) {
			return {
				...state,
				order: false,
			};
		},
	},
});

export const {
	toggleMenuModal,
	toggleOrderModal,
	closeMenuModal,
	closeOrderModal,
	toggleTableModal,
} = modalsSlice.actions;

export const modalsReducers = modalsSlice.reducer;
