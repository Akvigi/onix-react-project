import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import './i18n';
import SharedLayout from './components/SharedLayout';
import Coffee from './pages/Coffee/Coffee.jsx';
import Pokemons from './pages/Pokemons/Pokemons';

export const themeConst = {
	dark: 'dark',
	light: 'light',
};

export const Context = React.createContext();

function App() {
	const [theme, setTheme] = useState(themeConst.light);
	const aboutUsRef = React.createRef(null);
	const specialRef = React.createRef(null);

	const changeTheme = () => {
		if (theme === themeConst.light) {
			setTheme(themeConst.dark);
			return console.log(theme);
		}

		setTheme(themeConst.light);
		console.log(theme);
	};

	const themeValue = {theme, changeTheme};
	return (
		<Context.Provider value={themeValue}>
			<Routes>
				<Route path='/' element={<SharedLayout aboutUsRef={aboutUsRef} specialRef={specialRef}/>}>
					<Route path='onix-react-project' element={<Coffee aboutUsRef={aboutUsRef} specialRef={specialRef} />} />
					<Route path='pokemons' element={<Pokemons />} />
				</Route>
			</Routes>
		</Context.Provider>
	);
}

export default App;
