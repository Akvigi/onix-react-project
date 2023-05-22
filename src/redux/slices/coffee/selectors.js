import {createSelector} from '@reduxjs/toolkit';
import {selectFilter} from '../common/selectors';
import {filterStatus} from '../../../constants';

export const selectOrderCoffee = state => state.order.coffee;

export const selectSortedOrder = createSelector(
	[selectOrderCoffee, selectFilter],
	(order, filter) => {
		if (order) {
			switch (filter) {
				case filterStatus.price.f1t9:
					return [...order].sort((a, b) => a.price - b.price);
				case filterStatus.price.f9t1:
					return [...order].sort((a, b) => b.price - a.price);
				case filterStatus.name.fAtZ:
					return [...order].sort((a, b) => a.name.localeCompare(b.name));
				case filterStatus.name.fZtA:
					return [...order].sort((a, b) => b.name.localeCompare(a.name));
				default:
					return order;
			}
		}
	},
);

