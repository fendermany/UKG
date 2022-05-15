// Функции
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useMutation } from 'react-query';
import AuthService from './../../../services/AuthService';
// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Компоненты
import Footer from './../../footer/Footer';
import Alert from './../../ui/alert/Alert';
import Spinner from '../../spinner/Spinner';
// Медиа
import { logo } from '../../../img/images';
// Стили
import './cabinetForms.scss';
import UserServices from './../../../services/UserServices';
import { useState } from 'react';
import { useEffect } from 'react';

const Schema = Yup.object().shape({
	email: Yup.string()
		.required('Email обязателен')
		.email('Неправильный email формат')
		.max(255),
	phone: Yup.string()
		.required('Телефон обязателен')
		.min(5, 'Минимум 5 цифр')
		.max(255),
	fullName: Yup.string()
		.required('Имя обязательно')
		.min(2, 'Минимум 2 символа')
		.max(255),
	checkbox: Yup.boolean().oneOf([true], 'Необходимо согласие'),
});

function CabinetRegistration() {
	const { t } = useTranslation();
	const [view, setView] = useState(false);
	const [name, setName] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		getQueryVariable('token');
	}, []);

	function getQueryVariable(variable) {
		let query = window.location.search.substring(1);
		let vars = query.split('&');
		for (let i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] === variable) {
				setToken(pair[1]);
				UserServices.userRefLinkCheck(pair[1])
					.then(response => {
						setView(true);
						setName(response.data.fullName);
					})
					.catch(error => {
						setView(false);
					});
			}
		}
		return false;
	}

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const {
		mutate: registration,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation(
		'Registration',
		data =>
			AuthService.registration(data.fullName, data.email, data.phone, token),
		{
			onSuccess() {
				reset(
					{
						fullName: '',
						email: '',
						phone: '',
						checkbox: false,
					},
					{
						keepErrors: true,
						keepDirty: true,
						keepIsSubmitted: false,
						keepTouched: false,
						keepIsValid: false,
						keepSubmitCount: false,
					}
				);
			},
		}
	);

	return (
		<div className='wrapper'>
			<main className='page'>
				<div className='cabinet__container'>
					<Link to='/' className='cabinet__logo'>
						<img src={logo} alt='Вход личный кабинет' />
					</Link>
					<div className='cabinet__form'>
						<div className='cabinet__form-wrapper'>
							<div className='cabinet__form-title gold'>
								{t('registration.formTitle')}
							</div>
							{isError && <Alert type='error' text={error.message} />}
							{isSuccess && (
								<Alert
									type='success'
									text='Регистрация прошла успешно. Проверьте почту для подтверждения.'
								/>
							)}
							{isLoading && <Spinner width='80px' height='80px' />}
							<form
								onSubmit={handleSubmit(registration)}
								className='cabinet__form-form'
							>
								<div className='cabinet__form-line'>
									<input
										autoComplete='off'
										type='text'
										name='fullName'
										placeholder='Имя'
										{...register('fullName')}
										className='cabinet__form-input'
									/>
									{errors.fullName && (
										<p className='text-red-600 mt-1 text-xs'>
											{errors.fullName.message}
										</p>
									)}
								</div>
								<div className='cabinet__form-line'>
									<input
										autoComplete='off'
										type='text'
										name='email'
										placeholder='E-mail'
										{...register('email')}
										className='cabinet__form-input'
									/>
									{errors.email && (
										<p className='text-red-600 mt-1 text-xs'>
											{errors.email.message}
										</p>
									)}
								</div>
								<div className='cabinet__form-line'>
									<input
										autoComplete='off'
										type='text'
										name='phone'
										{...register('phone')}
										placeholder='Телефон'
										className='cabinet__form-input'
									/>
									{errors.phone && (
										<p className='text-red-600 mt-1 text-xs'>
											{errors.phone.message}
										</p>
									)}
								</div>
								{view && (
									<div className='cabinet__form-line'>
										<input
											disabled
											autoComplete='off'
											type='text'
											name='invite'
											placeholder={name}
											className='cabinet__form-input'
										/>
									</div>
								)}
								<div className='cabinet__form-checkbox checkbox'>
									<input
										id='checkbox'
										className='checkbox__input'
										type='checkbox'
										{...register('checkbox')}
										name='checkbox'
									/>
									<label htmlFor='checkbox' className='checkbox__label'>
										<span className='checkbox__text'>
											Согласен с правилами и соглашениями, а так же с возможными
											рисками.
										</span>
									</label>
									{errors.checkbox && (
										<p className='text-red-600 mt-1 text-xs'>
											{errors.checkbox.message}
										</p>
									)}
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
	);
}

export default CabinetRegistration;
