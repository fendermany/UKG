import UserServices from './../services/UserServices';
import { useQuery } from 'react-query';

const useUserInfo = () => {
	const { data: userInfo, isSuccess: isSuccessUserInfo, refetch: refetchUserInfo } = useQuery(
		'user',
		() => UserServices.userInfo(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { userInfo, isSuccessUserInfo, refetchUserInfo };
};

export default useUserInfo;
