import axios from 'axios';
const API_KEY = '28235798-10089aa8a519f6d1c62a23eff';
// } q=${query}&page=${page}

const requestIMG = axios.create({
	baseURL: `https://pixabay.com/api/?key=${API_KEY}`,
});

const requestPok = axios.create({
	baseURL: 'https://pokeapi.co/api/v2',
});

export const getPackofPokemons = async () => {
	const {data} = await requestPok.get('/pokemon?limit=10&offset=0');
	return data;
};

export const getPokemon = async name => {
	const {data} = await requestPok.get(`/pokemon/${name}`);
	return data;
};

export const getImgPokemons = async () => {
	const {data} = await requestIMG.get('&q=pokemon');
	return data;
};
