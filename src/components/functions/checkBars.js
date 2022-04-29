const checkBars = (success, data) => {
	let bars;

	if (success) {
		switch (data.data.balance.bonusCount) {
			case 0:
				bars = '0 слитков';
				break;
			case 1:
				bars = '1 слиток';
				break;
			case 2:
				bars = '2 слитка';
				break;
			case 3:
				bars = '3 слитка';
				break;
			default:
				return null;
		}
	}
	return bars;
};


export default checkBars;