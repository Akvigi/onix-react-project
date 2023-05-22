import {combineReducers} from '@reduxjs/toolkit';
import {dataReducer} from './slices/coffee/dataSlice';
import {modalsReducers} from './slices/common/modalsSlice';
import {orderReducer} from './slices/common/orderSlice';
import {pagesReducer} from './slices/common/pageSlice';
import {pokemonsReducer} from './slices/pokemons/pokemonsSlice';

const rootReducer = combineReducers({
	order: orderReducer,
	data: dataReducer,
	modals: modalsReducers,
	pages: pagesReducer,
	pokemons: pokemonsReducer,
});

export default rootReducer;
