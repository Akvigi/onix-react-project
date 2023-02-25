export const getOrderStFromLocal = () => {
	const local = JSON.parse(localStorage.getItem('order'));
	if (local) {
		return local;
	}

	return [];
};

export const getModalsFromLocal = () => {
	const local = JSON.parse(localStorage.getItem('modals'));
	if (local) {
		return local;
	}

	return {
		order: false,
		menu: false,
	};
};
