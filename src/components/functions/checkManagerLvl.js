function checkManagerLvl(number) {
	let managerLvl;

	if (number < 1000) {
		managerLvl = '1';
	} else if (1000 < number < 5000) {
		managerLvl = '2';
	} else if (5000 < number < 10000) {
		managerLvl = '3';
	} else if (10000 < number < 25000) {
		managerLvl = '4';
	} else if (25000 < number < 50000) {
		managerLvl = '5';
	} else if (50000 < number < 100000) {
		managerLvl = '6';
	} else if (100000 < number < 250000) {
		managerLvl = '7';
	} else if (250000 < number < 500000) {
		managerLvl = '8';
	} else if (500000 < number < 1000000) {
		managerLvl = '9';
	} else if (1000000 < number < 2500000) {
		managerLvl = '10';
	} else if (2500000 < number < 5000000) {
		managerLvl = '11';
	} else if (5000000 < number) {
		managerLvl = 'MAX';
	}
	return managerLvl;
}

export default checkManagerLvl;
