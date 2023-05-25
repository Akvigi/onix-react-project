import {createSlice} from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {getPokemonsForMenu} from './requests';

const pokemonApi = createApi({
	reducerPath: 'pokemonApi',
	baseQuery: fetchBaseQuery({baseUrl: 'https://pokeapi.co/api/v2'}),
	endpoints: builder => ({
		getPokemonsForMenu: builder.query({
			query: qty => ({
				url: '/pokemon',
				params: {limit: 10, offset: qty},
			}),
		}),
		getPokemon: builder.query({
			query: name => `/pokemon/${name}`,
		}),
	}),
});

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
	},
});

export const {setPagPage, setMenuToStart} = pokemonsSlice.actions;

export const pokemonsReducer = pokemonsSlice.reducer;

export const {useGetPokemonsForMenuQuery, useGetPokemonQuery} = pokemonApi;

export default pokemonApi;
