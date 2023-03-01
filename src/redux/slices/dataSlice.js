import {createSlice} from '@reduxjs/toolkit';
import dataFU from '../../fudata';
import popData from '../../popdata';
import reviewsData from '../../reviewsdata';

const initialDataState = {
	dataFU,
	allData: [...dataFU, ...popData],
	popData,
	reviewsData,
};

const dataSlice = createSlice({
	name: 'data',
	initialState: initialDataState,
});

export const dataReducer = dataSlice.reducer;
