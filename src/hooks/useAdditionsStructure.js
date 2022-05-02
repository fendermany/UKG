import { useQuery } from 'react-query';
import UserServices from './../services/UserServices';

const useAdditionsStructure = () => {
	const { data: getAdditionStructure, isSuccess: isSuccessAdditionStructure } =
		useQuery(
			'additions structure',
			() => UserServices.userTransactionAdditionStructure(),
			{
				refetchOnWindowFocus: false,
			}
		);

	return { getAdditionStructure, isSuccessAdditionStructure };
};

export default useAdditionsStructure;
