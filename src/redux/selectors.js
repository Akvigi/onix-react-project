import {createSelector} from '@reduxjs/toolkit';
import {filterStatus} from './constants';

export const getOrder = state => state.order;
export const getFilter = state => state.filter;

export const getSortedOrder = createSelector(
	[getOrder, getFilter],
	(order, filter) => {
		const ord = JSON.stringify(order);
		switch (filter) {
			case filterStatus.price.f1t9:
				return JSON.parse(ord).sort((a, b) => a.price - b.price);
			case filterStatus.price.f9t1:
				return JSON.parse(ord).sort((a, b) => b.price - a.price);
			case filterStatus.name.fAtZ:
				return JSON.parse(ord).sort((a, b) => a.name.localeCompare(b.name));
			case filterStatus.name.fZtA:
				return JSON.parse(ord).sort((a, b) => b.name.localeCompare(a.name));
			default:
				return order;
		}
	},
);

export const getAllData = state => state.data.allData;
export const getPopData = state => state.data.popData;
export const getDataFU = state => state.data.dataFU;
export const getReviewsData = state => state.data.reviewsData;

export const getModals = state => state.modals;
export const getMenuModal = state => state.modals.menu;
export const getOrderModal = state => state.modals.order;

export const getState = state => state;
