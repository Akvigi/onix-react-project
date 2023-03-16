import {createAsyncThunk} from '@reduxjs/toolkit';
import * as api from '../api';

export const getPokemonsForMenu = createAsyncThunk(
	'pokemons/getPokemonsFMenu',
	async (payload, thunkAPI) => {
		try {
			const arrayOfPokemons = await api.getPackofPokemons(payload * 10);
			const arrayWithTruePokemons = await Promise.all(arrayOfPokemons.results.map(async pokemon => {
				const {name, sprites, weight, stats} = await api.getPokemon(pokemon.name);
				return {name, sprites, weight, stats};
			}));
			return arrayWithTruePokemons;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	});

export const getPokemon = createAsyncThunk(
	'pokemons/getPokemon',
	async (_, thunkAPI) => {
		try {
			const data = await api.getPokemon();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	});

export const getHeroImg = createAsyncThunk(
	'pokemons/getImg',
	async (_, thunkAPI) => {
		try {
			const data = await api.getImgPokemons();
			return data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error);
		}
	},
);
