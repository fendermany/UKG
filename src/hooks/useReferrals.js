import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useReferrals = () => {
	const { data: referrals, isSuccess: isSuccessReferrals } = useQuery(
		'referrals all',
		() => UserServices.userReferralsAll(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { referrals, isSuccessReferrals };
};

export default useReferrals;
