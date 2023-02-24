import {createSlice} from '@reduxjs/toolkit';
import dataFU from '../fudata';
import popData from '../popdata';
import reviewsData from '../reviewsdata';

const initialDataState = {
	dataFU,
	popData,
	reviewsData,
};

const dataSlice = createSlice({
	name: 'data',
	initialState: initialDataState,
	reducers: {
		getData(state, _) {
			return state;
		},
	},
});

export const {getData} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
