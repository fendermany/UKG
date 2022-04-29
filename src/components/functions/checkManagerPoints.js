const checkManagerPoints = (success, path) => {
	let manager_total;

	if (success) {
		switch (path) {
			case 'RANK_1':
				manager_total = 1000;
				break;
			case 'RANK_2':
				manager_total = 5000;
				break;
			case 'RANK_3':
				manager_total = 10000;
				break;
			case 'RANK_4':
				manager_total = 25000;
				break;
			case 'RANK_5':
				manager_total = 50000;
				break;
			case 'RANK_6':
				manager_total = 100000;
				break;
			case 'RANK_7':
				manager_total = 250000;
				break;
			case 'RANK_8':
				manager_total = 500000;
				break;
			case 'RANK_9':
				manager_total = 1000000;
				break;
			case 'RANK_10':
				manager_total = 2500000;
				break;
			case 'RANK_11':
				manager_total = 5000000;
				break;
			case 'RANK_12':
				manager_total = 'MAX';
				break;
			default:
				return null;
		}
	}
	return manager_total;
};

export default checkManagerPoints;
