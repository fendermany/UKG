import { NavLink } from 'react-router-dom';

import Footer from '../../footer/Footer';

import {logo} from '../../../img/images';

import './cabinetForms.scss';


export default function CabinetSignin() {
	return (
		<div className='cabinet'>
			<div className='wrapper'>
				<main className='page'>
					<div className='cabinet__container'>
						<div className='cabinet__logo'>
							<img src={logo} alt='Вход личный кабинет' />
						</div>
						<div className='cabinet__form'>
							<div className='cabinet__form-wrapper'>
								<div className='cabinet__form-title gold'>Вход личный кабинет</div>
								<form action='#' className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autocomplete='off'
											type='text'
											name='login'
											placeholder='Ваша почта или логин'
											className='cabinet__form-input'
										/>
									</div>
									<div className='cabinet__form-line'>
										<input
											autocomplete='off'
											type='password'
											name='password'
											placeholder='Ваш пароль'
											className='cabinet__form-input'
										/>
									</div>
									<button className='cabinet__form-btn button button_gold'>
										Войти
									</button>
								</form>
								<div className='cabinet__form-links'>
									<NavLink to='/registration'>Регистрация</NavLink>
									<NavLink to='/recovery'>Забыли пароль?</NavLink>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer/>
			</div>
		</div>
	);
}
