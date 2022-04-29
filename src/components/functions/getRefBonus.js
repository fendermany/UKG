const Refbonus = (success, data) => {
	let linear_rank;

	if (success) {
		switch (data.data.rank) {
			case 'RANK_1':
				linear_rank = '7%';
				break;
			case 'RANK_2':
				linear_rank = '8%';
				break;
			case 'RANK_3':
				linear_rank = '9%';
				break;
			case 'RANK_4':
				linear_rank = '10%';
				break;
			case 'RANK_5':
				linear_rank = '11%';
				break;
			case 'RANK_6':
				linear_rank = '12%';
				break;
			case 'RANK_7':
				linear_rank = '13%';
				break;
			case 'RANK_8':
				linear_rank = '14%';
				break;
			case 'RANK_9':
				linear_rank = '15%';
				break;
			case 'RANK_10':
				linear_rank = '16%';
				break;
			case 'RANK_11':
				linear_rank = '17%';
				break;
			case 'RANK_12':
				linear_rank = '18%';
				break;
			default:
				return null;
		}
	}

	return linear_rank;
}

export default Refbonus;