const checkReferralPoints = (success, path) => {
	let referral_total;

	if (success) {
		switch (path) {
			case 'RANK_1':
				referral_total = 1000;
				break;
			case 'RANK_2':
				referral_total = 5000;
				break;
			case 'RANK_3':
				referral_total = 10000;
				break;
			case 'RANK_4':
				referral_total = 25000;
				break;
			case 'RANK_5':
				referral_total = 50000;
				break;
			case 'RANK_6':
				referral_total = 100000;
				break;
			case 'RANK_7':
				referral_total = 250000;
				break;
			case 'RANK_8':
				referral_total = 500000;
				break;
			case 'RANK_9':
				referral_total = 1000000;
				break;
			case 'RANK_10':
				referral_total = 2500000;
				break;
			case 'RANK_11':
				referral_total = 5000000;
				break;
			case 'RANK_12':
				referral_total = 'MAX';
				break;
			default:
				return null;
		}
	}
	return referral_total;
};

export default checkReferralPoints;
