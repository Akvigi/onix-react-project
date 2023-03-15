import React from 'react';

import {createPortal} from 'react-dom';

import MenuList from '../../../components/Menu/MenuList/MenuList';
import MenuWrapper from '../../../components/Menu/MenuWrapper/MenuWrapper';

const portal = document.querySelector('#portal');

const Menu = () => {
	function onBacLick(e) {
		console.log(e.target);
		console.log(e.currentTarget);
	}

	return createPortal(
		<MenuWrapper onClick={onBacLick}>
			<MenuList />
		</MenuWrapper>,
		portal,
	);
};

export default Menu;
