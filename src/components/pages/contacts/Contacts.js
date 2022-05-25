import { YMaps, Map, Placemark } from 'react-yandex-maps';
// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Media
import {
	contactsPlacemark,
	contactsGeo,
	contactsMail,
	contactsSocial,
	youtube,
	facebook,
	instagram,
	telegram,
	promoMountains,
} from '../../../img/images.js';
// Styles
import './contacts.scss';
import {Helmet} from "react-helmet";

const Schema = Yup.object().shape({
	email: Yup.string()
		.required('Email обязателен')
		.email('Неправильный email формат')
		.max(255),
	theme: Yup.string()
		.required('Тема обязательна')
		.min(5, 'Минимум 5 символов')
		.max(255),
	text: Yup.string()
		.required('Напишите что-нибудь')
		.min(30, 'Минимум 30 символов')
		.max(255),
});

const mapStyle = {
	width: '100%',
	height: '100%',
};

const Contacts = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const sendmail = () => {};

	return (
		<div className='wrapper'>
			<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page contacts'>
				<Breadcrumbs page='Контакты' />
				<div className='contacts__main'>
					<div className='contacts__container'>
						<div className='contacts__main-wrapper'>
							<div className='contacts__main-body'>
								<div className='contacts__main-title title'>
									КОНТАКТНАЯ
									<span className='gold'> ИНФОРМАЦИЯ </span>
								</div>
								<ul className='contacts__main-list'>
									<li>
										<span className='gold'>НАШ АДРЕС</span>
										<span>
											Бишкек, Киргызская республика 720040, бульвар Эркиндик,
											10, оф. 17
										</span>
										<img src={contactsGeo} alt='geo' />
									</li>
									<li>
										<span className='gold'>e-mail</span>
										<span>
											<a href='mailto:u-kg.holding@mail.ru'>
												u-kg.holding@mail.ru
											</a>
											<br></br>
											<a href='mailto:ukg.holding.llc@gmail.com'>
												ukg.holding.llc@gmail.com
											</a>
										</span>
										<img src={contactsMail} alt='email' />
									</li>
									<li>
										<span className='gold'>Социальные сети</span>
										<span className='social'>
											<ul>
												<li>
													<a href='/'>
														<img src={youtube} alt='youtube' />
													</a>
												</li>
												<li>
													<a href='/'>
														<img src={facebook} alt='facebook' />
													</a>
												</li>
												<li>
													<a href='/'>
														<img src={instagram} alt='instagram' />
													</a>
												</li>
												<li>
													<a href='/'>
														<img src={telegram} alt='telegram' />
													</a>
												</li>
											</ul>
										</span>
										<img src={contactsSocial} alt='social' />
									</li>
								</ul>
							</div>
							<div className='contacts__main-map'>
								<div className='contacts__main-map--wrapper'>
									<YMaps>
										<Map
											style={mapStyle}
											defaultState={{
												center: [42.866369, 74.605129],
												zoom: 14,
											}}
											modules={['templateLayoutFactory', 'layout.Image']}
										>
											<Placemark
												defaultGeometry={[42.866369, 74.605129]}
												options={{
													iconLayout: 'default#image',
													iconImageSize: [32, 40],
													iconImageHref: contactsPlacemark,
													iconShape: {
														type: 'Circle',
														coordinates: [16, 20],
														radius: 20,
													},
												}}
											/>
										</Map>
									</YMaps>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='contacts__feedback'>
					<img
						src={promoMountains}
						alt='mountains'
						className='contacts__feedback-bg'
					/>
					<div className='contacts__container'>
						<div className='contacts__feedback-title title'>
							Напишите <span className='gold'>Нам</span>
						</div>
						<div className='contacts__feedback-descr'>
							Если у вас возник вопрос или появилось предложение, свяжитесь с
							нами через<br></br> специальную форму или напишите на почту&nbsp;
							<a href='mailto:support@ukgholding.com'>support@ukgholding.com</a>
						</div>
						<form
							className='contacts__feedback-form'
							onSubmit={handleSubmit(sendmail)}
						>
							<div className='contacts__feedback-form--line'>
								<label for='theme'>Тема</label>
								<input
									autoComplete='off'
									type='text'
									name='theme'
									placeholder='Тема сообщения'
									{...register('theme')}
									className='input contacts__feedback-form--input'
								/>
								{errors.theme && (
									<p className='text-red-600 mt-1 text-xs'>
										{errors.theme.message}
									</p>
								)}
							</div>
							<div className='contacts__feedback-form--line'>
								<label for='email'>Почта</label>
								<input
									autoComplete='off'
									type='text'
									name='email'
									{...register('email')}
									placeholder='Ваша почта'
									className='input contacts__feedback-form--input'
								/>
								{errors.email && (
									<p className='text-red-600 mt-1 text-xs'>
										{errors.email.message}
									</p>
								)}
							</div>
							<div className='contacts__feedback-form--line'>
								<label for='text'>Сообщение</label>
								<textarea
									autoComplete='off'
									name='text'
									{...register('text')}
									placeholder='Текст сообщения'
									className='input contacts__feedback-form--textarea'
								></textarea>
								{errors.text && (
									<p className='text-red-600 mt-1 text-xs'>
										{errors.text.message}
									</p>
								)}
							</div>
							<button className='contacts__feedback-form--button button button_gold'>
								Отправить
							</button>
						</form>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Contacts;
