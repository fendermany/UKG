// Функции
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import AuthService from './../../../services/AuthService';
// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Компоненты
import Footer from './../../footer/Footer';
import Alert from '../../ui/alert/Alert';
import Spinner from '../../spinner/Spinner';
// Медиа
import { logo } from '../../../img/images';
// Стили
import './cabinetForms.scss';

const Schema = Yup.object().shape({
	password: Yup.string().required('Это поле обязательное'),
	confirmPassword: Yup.string().when('password', {
		is: val => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
	}),
});

function SetPassword() {
	const [view, setView] = useState(false);
	const [token, setToken] = useState(null);
	const navigate = useNavigate();

	const getQueryVariable = variable => {
		let query = window.location.search.substring(1);
		let vars = query.split('&');
		for (let i = 0; i < vars.length; i++) {
			var pair = vars[i].split('=');
			if (pair[0] === variable) {
				setToken(pair[1]);
				AuthService.setPasswordVerify(pair[1])
					.then(() => {
						setView(true);
					})
					.catch(error => {
						setView(false);
						navigate('/signin');
					});
			}
		}
		return false;
	};

	useEffect(() => {
		getQueryVariable('token');
	}, []);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const {
		mutate: setpw,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation(
		'Reset password',
		data => AuthService.setPassword(token, data.password, data.confirmPassword),
		{
			onSuccess() {
				setTimeout(() => {
					navigate('/signin');
				}, 3000);
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
							<div className='cabinet__form-title gold'>Установка пароля</div>
							{isError && <Alert type='error' text={error.message} />}
							{isSuccess && (
								<Alert type='success' text='Пароль успешно задан.' />
							)}
							{isLoading && <Spinner width='80px' height='80px' />}
							{view && (
								<form
									onSubmit={handleSubmit(setpw)}
									className='cabinet__form-form'
								>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='password'
											name='login'
											{...register('password')}
											placeholder='Пароль'
											className='cabinet__form-input'
										/>
										{errors.password && (
											<p className='text-red-600 mt-1 text-xs'>
												{errors.password.message}
											</p>
										)}
									</div>
									<div className='cabinet__form-line'>
										<input
											autoComplete='off'
											type='password'
											name='password'
											{...register('confirmPassword')}
											placeholder='Повторите пароль'
											className='cabinet__form-input'
										/>
										{errors.confirmPassword && (
											<p className='text-red-600 mt-1 text-xs'>
												{errors.confirmPassword.message}
											</p>
										)}
									</div>
									<button
										type='submit'
										className='cabinet__form-btn button button_gold'
									>
										Установить пароль
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default SetPassword;
