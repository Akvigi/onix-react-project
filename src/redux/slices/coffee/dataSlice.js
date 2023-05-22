import {createSlice} from '@reduxjs/toolkit';
import dataFU from '../../../fudata';
import popData from '../../../popdata';
import reviewsData from '../../../reviewsdata';

const initialCDataState = {
	dataFU,
	allData: [...dataFU, ...popData],
	popData,
	reviewsData,
};

const coffeeDataSlice = createSlice({
	name: 'data',
	initialState: initialCDataState,
});

export const dataReducer = coffeeDataSlice.reducer;
