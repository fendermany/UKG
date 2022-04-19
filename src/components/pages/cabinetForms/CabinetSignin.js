import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './../../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';

import Footer from '../../footer/Footer';
import Spinner from '../../spinner/Spinner';
import Alert from '../../ui/alert/Alert';

import { logo } from '../../../img/images';

import './cabinetForms.scss';

function CabinetSignin() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(true);
	const { store } = useContext(AuthContext);

	const handleAuth = e => {
		e.preventDefault();
		store.login(email, password, rememberMe);
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
								{store.isError && (
									<Alert type='error' text={store.errorMessage} />
								)}
								{store.isSuccess && (
									<Alert type='success' text={store.successMessage} />
								)}
								{store.isLoading && <Spinner />}
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

export default observer(CabinetSignin);
