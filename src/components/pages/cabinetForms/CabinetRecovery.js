import { useContext, useState } from 'react';
import { AuthContext } from './../../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';

import { NavLink } from 'react-router-dom';

import Footer from '../../footer/Footer';
import Alert from './../../ui/alert/Alert';
import Spinner from './../../spinner/Spinner';

import { logo } from '../../../img/images';

import './cabinetForms.scss';

function CabinetRecovery() {
	const [email, setEmail] = useState('');
	const { store } = useContext(AuthContext);

	const handleRecovery = e => {
		e.preventDefault();
		store.recovery(email);
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
								{store.isError && (
									<Alert type='error' text={store.errorMessage} />
								)}
								{store.isSuccess && (
									<Alert type='success' text={store.successMessage} />
								)}
								{store.isLoading && <Spinner />}
								<div className='cabinet__form-title gold'>
									Восстановление пароля
								</div>
								<form onSubmit={handleRecovery} className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='email'
											placeholder='E-mail'
											value={email}
											onChange={({ target: { value } }) => setEmail(value)}
											className='cabinet__form-input'
											required
										/>
									</div>
									<button type='submit' className='cabinet__form-btn button button_gold'>
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
		</div>
	);
}

export default observer(CabinetRecovery);