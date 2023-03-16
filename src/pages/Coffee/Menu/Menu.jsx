import React from 'react';
import {createPortal} from 'react-dom';

import MenuWrapper from '../../../components/Menu/MenuWrapper/MenuWrapper';
import MenuList from '../../../components/Menu/MenuList/MenuList';

const portal = document.querySelector('#portal');

const Menu = () => createPortal(
	<MenuWrapper>
		<MenuList />
	</MenuWrapper>,
	portal,
);

export default Menu;
