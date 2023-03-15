import {createAsyncThunk} from '@reduxjs/toolkit';
import * as api from '../api';

export const getPokemonsForMenu = createAsyncThunk(
	'pokemons/getPokemonsFMenu',
	async (_, thunkAPI) => {
		try {
			const data = await api.getPackofPokemons();
			return data.results;
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
