import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useNotUsedInviteBonus = () => {
	const { data: notUsedInviteBonus, isSuccess: isSuccessNotUsedInviteBonus } =
		useQuery(
			'NotUsedInviteBonus',
			() => UserServices.userReferralsNotUsedInviteBonus(),
			{
				refetchOnWindowFocus: false,
			}
		);

	return { notUsedInviteBonus, isSuccessNotUsedInviteBonus };
};

export default useNotUsedInviteBonus;
