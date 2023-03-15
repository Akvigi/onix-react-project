import {createSlice} from '@reduxjs/toolkit';
import {getPokemonsForMenu, getPokemon, getHeroImg} from '../../requests';

const pokemonsSlice = createSlice({
	name: 'pokemons',
	initialState: {
		menu: [],
		heroPokemon: null,
		loading: false,
		error: null,
	},
	extraReducers: {
		[getPokemonsForMenu.pending](store) {
			store.loading = true;
			store.error = null;
		},
		[getPokemonsForMenu.fulfilled](store, {payload}) {
			store.loading = false;
			store.error = null;
			store.menu = [...payload];
		},
		[getPokemonsForMenu.rejected](store, {payload}) {
			store.loading = false;
			store.error = payload;
		},
		[getPokemon.pending](store) {
			store.loading = true;
			store.error = null;
		},
		[getPokemon.fulfilled](store, {payload}) {
			store.loading = false;
			store.heroPokemon = payload;
		},
		[getPokemon.rejected](store, {payload}) {
			store.loading = false;
			store.error = payload;
		},
		[getHeroImg.pending](store) {
			store.loading = true;
			store.error = null;
		},
		[getHeroImg.fulfilled](store, {payload}) {
			store.loading = false;
			store.heroPokemon = payload.hits[0].largeImageURL;
		},
		[getHeroImg.rejected](store, {payload}) {
			store.loading = false;
			store.error = payload;
		},
	},
});

export default pokemonsSlice.reducer;
