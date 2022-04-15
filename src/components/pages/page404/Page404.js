import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './page404.scss';

export default function Page404() {
	return (
		<div className='cabinet'>

			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader/>

						<CabinetTopbar/>

						<div className='mt-5'>Страница не найдена</div>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	)
}
