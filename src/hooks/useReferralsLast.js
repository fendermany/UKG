import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useReferralsLast = () => {
	const { data: referralsLast, isSuccess: isSuccessreferralsLast } = useQuery(
		'referrals desc',
		() => UserServices.userReferralsLast(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { referralsLast, isSuccessreferralsLast };
};

export default useReferralsLast;
