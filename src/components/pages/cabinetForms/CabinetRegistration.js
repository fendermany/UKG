import { useState } from 'react';
import { useMutation } from 'react-query';
import { NavLink } from 'react-router-dom';
import { $api } from '../../../api/axios';

import Footer from '../../footer/Footer';
import Alert from './../../ui/alert/Alert';
import Spinner from '../../spinner/Spinner';

import { logo } from '../../../img/images';

import './cabinetForms.scss';

export default function CabinetRegistration() {
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [fullName, setFullName] = useState('');
	const [registerTag, setRegisterTag] = useState('AUTO');

	const successRegistration = () => {
		setPhone('');
		setFullName('');
		setEmail('');
	};

	const {
		mutate: register,
		isLoading,
		error
	} = useMutation(
		'Registration',
		() =>
			$api({
				url: '/pub/users/register',
				type: 'POST',
				auth: false,
				body: { fullName, email, phone, registerTag },
			}),
		{
			onSuccess() {
				successRegistration();
			}
		}
	);

	const handleReg = e => {
		e.preventDefault();
		register();
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
								<div className='cabinet__form-title gold'>Регистрация</div>
								{error && <Alert type='error' text={error} />}
								{isLoading && <Spinner />}
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
										/>
									</div>
									{/* <div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='password'
											name='password'
											placeholder='Придумайте пароль'
											value={password}
											onChange={({ target: { value } }) => setPassword(value)}
											className='cabinet__form-input'
										/>
									</div>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='password'
											name='repassword'
											placeholder='Ваш пароль еще раз'
											className='cabinet__form-input'
										/>
									</div> */}
									<div className='cabinet__form-checkbox checkbox'>
										<input
											id='c_1'
											data-error='Ошибка'
											className='checkbox__input'
											type='checkbox'
											value='1'
											name='form[]'
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
