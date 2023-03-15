import {createSelector} from '@reduxjs/toolkit';
import {filterStatus} from './constants';

export const selectOrderCoffee = state => state.order.coffee;
export const selectFilter = state => state.filter;

export const selectSortedOrder = createSelector(
	[selectOrderCoffee, selectFilter],
	(order, filter) => {
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
	},
);

export const selectAllData = state => state.data.allData;
export const selectPopData = state => state.data.popData;
export const selectDataFU = state => state.data.dataFU;
export const selectReviewsData = state => state.data.reviewsData;

export const selectModals = state => state.modals;
export const selectMenuModal = state => state.modals.menu;
export const selectOrderModal = state => state.modals.order;
export const selectTable = state => state.modals.table;

export const selectCoffePage = state => state.pages.coffee;

export const selectHeroPokemon = state => state.pokemons.heroPokemon;
export const selectPokemonMenu = state => state.pokemons.menu;

export const selectState = state => state;
