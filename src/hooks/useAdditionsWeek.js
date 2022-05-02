import UserServices from './../services/UserServices';
import { useQuery } from 'react-query';

const useAdditionsWeek = () => {
	const { data: getAdditionWeek, isSuccess: isSuccessAdditionWeek, refetch: refetchAdditionWeek } = useQuery(
		'additions week',
		() => UserServices.userTransactionAdditionWeek(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { getAdditionWeek, isSuccessAdditionWeek, refetchAdditionWeek };
};

export default useAdditionsWeek;
