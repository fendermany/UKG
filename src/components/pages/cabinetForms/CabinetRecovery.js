import { NavLink } from 'react-router-dom';

import Footer from '../../footer/Footer';

import {logo} from '../../../img/images';

import './cabinetForms.scss';

export default function CabinetRecovery() {
	return (
		<body className='cabinet'>
			<div className='wrapper'>
				<main className='page'>
					<div className='cabinet__container'>
						<div className='cabinet__logo'>
							<img src={logo} alt='Вход личный кабинет' />
						</div>
						<div className='cabinet__form'>
							<div className='cabinet__form-wrapper'>
								<div className='cabinet__form-title gold'>
									Восстановление пароля
								</div>
								<form action='#' className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='login'
											placeholder='Логин'
											className='cabinet__form-input'
										/>
									</div>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='email'
											placeholder='E-mail'
											className='cabinet__form-input'
										/>
									</div>
									<button className='cabinet__form-btn button button_gold'>
										Сбросить пароль
									</button>
								</form>
								<div className='cabinet__form-links'>
									<NavLink to='/signin'>Вход</NavLink>
									<NavLink to='/registration'>Регистрация</NavLink>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</div>
		</body>
	);
}
