
import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useAdditions = () => {

	const { data: getAddition, isSuccess: isSuccessAddition, refetch: refetchAddition } = useQuery(
		'additions',
		() => UserServices.userTransactionAddition(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return {getAddition, isSuccessAddition, refetchAddition}
}

export default useAdditions