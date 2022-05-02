import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useWalletsTree = () => {

	const { data: walletsTree, isSuccess: isSuccessWalletsTree } = useQuery(
		'wallet',
		() => UserServices.walletsTree(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return {walletsTree, isSuccessWalletsTree}
}

export default useWalletsTree