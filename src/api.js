import axios from 'axios';
const API_KEY = '28235798-10089aa8a519f6d1c62a23eff';

const requestIMG = axios.create({
	baseURL: 'https://pixabay.com/api/',
});

const requestPok = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
});

export const getPackofPokemons = async inMenu => {
	const {data} = await requestPok.get('/pokemon', {params: {limit: 10, offset: inMenu}});
	return data;
};

export const getPokemon = async name => {
	const {data} = await requestPok.get(`/pokemon/${name}`);
	return data;
};

export const getImgPokemons = async () => {
	const {data} = await requestIMG.get(`/?key=${API_KEY}&q=pokemon`);
	return data;
};
