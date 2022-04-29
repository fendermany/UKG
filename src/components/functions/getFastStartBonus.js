const fastStartLvl = (success, path) => {
	let data;

	if (success) {
		
		switch (path) {
			case 'START_1':
				data = '25';
				break;
			case 'START_2':
				data = '50';
				break;
			case 'START_3':
				data = '125';
				break;
			case 'START_4':
				data = '250';
				break;
			case 'START_5':
				data = '350';
				break;
			case 'START_6':
				data = '500';
				break;
			case 'START_7':
				data = '750';
				break;
			case 'START_8':
				data = '1000';
				break;
			case 'START_9':
				data = '2500';
				break;
			default:
				return '5';
		}
	}

	return data;
};

export default fastStartLvl;
