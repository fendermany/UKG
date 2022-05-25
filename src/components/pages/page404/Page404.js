import { useContext } from 'react';
import { AuthContext } from './../../../contexts/AuthContext';
import { Navigate } from 'react-router-dom';

// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './page404.scss';
import {Helmet} from "react-helmet";

export default function Page404() {
	const { store } = useContext(AuthContext);

	return (
		<>
		<Helmet>
				<meta name='viewport' content='width=1660' />
			</Helmet>
			{store.isAuth ? (
				<Navigate replace to='/cabinet' />
			) : (
				<Navigate replace to='/' />
			)}

			<div className='cabinet'>
				<div className='cabinet__wrapper'>
					<Aside />

					<div className='wrapper'>
						<main className='page'>
							<CabinetHeader />

							<CabinetTopbar />

							<div className='mt-5'>Страница не найдена</div>
						</main>
						<CabinetFooter />
					</div>
				</div>
			</div>
		</>
	);
}
