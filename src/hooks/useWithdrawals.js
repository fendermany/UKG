import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useWithdrawals = () => {
	const { data: getWithdrawalAll, isSuccess: isSuccessWithdrawalAll } =
		useQuery('withdrawals', () => UserServices.userWithdrawalAll(), {
			refetchOnWindowFocus: false,
		});

	return { getWithdrawalAll, isSuccessWithdrawalAll };
};

export default useWithdrawals;
