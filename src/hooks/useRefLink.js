import UserServices from './../services/UserServices';
import { useQuery } from 'react-query';

const useRefLink = () => {
	const { data: refLink, isSuccess: isSuccessrefLink } = useQuery(
		'reflink',
		() => UserServices.userRefLink(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return { refLink, isSuccessrefLink };
};

export default useRefLink;
