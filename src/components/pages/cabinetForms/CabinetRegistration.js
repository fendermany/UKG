import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from './../../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';

import Footer from '../../footer/Footer';
import Alert from './../../ui/alert/Alert';
import Spinner from '../../spinner/Spinner';

import { logo } from '../../../img/images';

import './cabinetForms.scss';

function CabinetRegistration() {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [fullName, setFullName] = useState('');
	const [registerTag, setRegisterTag] = useState('AUTO');
	const { store } = useContext(AuthContext);
	const { t } = useTranslation();

	const handleReg = e => {
		e.preventDefault();
		store.registration(fullName, email, phone, registerTag);
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
									{t('registration.formTitle')}
								</div>
								{store.isError && (
									<Alert type='error' text={store.errorMessage} />
								)}
								{store.isSuccess && (
									<Alert type='success' text={store.successMessage} />
								)}
								{store.isLoading && <Spinner />}
								<form onSubmit={handleReg} className='cabinet__form-form'>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='name'
											placeholder='Имя'
											value={fullName}
											onChange={({ target: { value } }) => setFullName(value)}
											className='cabinet__form-input'
											required
										/>
									</div>
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
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='text'
											name='phone'
											value={phone}
											onChange={({ target: { value } }) => setPhone(value)}
											placeholder='Телефон'
											className='cabinet__form-input'
											required
										/>
									</div>
									<div className='cabinet__form-checkbox checkbox'>
										<input
											id='c_1'
											data-error='Ошибка'
											className='checkbox__input'
											type='checkbox'
											value='1'
											name='form[]'
											required
										/>
										<label htmlFor='c_1' className='checkbox__label'>
											<span className='checkbox__text'>
												Согласен с правилами и соглашениями, а так же с
												возможными рисками.
											</span>
										</label>
									</div>
									<button className='cabinet__form-btn button button_gold'>
										Регистрация
									</button>
								</form>
								<div className='cabinet__form-links'>
									<NavLink to='/signin'>Вход</NavLink>
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

export default observer(CabinetRegistration);
