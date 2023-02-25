import {createSlice} from '@reduxjs/toolkit';
import {getModalsFromLocal} from './helpers';

const initialModalState = getModalsFromLocal();

const modalsSlice = createSlice({
	name: 'modals',
	initialState: initialModalState,
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

export const {toggleMenuModal, toggleOrderModal, closeMenuModal, closeOrderModal} = modalsSlice.actions;

export const modalsReducers = modalsSlice.reducer;
