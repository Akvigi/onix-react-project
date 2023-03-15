import {createSlice} from '@reduxjs/toolkit';
import {filterStatus} from '../../constants';

const filterSlice = createSlice({
	name: 'filter',
	initialState: filterStatus.basic,
	reducers: {
		changeFilter(_, actions) {
			return actions.payload;
		},
	},
});

export const {changeFilter} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
