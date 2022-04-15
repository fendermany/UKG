import { useState } from 'react';

import { NavLink } from 'react-router-dom';

import Footer from '../../footer/Footer';

import {logo} from '../../../img/images';

import './cabinetForms.scss';
import Alert from '../../ui/alert/Alert';


export default function CabinetSignin() {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleAuth = (e) => {
		e.preventDefault();
		console.log('Auth');
		
	}

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
								<Alert type='success' text='Все успешно'/>
								<form onSubmit={handleAuth} className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='login'
											value={email}
											onChange={({target: {value}}) => setEmail(value)}
											placeholder='Ваша почта или логин'
											className='cabinet__form-input'
											required
										/>
									</div>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='password'
											name='password'
											value={password}
											onChange={({target: {value}}) => setPassword(value)}
											placeholder='Ваш пароль'
											className='cabinet__form-input'
											required
										/>
									</div>
									<button type='submit' className='cabinet__form-btn button button_gold'>
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
