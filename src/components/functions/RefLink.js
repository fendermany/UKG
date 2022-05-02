import useRefLink from './../../hooks/useRefLink';

function RefLink() {
	const { refLink, isSuccessrefLink } = useRefLink();

	return (
		<>
			{isSuccessrefLink && document.location.protocol + '//' + document.location.host + '/invite/registration?token=' + refLink.data.auto}
		</>
	)
}

export default RefLink;
