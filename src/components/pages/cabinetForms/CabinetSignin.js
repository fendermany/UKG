import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useMutation } from 'react-query';
import { $api } from '../../../api/axios';
import { useAuth } from './../../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import Footer from '../../footer/Footer';
import Spinner from '../../spinner/Spinner';
import Alert from '../../ui/alert/Alert';

import { logo } from '../../../img/images';

import './cabinetForms.scss';

export default function CabinetSignin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(true);

	const navigate = useNavigate();
	const { setIsAuth } = useAuth();

	const successLogin = token => {
		localStorage.setItem('token', token);

		setIsAuth(true);

		setEmail('');
		setPassword('');

		navigate('/');
	};

	const {
		mutate: auth,
		isLoading: isLoadingAuth,
		error: errorAuth,
	} = useMutation(
		'Auth',
		() =>
			$api({
				url: '/login',
				type: 'POST',
				auth: false,
				body: { email, password, rememberMe },
			}),
		{
			onSuccess(data) {
				successLogin(data.headers.authorization);
			},
		}
	);

	const handleAuth = e => {
		e.preventDefault();
		auth();
	};

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
								<div className='cabinet__form-title gold'>
									Вход личный кабинет
								</div>
								{errorAuth && <Alert type='error' text={errorAuth} />}
								{isLoadingAuth && <Spinner />}
								<form onSubmit={handleAuth} className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='login'
											value={email}
											onChange={({ target: { value } }) => setEmail(value)}
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
											onChange={({ target: { value } }) => setPassword(value)}
											placeholder='Ваш пароль'
											className='cabinet__form-input'
											required
										/>
									</div>
									<button
										type='submit'
										className='cabinet__form-btn button button_gold'
									>
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
				<Footer />
			</div>
		</div>
	);
}
