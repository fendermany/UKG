// Функции
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './../../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';
import AuthService from './../../../services/AuthService';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Компоненты
import Footer from './../../footer/Footer';
import Spinner from '../../spinner/Spinner';
import Alert from '../../ui/alert/Alert';
// Медиа
import { logo } from '../../../img/images';
// Стили
import './cabinetForms.scss';
import { Helmet } from 'react-helmet';

const Schema = Yup.object().shape({
	email: Yup.string()
		.email('Неправильный email формат')
		.required('Email обязателен')
		.max(255),
	password: Yup.string().max(255).required('Пароль обязателен'),
});

function CabinetSignin() {
	const { store } = useContext(AuthContext);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(Schema),
	});

	const {
		mutate: auth,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation(
		'Auth',
		data => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				localStorage.setItem('token', data.headers.authorization);
				store.setAuth(true);
				navigate('/cabinet');
			},
		}
	);

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
								Вход личный кабинет
							</div>
							{isError && <Alert type='error' text={error.message} />}
							{isSuccess && <Alert type='success' text='Вход выполнен' />}
							{isLoading && <Spinner width='80px' height='80px' />}
							<form
								onSubmit={handleSubmit(auth)}
								className='cabinet__form-form'
							>
								<div className='cabinet__form-line'>
									<input
										autoComplete='off'
										type='text'
										name='email'
										{...register('email')}
										placeholder='Ваша почта или логин'
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
										type='password'
										name='password'
										{...register('password')}
										placeholder='Ваш пароль'
										className='cabinet__form-input'
									/>
									{errors.password && (
										<p className='text-red-600 mt-1 text-xs'>
											{errors.password.message}
										</p>
									)}
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
	);
}

export default observer(CabinetSignin);
