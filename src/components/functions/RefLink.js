import { useQuery } from 'react-query';
import UserServices from '../../services/UserServices';

function RefLink() {
	const { data: refLink, isSuccess: isSuccessrefLink } = useQuery(
		'reflink',
		() => UserServices.userRefLink(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<>
			{isSuccessrefLink && document.location.protocol + '//' + document.location.host + '/invite/registration?token=' + refLink.data.auto}
		</>
	)
}

export default RefLink;
