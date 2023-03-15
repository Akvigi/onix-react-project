import React from 'react';

import {Route, Routes} from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import Coffee from './pages/Coffee/Coffee.jsx';
import Pokemons from './pages/Pokemons/Pokemons';

function App() {
	const aboutUsRef = React.createRef(null);
	const specialRef = React.createRef(null);
	return (
		<Routes>
			<Route path='/' element={<SharedLayout aboutUsRef={aboutUsRef} specialRef={specialRef}/>}>
				<Route path='onix-react-project' element={<Coffee aboutUsRef={aboutUsRef} specialRef={specialRef} />} />
				<Route path='pokemons' element={<Pokemons />} />
			</Route>
		</Routes>
	);
}

export default App;
