import UserServices from './../services/UserServices';
import { useQuery } from 'react-query';

const usePools = () => {
	const { data: pools, isSuccess: isSuccessPools, refetch: refetchPools } = useQuery(
		'pools',
		() => UserServices.userPool(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { pools, isSuccessPools, refetchPools };
};

export default usePools;
