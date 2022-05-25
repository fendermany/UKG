// Функции
import AuthService from './../../../services/AuthService';
import { useMutation } from 'react-query';
import { Link, NavLink } from 'react-router-dom';

// Формы
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
// Компоненты
import Footer from './../../footer/Footer';
import Alert from './../../ui/alert/Alert';
import Spinner from './../../spinner/Spinner';
// Медиа
import { logo } from '../../../img/images';
// Стили
import './cabinetForms.scss';
import {Helmet} from "react-helmet";

const Schema = Yup.object().shape({
	email: Yup.string()
		.required('Email обязателен')
		.email('Неправильный email формат')
		.max(255),
});

function CabinetRecovery() {
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
		mutate: recovery,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation('Reset password', data => AuthService.recovery(data.email), {
		onSuccess() {
			reset(
				{
					email: '',
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
	});

	return (
		<div className='wrapper'>
		<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<main className='page'>
				<div className='cabinet__container'>
					<Link to='/' className='cabinet__logo'>
						<img src={logo} alt='Вход личный кабинет' />
					</Link>
					<div className='cabinet__form'>
						<div className='cabinet__form-wrapper'>
							<div className='cabinet__form-title gold'>
								Восстановление пароля
							</div>
							{isError && <Alert type='error' text={error.message} />}
							{isSuccess && (
								<Alert
									type='success'
									text='Ссылка для восстановления пароля отправлена на Вашу почту.'
								/>
							)}
							{isLoading && <Spinner width='80px' height='80px' />}
							<form
								onSubmit={handleSubmit(recovery)}
								className='cabinet__form-form'
							>
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
								<button
									type='submit'
									className='cabinet__form-btn button button_gold'
								>
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
	);
}

export default CabinetRecovery;
