import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './slices/coffee/dataSlice';
import {modalsReducers} from './slices/common/modalsSlice';
import {orderReducer} from './slices/common/orderSlice';
import {pagesReducer} from './slices/common/pageSlice';
import {pokemonsReducer} from './slices/pokemons/pokemonsSlice';
import imgApi from './slices/pokemons/imgApi';

const rootReducer = combineReducers({
	[imgApi.reducerPath]: imgApi.reducer,
	order: orderReducer,
	data: dataReducer,
	modals: modalsReducers,
	pages: pagesReducer,
	pokemons: pokemonsReducer,
});

export default rootReducer;
