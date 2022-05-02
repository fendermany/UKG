const refLvl = (success, data, successWallet, wallet) => {
	let coeff;

	if (success && successWallet) {
		switch (data.data.rank) {
			case 'RANK_1':
				coeff =
					(171 / 1000) *
					+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints);
				break;
			case 'RANK_2':
				coeff =
					((282 - 171) / 4000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							1000) +
					171;
				break;
			case 'RANK_3':
				coeff =
					((393 - 282) / 5000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							5000) +
					282;
				break;
			case 'RANK_4':
				coeff =
					((504 - 393) / 15000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							10000) +
					393;
				break;
			case 'RANK_5':
				coeff =
					((615 - 504) / 25000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							25000) +
					504;
				break;
			case 'RANK_6':
				coeff =
					((726 - 615) / 50000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							50000) +
					615;
				break;
			case 'RANK_7':
				coeff =
					((838 - 726) / 150000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							100000) +
					726;
				break;
			case 'RANK_8':
				coeff =
					((949 - 838) / 250000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							250000) +
					838;
				break;
			case 'RANK_9':
				coeff =
					((1060 - 949) / 500000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							500000) +
					949;
				break;
			case 'RANK_10':
				coeff =
					((1170 - 1060) / 1500000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							1000000) +
					1060;
				break;
			case 'RANK_11':
				coeff =
					((1281 - 1170) / 2500000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							2500000) +
					1170;
				break;
			case 'RANK_12':
				coeff =
					((1311 - 1281) / 2500000) *
						(+(wallet.data.leftHistoryPoints + wallet.data.rightHistoryPoints) -
							5000000) +
					1281;
				break;
			default:
				return null;
		}
	}

	return coeff;
};

export default refLvl;
