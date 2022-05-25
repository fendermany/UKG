import { useState } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from 'react-query';
import UserServices from '../../../services/UserServices';
// Hooks
import useUserInfo from './../../../hooks/useUserInfo';

// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import Alert from './../../ui/alert/Alert';
import Spinner from './../../spinner/Spinner';
import { Tab, Tabs } from '@mui/material';
// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Styles
import './cabinetProfile.scss';
import {Helmet} from "react-helmet";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<li
			role='tabpanel'
			hidden={value !== index}
			id={`yieldchart-tabpanel-${index}`}
			aria-labelledby={`yieldchart-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</li>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `cabprofile-tab-${index}`,
		'aria-controls': `cabprofile-tabpanel-${index}`,
	};
}

const Schema = Yup.object().shape({
	phone: Yup.string().min(5, 'Минимум 5 цифр').max(25, 'Максимум 25 цифр'),
	fullName: Yup.string()
		.min(2, 'Минимум 2 символа')
		.max(50, 'Максимум 50 символов'),
	telegram: Yup.string().min(5, 'Минимум 5 цифр').max(25, 'Максимум 25 цифр'),
});

const SchemaPassword = Yup.object().shape({
	password: Yup.string().required('Это поле обязательное'),
	confirmPassword: Yup.string().when('password', {
		is: val => (val && val.length > 0 ? true : false),
		then: Yup.string().oneOf([Yup.ref('password')], 'Пароли должны совпадать'),
	}),
});

export default function CabinetProfile() {
	const [value, setValue] = useState(0);
	const { userInfo, isSuccessUserInfo } = useUserInfo();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const {
		mutate: profile,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation(
		'profile',
		data => UserServices.userProfile(data.fullName, data.phone),
		{}
	);

	const {
		mutate: password,
		isLoading: isLoadingPassword,
		isError: isErrorPassword,
		error: errorPassword,
		isSuccess: isSuccessPassword,
	} = useMutation(
		'change password',
		data => UserServices.userChangePassword(data.confirmPassword),
		{
			onSuccess() {
				reset(
					{
						password: '',
						confirmPassword: '',
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

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const {
		register: registerPassword,
		handleSubmit: handleSubmitPassword,
		formState: { errors: errorsPassword },
		reset,
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(SchemaPassword),
	});

	return (
		<div className='cabinet'>
		<Helmet>
				<meta name="viewport" content="width=1660" />
			</Helmet>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabprofile'>
							<div className='cabprofile__wrapper'>
								<div className='cabprofile__top'>
									<div className='cabprofile__title cabinet__title_36'>
										Мой профиль
									</div>
									<Tabs
										className='cabprofile__navigation'
										value={value}
										onChange={handleChange}
										aria-label='cabprofile-tabstitles'
									>
										<Tab label='Личные данные' {...a11yProps(0)} />
										<Tab label='Смена пароля' {...a11yProps(1)} />
										{/* <Tab label='Настройка безопасности' {...a11yProps(2)} /> */}
									</Tabs>
								</div>
								<ul className='cabprofile__content'>
									<TabPanel value={value} index={0}>
										{isError && <Alert type='error' text={error.message} />}
										{isSuccess && (
											<Alert type='success' text='Данные успешно изменены.' />
										)}
										{isLoading && <Spinner width='80px' height='80px' />}
										<div className='cabprofile__body perdata'>
											<form
												onSubmit={handleSubmit(profile)}
												className='cabprofile__form perdata__form'
											>
												<div className='cabprofile__form-item'>
													<label htmlFor='name'>ФИО:</label>
													{isSuccessUserInfo && (
														<input
															autoComplete='off'
															type='text'
															name='fullName'
															defaultValue={userInfo.data.fullName}
															{...register('fullName')}
															className='cabprofile__form-input'
														/>
													)}
													{errors.fullName && (
														<p className='text-red-600 mt-1 text-xs'>
															{errors.fullName.message}
														</p>
													)}
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='email'>Почта:</label>
													{isSuccessUserInfo && (
														<input
															disabled
															autoComplete='off'
															type='text'
															name='email'
															defaultValue={userInfo.data.email}
															{...register('email')}
															className='cabprofile__form-input'
														/>
													)}
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='phone'>Номер телефона:</label>
													{isSuccessUserInfo && (
														<input
															autoComplete='off'
															type='text'
															name='phone'
															defaultValue={userInfo.data.phone}
															{...register('phone')}
															className='cabprofile__form-input'
														/>
													)}

													{errors.phone && (
														<p className='text-red-600 mt-1 text-xs'>
															{errors.phone.message}
														</p>
													)}
												</div>
												<button
													type='submit'
													className='cabprofile__form-button button button_gold'
												>
													Сохранить
												</button>
											</form>
										</div>
									</TabPanel>
									<TabPanel value={value} index={1}>
										{isErrorPassword && (
											<Alert type='error' text={errorPassword.message} />
										)}
										{isSuccessPassword && (
											<Alert type='success' text='Пароль успешно изменен' />
										)}
										{isLoadingPassword && (
											<Spinner width='80px' height='80px' />
										)}
										<div className='cabprofile__body changepw'>
											<form
												onSubmit={handleSubmitPassword(password)}
												className='cabprofile__form changepw__form'
											>
												<div className='cabprofile__form-item'>
													<label htmlFor='new'>НОВЫЙ ПАРОЛЬ:</label>
													<input
														autoComplete='off'
														type='password'
														name='password'
														{...registerPassword('password')}
														className='cabprofile__form-input'
													/>
													{errorsPassword.password && (
														<p className='text-red-600 mt-1 text-xs'>
															{errorsPassword.password.message}
														</p>
													)}
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='repnew'>
														ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ:
													</label>
													<input
														autoComplete='off'
														type='password'
														name='confirmPassword'
														{...registerPassword('confirmPassword')}
														className='cabprofile__form-input'
													/>
													{errorsPassword.confirmPassword && (
														<p className='text-red-600 mt-1 text-xs'>
															{errorsPassword.confirmPassword.message}
														</p>
													)}
												</div>
												<button
													type='submit'
													className='cabprofile__form-button button button_gold'
												>
													Сохранить
												</button>
											</form>
										</div>
									</TabPanel>
									{/* <TabPanel value={value} index={2}>
										<div className='cabprofile__body security'>
											<form
												action='#'
												className='cabprofile__form security__form'
											>
												<div className='cabprofile__form-item'>
													<label htmlFor='gmt'>
														ВАШ ЧАСОВОЙ ПОЯС (ОТ GMT):{' '}
													</label>
													<select
														name='gmt'
														className='cabprofile__form-select'
													>
														<option value='1' selected>
															+0:00
														</option>
														<option value='2'>+1:00</option>
														<option value='3'>+2:00</option>
														<option value='4'>+3:00</option>
													</select>
													<div className='cabprofile__form-checkbox checkbox'>
														<input
															id='notificationemail'
															className='checkbox__input'
															type='checkbox'
															value='1'
															name='notificationemail'
														/>
														<label
															htmlFor='notificationemail'
															className='checkbox__label'
														>
															<span className='checkbox__text'>
																Не получать оповещения на e-mail
															</span>
														</label>
													</div>
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='ip'>КОНТРОЛЬ СМЕНЫ IP-АДРЕСЫ: </label>
													<select name='ip' className='cabprofile__form-select'>
														<option value='1' selected>
															по умолчанию
														</option>
														<option value='2'>динамически</option>
													</select>
													<div className='cabprofile__form-checkbox checkbox'>
														<input
															id='ipsession'
															className='checkbox__input'
															type='checkbox'
															value='1'
															name='ipsession'
														/>
														<label
															htmlFor='ipsession'
															className='checkbox__label'
														>
															<span className='checkbox__text'>
																Привязать сессию в IP-адресу
															</span>
														</label>
													</div>
													<div className='cabprofile__form-checkbox checkbox'>
														<input
															id='parsession'
															className='checkbox__input'
															type='checkbox'
															value='1'
															name='parsession'
														/>
														<label
															htmlFor='parsession'
															className='checkbox__label'
														>
															<span className='checkbox__text'>
																Запретить параллельные сессии
															</span>
														</label>
													</div>
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='autoexit'>
														АВТОВЫХОД ЧЕРЕЗ N МИНУТ (0 ПО УМОЛЧАНИЮ):
													</label>
													<select
														name='autoexit'
														className='cabprofile__form-select'
													>
														<option value='1' selected>
															0- по умолчанию
														</option>
														<option value='2'>10</option>
														<option value='3'>30</option>
														<option value='4'>60</option>
													</select>
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='google'>GOOGLE AUTHENTICATOR: </label>
													<div className='cabprofile__form-subtitle'>
														Для активации Google Authenticator используйте ключ:
													</div>
													<input
														disabled
														autoComplete='off'
														type='text'
														name='google'
														value='RWX5C2NQW7WIHLKI'
														className='cabprofile__form-input google-auth'
													/>
												</div>
												<div className='cabprofile__form-item'>
													<label htmlFor='google_input'>
														ВВЕДИТЕ КОД ИЗ ПРИЛОЖЕНИЯ:
													</label>
													<input
														autoComplete='off'
														type='text'
														name='google_input'
														className='cabprofile__form-input'
													/>
												</div>
												<button
													type='submit'
													className='cabprofile__form-button button button_gold'
												>
													Сохранить
												</button>
											</form>
										</div>
									</TabPanel> */}
								</ul>
							</div>
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
		</div>
	);
}
