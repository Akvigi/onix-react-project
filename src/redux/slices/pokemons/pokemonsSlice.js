import {createSlice} from '@reduxjs/toolkit';
import {getPokemonsForMenu, getHeroImg} from './requests';

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: {
		menu: [],
		heroPokemon: null,
		pagPage: 0,
		loadingM: false,
		loadingHero: false,
		error: null,
	},
	reducers: {
		setPagPage(store, {payload}) {
			return {
				...store,
				pagPage: payload,
			};
		},
		setMenuToStart(store) {
			return {
				...store,
				pagPage: 0,
				menu: [],
			};
		},
	},
	extraReducers: {
		[getPokemonsForMenu.pending](store) {
			store.loading = true;
			store.error = null;
		},
		[getPokemonsForMenu.fulfilled](store, {payload}) {
			store.error = null;
			if (store.pagPage !== 0 && store.menu) {
				store.menu = [...store.menu, ...payload].reduce((acc, curr) => {
					const index = acc.findIndex(obj => obj.name === curr.name);
					if (index === -1) {
						return [...acc, curr];
					}

					acc[index] = curr;
					return acc;
				}, []);
			} else {
				store.menu = [...payload];
			}

			if (store.menu.length % 10 === 0) {
				store.loading = false;
			}
		},
		[getPokemonsForMenu.rejected](store, {payload}) {
			store.loading = false;
			store.error = payload;
		},
		[getHeroImg.pending](store) {
			store.loadingHero = true;
			store.error = null;
		},
		[getHeroImg.fulfilled](store, {payload}) {
			store.loadingHero = false;
			store.heroPokemon = payload.hits[0].largeImageURL;
		},
		[getHeroImg.rejected](store, {payload}) {
			store.loadingHero = false;
			store.error = payload;
		},
	},
});

export const {setPagPage, setMenuToStart} = pokemonsSlice.actions;

export const pokemonsReducer = pokemonsSlice.reducer;
