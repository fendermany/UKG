import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useAdditionsMonth = () => {
	const { data: getAdditionMonth, isSuccess: isSuccessAdditionMonth } =
		useQuery(
			'additions month',
			() => UserServices.userTransactionAdditionMonth(),
			{
				refetchOnWindowFocus: false,
			}
		);

	return { getAdditionMonth, isSuccessAdditionMonth };
};

export default useAdditionsMonth;
