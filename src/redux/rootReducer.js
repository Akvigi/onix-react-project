import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './slices/coffee/dataSlice';
import {filterReducer} from './slices/coffee/filterSlice';
import {modalsReducers} from './slices/modalsSlice';
import {orderReducer} from './slices/coffee/orderSlice';
import {pagesReducer} from './slices/pageSlice';
import pokemonsReducer from './slices/pokemons/pokemonsSlice';

const rootReducer = combineReducers({
	order: orderReducer,
	data: dataReducer,
	modals: modalsReducers,
	filter: filterReducer,
	pages: pagesReducer,
	pokemons: pokemonsReducer,
});

export default rootReducer;
