export const getOrderStFromLocal = () => {
	const local = JSON.parse(localStorage.getItem('order'));
	if (local) {
		return local;
	}

	return [];
};
