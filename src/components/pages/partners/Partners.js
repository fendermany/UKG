import { useState } from 'react';

// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Thumbs, EffectFade } from 'swiper';
// Media
import {
	partnersBlock1,
	partnersBlock2Dust,
	partnersBlock2Line,
	partnersBlock2Chevron1d,
	partnersBlock2Chevron1l,
	partnersBlock2Chevron2d,
	partnersBlock2Chevron2l,
	partnersBlock2Chevron3d,
	partnersBlock2Chevron3l,
	partnersBlock2Chevron4,
	partnersBlock3,
	partnersBlock3Mob,
	partnersBlock4,
	partnersBlock5Slide1,
	partnersBlock5Slide2,
	partnersBlock5Slide3,
	partnersBlock5Slide4,
	partnersBlock5Slide5,
	partnersBlock6,
	partnersBlock6Mob,
	partnersBlock8,
	cgWhite,
	sliderPrev,
	sliderNext,
	promoMountains,
} from '../../../img/images.js';
// Styles
import './partners.scss';
import {Helmet} from "react-helmet";

const Partners = () => {
	const [partnersSwiper, setPartnersSwiper] = useState(null);
	const [partnersSwiperThumbs, setPartnersSwiperThumbs] = useState(null);

	return (
		<div className='wrapper'>
		<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page referral'>
				<Breadcrumbs page='Партнерская программа' />
				<div className='referral__promo'>
					<div className='referral__container'>
						<div className='referral__promo-wrapper'>
							<div className='referral__promo-body'>
								<div className='referral__promo-title title'>
									Партнерская
									<br />
									<span className='gold'>Программа</span>
								</div>
								<div className='referral__promo-content'>
									<p>
										U-KG Holding использует Multi Level Marketing, поскольку это
										одна из наиболее эффективных систем в продвижения компаний
										или продуктов по всему миру за счет привлечения партнеров на
										основе механизмов карьерного роста и распределения доходов.
									</p>
									<p>
										Эта система обеспечивает постоянный поток пользователей и
										высокоэффективный маркетинг. Наша партнерская программа
										включает в себя следующие бонусы:
									</p>
								</div>
								<a href='/' className='referral__promo-btn button button_gold'>
									присоединиться
								</a>
							</div>
							<div className='referral__promo-img'>
								<img src={partnersBlock1} alt='Реферальная программа' />
							</div>
						</div>
					</div>
				</div>
				<div className='referral__bonus'>
					<img
						src={partnersBlock2Line}
						alt='line'
						className='referral__bonus-bg'
					/>
					<img
						src={partnersBlock2Dust}
						alt='dust'
						className='referral__bonus-bg2'
					/>
					<div className='referral__container'>
						<div className='referral__bonus-title title'>
							<span className='gold'>Реферальный</span>&nbsp;
							бонус
						</div>
						<div className='referral__bonus-wrapper'>
							<div className='referral__bonus-text'>
								<p>
									Реферальное дерево не имеет ограничения по глубине, процент
									реферального вознаграждения применяется на всю глубину
									структуры.
								</p>

								<p>
									Партнер каждого уровня имеет фиксированный % реферального
									дохода, который зависит от суммы оборота его структуры. Для
									перехода на следующий уровень Партнеру нужно достичь
									командного оборота согласно таблице.
								</p>

								<p>
									Партнеры, которые достигли одинакового уровня и находятся друг
									под другом - реферальное вознаграждение не получают.
								</p>

								<p>
									Процент реферального вознаграждения рассчитывается путем
									разницы между реферальным процентом вышестоящего партнера и
									его рефералом.
								</p>
							</div>
							<div className='referral__bonus-table'>
								<div className='referral__bonus-table--wrapper'>
									<table>
										<thead>
											<tr>
												<th>
													<span className='gold'>Уровень</span>
												</th>
												<th>
													<span className='gold'>
														% реферального
														<br />
														вознаграждения
													</span>
												</th>
												<th>
													<span className='gold'>
														Оборот для
														<br />
														получения ранга
													</span>
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 1</span>
														</span>
													</div>
												</td>
												<td>
													<div>7%</div>
												</td>
												<td>
													<div>
														<span>
															<span className='gold'> - </span>
														</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 2</span>
														</span>
													</div>
												</td>
												<td>
													<div>8%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron1l} alt='1-light' />
														<span>1 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 3</span>
														</span>
													</div>
												</td>
												<td>
													<div>9%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron1d} alt='1-dark' />
														<span>5 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 4</span>
														</span>
													</div>
												</td>
												<td>
													<div>10%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron1l} alt='1-light' />
														<span>10 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 5</span>
														</span>
													</div>
												</td>
												<td>
													<div>11%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron2d} alt='2-dark' />
														<span>25 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 6</span>
														</span>
													</div>
												</td>
												<td>
													<div>12%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron2l} alt='2-light' />
														<span>50 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 7</span>
														</span>
													</div>
												</td>
												<td>
													<div>13%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron3d} alt='3-dark' />
														<span>100 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 8</span>
														</span>
													</div>
												</td>
												<td>
													<div>14%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron3l} alt='3-light' />
														<span>250 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 9</span>
														</span>
													</div>
												</td>
												<td>
													<div>15%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron3d} alt='3-dark' />
														<span>500 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 10</span>
														</span>
													</div>
												</td>
												<td>
													<div>16%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron3l} alt='3-light' />
														<span>1 000 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 11</span>
														</span>
													</div>
												</td>
												<td>
													<div>17%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron3d} alt='3-dark' />
														<span>2 500 000$</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															<span className='gold'>Уровень 12</span>
														</span>
													</div>
												</td>
												<td>
													<div>18%</div>
												</td>
												<td>
													<div>
														<img src={partnersBlock2Chevron4} alt='4-light' />
														<span>5 000 000$</span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__example'>
					<div className='referral__container'>
						<div className='referral__example-wrapper'>
							<div className='referral__example-img'>
								<picture>
									<source
										media='(max-width: 767.98px)'
										srcSet={partnersBlock3Mob}
									/>
									<img src={partnersBlock3} alt='example' />
								</picture>
							</div>
							<div className='referral__example-title gold'>
								РАССМОТРИМ ДАННУЮ
								<br />
								РЕФЕРАЛЬНУЮ ПРОГРАММУ
								<br />
								НА ПРИМЕРЕ:
							</div>
							<div className='referral__example-body'>
								<div className='referral__example-content'>
									<p>
										Вы находитесь на 9 уровне. Процент Вашего реферального
										вознаграждения - 15%.
									</p>

									<p>
										Вы пригласили нового партнера Mary в первую линию. Она
										сделала депозит в размере 10 000$. Ваш реферальный бонус
										составит 15%, что равно 1 500$
									</p>

									<p>
										Ваш партнер Kate 1-го уровня с реферальным процентом 7%
										пригласила партнера в свою первую линию. Её партнерское
										вознаграждение составит 7%, что равно 700$. Вы же получаете
										разницу между своим реферальным процентом, и процентом
										уровня Kate. Что равно 15% - 7% = 8%. Согласно этому, Ваше
										вознаграждение составит 800$
									</p>

									<p>
										Mark также пригласил партнера, который сделал инвестицию 25
										000$. Его реферальный бонус (11%, согласно 5-му уровню)
										составит 2 750$. В свою очередь, Ваше вознаграждение
										составит 15%-11%=4% - 1 000$
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__statsys'>
					<img
						className='referral__statsys-img'
						src={partnersBlock4}
						alt='bg'
					/>
					<div className='referral__container'>
						<div className='referral__statsys-wrapper'>
							<div className='referral__statsys-title title'>
								Система<br/>
								<span className='gold'>статусов</span>
							</div>
							<div className='referral__statsys-body'>
								<div className='referral__statsys-descr gold'>
									В компании работает система статусов для мотивации и поощрения
									лидеров . Принцип её работы достаточно прост:
								</div>
								<div className='referral__statsys-text'>
									<p>
										Система автоматически выставляет людей сверху - вниз, слева
										- направо по 2м направлениям. Одно из которых, всегда
										является командным. Таким образом, Ваши вышестоящие спонсоры
										всегда будут наполнять командное направление своими людьми.
										<br />
										Все что вам останется - пригласить хотя бы одного партнера в
										другое направление, чтобы закрылся цикл и Вы получили свой
										бонус.
									</p>
								</div>
							</div>
							<div className='referral__statsys-table'>
								<table>
									<thead>
										<tr className='gold'>
											<th>Оборот с бинара</th>
											<th>Статус</th>
											<th>подарок</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div>
													<span className='gold'>-</span>
												</div>
											</td>
											<td>
												<div>Manager 1</div>
											</td>
											<td>
												<div>
													<span className='gold'>-</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>1 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 2</div>
											</td>
											<td>
												<div>
													<span className='gold'>Бронзовый значок U-KG</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>5 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 3</div>
											</td>
											<td>
												<div>
													<span className='gold'>Серебряный значок U-KG</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>10 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 4</div>
											</td>
											<td>
												<div>
													<span className='gold'>Золотой значок U-KG</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>25 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 5</div>
											</td>
											<td>
												<div>
													<span className='gold'>
														Золотой значок U-KG с бриллиантом
													</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>50 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 6</div>
											</td>
											<td>
												<div>
													<span className='gold'>Золотая монета cg-white</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>100 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 7</div>
											</td>
											<td>
												<div>
													<span className='gold'>золотой слиток u-kg</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>250 000</span>
													<img src={cgWhite} alt='Manager 2' />
												</div>
											</td>
											<td>
												<div>Manager 8</div>
											</td>
											<td>
												<div>
													<span className='gold'>Золотые часы</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>500 000</span>
													<img src={cgWhite} alt='Manager 9' />
												</div>
											</td>
											<td>
												<div>Manager 9</div>
											</td>
											<td>
												<div>
													<span className='gold'>Перстень с бриллиантом</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>1 000 000</span>
													<img src={cgWhite} alt='Manager 10' />
												</div>
											</td>
											<td>
												<div>Manager 10</div>
											</td>
											<td>
												<div>
													<span className='gold'>
														Автомобиль премиум-класса
													</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>2 500 000</span>
													<img src={cgWhite} alt='Manager 11' />
												</div>
											</td>
											<td>
												<div>Manager 11</div>
											</td>
											<td>
												<div>
													<span className='gold'>Апартаменты у моря</span>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div>
													<span>5 000 000</span>
													<img src={cgWhite} alt='Manager 12' />
												</div>
											</td>
											<td>
												<div>Manager 12</div>
											</td>
											<td>
												<div>
													<span className='gold'>Вилла</span>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__prizes'>
					<div className='referral__container'>
						<div className='referral__prizes-wrapper'>
							<Swiper
								observer
								observeParents
								modules={[A11y, Thumbs, EffectFade, Navigation]}
								thumbs={{ swiper: partnersSwiperThumbs }}
								onSwiper={setPartnersSwiper}
								slidesPerView={1}
								watchSlidesProgress
								spaceBetween={22}
								speed={0}
								slideToClickedSlide
								className='referral__prizes-main'
								wrapperTag='ul'
								effect='fade'
								navigation={{
									prevEl: '.referral__prizes-main--prev',
									nextEl: '.referral__prizes-main--next',
								}}
								onSlideChangeTransitionStart={() => {
									partnersSwiperThumbs.slideTo(partnersSwiper.activeIndex);
								}}
							>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='referral__prizes-main--body'>
										<div className='referral__prizes-main--title'>
											Автомобиль
										</div>
										<div className='referral__prizes-main--descr'>
											В результате чего мы получаем слитки до 1 кг с чистотой
											99.99%.
										</div>
										<a
											href='/'
											className='referral__prizes-main--btn button button_gold'
										>
											Производство онлайн
										</a>
									</div>
									<div className='referral__prizes-main--img'>
										<img src={partnersBlock5Slide1} alt='slide1' />
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='referral__prizes-main--body'>
										<div className='referral__prizes-main--title'>
											Автомобиль
										</div>
										<div className='referral__prizes-main--descr'>
											В результате чего мы получаем слитки до 1 кг с чистотой
											99.99%.
										</div>
										<a
											href='/'
											className='referral__prizes-main--btn button button_gold'
										>
											Производство онлайн
										</a>
									</div>
									<div className='referral__prizes-main--img'>
										<img src={partnersBlock5Slide2} alt='slide2' />
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='referral__prizes-main--body'>
										<div className='referral__prizes-main--title'>
											Автомобиль
										</div>
										<div className='referral__prizes-main--descr'>
											В результате чего мы получаем слитки до 1 кг с чистотой
											99.99%.
										</div>
										<a
											href='/'
											className='referral__prizes-main--btn button button_gold'
										>
											Производство онлайн
										</a>
									</div>
									<div className='referral__prizes-main--img'>
										<img src={partnersBlock5Slide3} alt='slide3' />
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='referral__prizes-main--body'>
										<div className='referral__prizes-main--title'>
											Автомобиль
										</div>
										<div className='referral__prizes-main--descr'>
											В результате чего мы получаем слитки до 1 кг с чистотой
											99.99%.
										</div>
										<a
											href='/'
											className='referral__prizes-main--btn button button_gold'
										>
											Производство онлайн
										</a>
									</div>
									<div className='referral__prizes-main--img'>
										<img src={partnersBlock5Slide4} alt='slide4' />
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='referral__prizes-main--body'>
										<div className='referral__prizes-main--title'>
											Автомобиль
										</div>
										<div className='referral__prizes-main--descr'>
											В результате чего мы получаем слитки до 1 кг с чистотой
											99.99%.
										</div>
										<a
											href='/'
											className='referral__prizes-main--btn button button_gold'
										>
											Производство онлайн
										</a>
									</div>
									<div className='referral__prizes-main--img'>
										<img src={partnersBlock5Slide5} alt='slide5' />
									</div>
								</SwiperSlide>
							</Swiper>
							<div className='referral__prizes-inner'>
								<div className='referral__prizes-main--prev'>
									<img src={sliderPrev} alt='slider-prev' />
								</div>
								<div className='referral__prizes-main--next'>
									<img src={sliderNext} alt='slider-next' />
								</div>
								<Swiper
									modules={[A11y, Thumbs]}
									observer
									observeParents
									watchSlidesProgress
									onSwiper={setPartnersSwiperThumbs}
									slidesPerView={5}
									speed={0}
									spaceBetween={26}
									className='referral__prizes-thumbs'
									wrapperTag='ul'
									breakpoints={{
										0: {
											slidesPerView: 2,
											spaceBetween: 10,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 15,
										},
										992: {
											slidesPerView: 4,
											spaceBetween: 20,
										},
										1170: {
											slidesPerView: 5,
											spaceBetween: 27,
										},
									}}
									onSlideChangeTransitionStart={() => {
										partnersSwiper.slideTo(partnersSwiperThumbs.activeIndex);
									}}
								>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div>
											<svg
												width='91'
												height='31'
												viewBox='0 0 91 31'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M65.7059 2.35391H65.6471V2.41273V5.83482V5.89364H65.7059H65.9843H66.0431V5.83482V4.20944H68.0657V5.83482V5.89364H68.1246H68.3967H68.4556V5.83482V2.41273V2.35391H68.3967H68.1246H68.0657V2.41273V3.84352H66.0369V2.41273V2.35391H65.9781H65.7059Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M70.809 2.30751C70.2612 2.30756 69.8378 2.51201 69.5521 2.84467C69.2674 3.17622 69.1235 3.6303 69.1235 4.12434C69.1235 4.62554 69.2738 5.07945 69.5567 5.40903C69.8405 5.73959 70.2545 5.94117 70.772 5.94117C71.3394 5.94117 71.7617 5.72081 72.041 5.37675C72.3189 5.03431 72.4515 4.574 72.4515 4.0975C72.4515 3.58598 72.2964 3.13677 72.0115 2.81545C71.7259 2.4934 71.3135 2.30409 70.809 2.30751ZM70.809 2.30751C70.8089 2.30751 70.8088 2.30751 70.8087 2.30751L70.8092 2.36633V2.30751C70.8091 2.30751 70.809 2.30751 70.809 2.30751ZM70.7906 5.58197C70.3798 5.58197 70.0687 5.40489 69.859 5.13422C69.648 4.86205 69.538 4.49296 69.538 4.11092C69.538 3.73091 69.6363 3.36901 69.842 3.10355C70.046 2.8401 70.3595 2.66671 70.803 2.66671C71.2151 2.66671 71.5228 2.83312 71.7288 3.09314C71.9361 3.35475 72.0432 3.71501 72.0432 4.10421C72.0432 4.50182 71.9476 4.87218 71.7449 5.1416C71.544 5.40872 71.2339 5.58197 70.7906 5.58197Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M73.1783 2.3545H73.1194V2.41333V5.83541V5.89423H73.1783H75.3185H75.3665L75.3762 5.84721L75.4257 5.60565L75.4401 5.53503H75.368H73.5093V2.41333V2.3545H73.4504H73.1783Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M75.9186 2.3545H75.8598V2.41333V5.83541V5.89423H75.9186H77.0939C77.6097 5.89423 78.0416 5.70913 78.3444 5.38938C78.647 5.06995 78.8168 4.62028 78.8168 4.09753C78.8168 3.57089 78.642 3.13414 78.3372 2.82888C78.0324 2.52367 77.6023 2.3545 77.1001 2.3545H75.9186ZM77.0568 5.52831H76.2558V2.71371H77.0568C77.5334 2.71371 77.8673 2.8821 78.0829 3.13584C78.2998 3.39107 78.4022 3.7387 78.4022 4.10424C78.4022 4.51676 78.289 4.87228 78.0674 5.12385C77.8467 5.3743 77.5128 5.52831 77.0568 5.52831Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M79.8809 2.41333V2.3545H79.8221H79.5499H79.4911V2.41333V5.83541V5.89423H79.5499H79.8221H79.8809V5.83541V2.41333Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M80.8086 5.83541V5.89423H80.8675H81.1458H81.2046V5.83541V4.24515C81.2046 4.1381 81.2048 4.03471 81.205 3.93458C81.2057 3.53705 81.2063 3.19106 81.195 2.87228C81.3575 3.11518 81.6324 3.52782 81.9345 3.98128C82.3897 4.66463 82.9067 5.44068 83.194 5.86821L83.2115 5.89423H83.2428H83.6202H83.679V5.83541V2.41333V2.3545H83.6202H83.3418H83.283V2.41333V3.96333C83.283 4.04367 83.2828 4.12297 83.2827 4.20135C83.2821 4.58705 83.2815 4.95057 83.2966 5.30748C82.9468 4.76417 82.0551 3.45394 81.5136 2.65832C81.4441 2.55626 81.3804 2.46267 81.3244 2.38025L81.3069 2.3545H81.2757H80.8675H80.8086V2.41333V5.83541Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M87.0925 5.86004L87.1083 5.89424H87.146H87.3748H87.3872H87.446V5.83542V4.02373V3.9649H87.3872H85.9707H85.9118V4.02373V4.26528V4.32411H85.9707H87.0624C87.0603 4.69052 86.9966 4.99707 86.8359 5.21226C86.6752 5.42751 86.4091 5.56187 85.9768 5.56187C85.5587 5.56187 85.2609 5.39403 85.0658 5.13491C84.8692 4.87365 84.7738 4.51488 84.7738 4.13108C84.7738 3.70653 84.874 3.33835 85.0768 3.07768C85.278 2.81913 85.5849 2.66004 86.014 2.66004C86.3141 2.66004 86.544 2.72993 86.7166 2.85367C86.889 2.97732 87.0094 3.15854 87.0838 3.39079L87.0968 3.43168H87.1398H87.412H87.4821L87.4699 3.36263C87.4117 3.03327 87.2479 2.76467 86.9969 2.57908C86.7466 2.39393 86.4134 2.29412 86.0201 2.29412C85.4817 2.29412 85.0626 2.49348 84.7791 2.82823C84.4966 3.16175 84.353 3.62428 84.353 4.1445C84.353 4.64078 84.4855 5.08651 84.7548 5.40928C85.0254 5.73348 85.4292 5.92779 85.9583 5.92779C86.3391 5.92779 86.6058 5.83815 86.7954 5.71441C86.9075 5.64119 86.9911 5.55706 87.0547 5.47518C87.0573 5.55472 87.0604 5.62114 87.0641 5.67503C87.0672 5.72099 87.0708 5.75864 87.075 5.7879C87.0788 5.81502 87.0839 5.8413 87.0925 5.86004Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.117647'
												/>
												<path
													d='M82.4434 29.4734H46.337L36.6257 19.762C36.6257 20.426 36.6257 20.509 36.6257 23.4971C36.6257 26.4853 34.8826 29.4734 28.6573 29.4734C22.4321 29.4734 14.5635 29.4734 8.98565 29.4734C1.76429 29.4734 0.851259 23.8292 1.01727 21.007V0.837248H9.98162C10.6657 0.837248 11.1281 0.837248 11.1281 0.837248C11.1281 0.837248 11.2071 18.7162 11.129 19.513C11.0508 20.3098 11.8256 20.509 12.2227 20.509C16.2069 20.509 24.8479 20.509 25.6692 20.509C26.7797 20.509 26.6653 19.762 26.6653 19.513C26.6653 14.1178 26.6653 0.588246 26.6653 0.588246L27.6613 0.588238C29.9024 0.588238 34.6336 0.588238 35.6296 0.588238C36.6257 0.588238 37.1237 0.588256 37.1237 0.588256V7.80952L45.839 0.588238C48.8271 0.588238 53.8275 0.588238 54.8235 0.588238C55.8196 0.588238 56.8823 0.588234 57.3136 0.588234L42.8509 14.2838L55.9278 23.4971'
													stroke='#B9B9B9'
													strokeWidth='1.17647'
												/>
												<path
													d='M60.7059 26.4706C60.7059 26.4706 58.1058 26.2469 55.3667 23.7568L55.3666 22.3529C56.1137 22.851 55.345 21.947 56.5882 23.5294C57.8314 25.1119 60.7059 26.4706 60.7059 26.4706Z'
													fill='#B9B9B9'
												/>
												<path
													fillRule='evenodd'
													clipRule='evenodd'
													d='M56.2941 7.16004V7.15949L56.2942 7.15842C56.2946 7.15001 56.2954 7.13572 56.2969 7.11595C56.2998 7.07639 56.3052 7.01502 56.3148 6.93496C56.3342 6.77465 56.3704 6.54062 56.4376 6.25764C56.5725 5.68986 56.8293 4.93661 57.3145 4.18696C58.2633 2.72125 60.1428 1.17647 63.9818 1.17647H64.0292H64.0768H64.1246H64.1726H64.2209H64.2694H64.3182H64.3671H64.4163H64.4658H64.5154H64.5652H64.6153H64.6656H64.7161H64.7669H64.8178H64.869H64.9203H64.9719H65.0237H65.0757H65.1279H65.1804H65.233H65.2858H65.3388H65.392H65.4455H65.4991H65.5529H65.6069H65.6611H65.7155H65.7701H65.8249H65.8799H65.9351H65.9904H66.046H66.1017H66.1576H66.2137H66.2699H66.3264H66.383H66.4398H66.4968H66.5539H66.6112H66.6687H66.7264H66.7842H66.8422H66.9004H66.9587H67.0172H67.0759H67.1347H67.1937H67.2528H67.3121H67.3715H67.4311H67.4909H67.5508H67.6109H67.6711H67.7314H67.7919H67.8526H67.9134H67.9743H68.0354H68.0966H68.158H68.2195H68.2811H68.3429H68.4048H68.4668H68.529H68.5913H68.6537H68.7163H68.779H68.8418H68.9047H68.9678H69.031H69.0943H69.1577H69.2212H69.2849H69.3486H69.4125H69.4765H69.5406H69.6048H69.6691H69.7336H69.7981H69.8627H69.9275H69.9923H70.0573H70.1223H70.1875H70.2527H70.3181H70.3835H70.449H70.5146H70.5804H70.6462H70.712H70.778H70.8441H70.9102H70.9764H71.0428H71.1091H71.1756H71.2422H71.3088H71.3755H71.4423H71.5091H71.576H71.643H71.7101H71.7772H71.8444H71.9116H71.979H72.0463H72.1138H72.1813H72.2489H72.3165H72.3842H72.4519H72.5197H72.5875H72.6554H72.7233H72.7913H72.8594H72.9274H72.9956H73.0637H73.1319H73.2002H73.2685H73.3368H73.4052H73.4736H73.542H73.6105H73.679H73.7475H73.8161H73.8847H73.9533H74.0219H74.0906H74.1593H74.228H74.2967H74.3655H74.4343H74.503H74.5718H74.6407H74.7095H74.7783H74.8472H74.916H74.9849H75.0538H75.1226H75.1915H75.2604H75.3293H75.3982H75.467H75.5359H75.6048H75.6737H75.7425H75.8114H75.8802H75.9491H76.0179H76.0867H76.1555H76.2243H76.293H76.3618H76.4305H76.4992H76.5679H76.6366H76.7052H76.7738H76.8424H76.911H76.9795H77.048H77.1165H77.1849H77.2533H77.3216H77.39H77.4583H77.5265H77.5947H77.6629H77.731H77.7991H77.8671H77.9351H78.003H78.0709H78.1387H78.2065H78.2742H78.3419H78.4095H78.477H78.5445H78.612H78.6793H78.7466H78.8139H78.8811H78.9482H79.0152H79.0822H79.1491H79.2159H79.2827H79.3494H79.416H79.4825H79.549H79.6154H79.6817H79.7479H79.814H79.8801H79.946H80.0119H80.0777H80.1434H80.209H80.2745H80.3399H80.4052H80.4705H80.5356H80.6006H80.6656H80.7304H80.7951H80.8597H80.9243H80.9887H81.053H81.1172H81.1813H81.2452H81.3091H81.3728H81.4365H81.5H81.5634H81.6267H81.6898H81.7529H81.8158H81.8786H81.9412H82.0038H82.0662H82.1285H82.1906H82.2526H82.3145H82.3762H82.4379H82.4993H82.5607H82.6219H82.6829H82.7438H82.8046H82.8652H82.9257H82.9861H83.0462H83.1063H83.1662H83.2259H83.2855H83.3449H83.4042H83.4633H83.5222H83.581H83.6396H83.6981H83.7564H83.8146H83.8725H83.9303H83.988H84.0454H84.1027H84.1598H84.2168H84.2736H84.3301H84.3866H84.4428H84.4989H84.5547H84.6104H84.6659H84.7212H84.7764H84.8313H84.8861H84.9406H84.995H85.0492H85.1032H85.157H85.2106H85.2639H85.3171H85.3701H85.4229H85.4755H85.5279H85.5801H85.632H85.6838H85.7353H85.7867H85.8378H85.8887H85.9394H85.9899H86.0401H86.0902H86.14H86.1896H86.239H86.2881H86.3371H86.3858H86.4342H86.4825H86.5305H86.5783H86.6258H86.6732H86.7202H86.7671H86.8137H86.86H86.9062H86.9521H86.9977H87.0431H87.0882H87.1331H87.1778H87.2222H87.2663H87.3102H87.3539H87.3973H87.4404H87.4833H87.5259H87.5683H87.6104H87.6522H87.6938H87.7351H87.7761H87.8169H87.8574H87.8976H87.9376H87.9773H88.0167H88.0559H88.0947H88.1333H88.1716H88.2096H88.2474H88.2849H88.322H88.3589H88.3955H88.4318H88.4679H88.5036H88.5391H88.5742H88.6091H88.6436H88.6779H88.7119H88.7455H88.7789H88.812H88.8447H88.8772H88.9093H88.9412H88.9727H89.0039H89.0348H89.0654H89.0957H89.1257H89.1554H89.1847H89.2137H89.2424H89.2708H89.2989H89.3266H89.354H89.3811H89.4078H89.4342H89.4603H89.4861H89.5115H89.5366H89.5614H89.5858H89.6099H89.6336H89.657H89.6801H89.7028H89.7252H89.7472H89.7689H89.7902H89.8016V6.90901H65.4878C65.4673 6.90694 65.4408 6.90462 65.4092 6.90256C65.3398 6.89804 65.2442 6.89469 65.1308 6.89835C64.908 6.90555 64.596 6.94038 64.274 7.06121C63.9477 7.18364 63.5978 7.40007 63.3352 7.77392C63.0719 8.14869 62.931 8.63237 62.9383 9.22822C62.9382 9.48358 62.9316 12.4558 62.9249 15.3731L62.9157 19.3754L62.9127 20.6841L62.9118 21.0497L62.9116 21.146L62.9115 21.1706L62.9115 21.1769L62.9115 21.1784L62.9115 21.1788C62.9115 21.1789 62.9115 21.179 63.4997 21.1803L62.9115 21.179L62.9111 21.3311L62.9846 21.4643L63.4997 21.1803C62.9846 21.4643 62.9847 21.4646 62.9849 21.4648L62.9852 21.4653L62.9858 21.4664L62.9871 21.4689L62.9906 21.4749L63 21.4912C63.0075 21.5038 63.0173 21.5199 63.0296 21.5391C63.0542 21.5775 63.0887 21.6284 63.1335 21.6875C63.2227 21.8052 63.3557 21.9594 63.5363 22.1135C63.9008 22.4246 64.4666 22.7401 65.2406 22.7401H80.1856H80.7418C80.762 22.7422 80.7881 22.7445 80.8193 22.7467C80.8881 22.7515 80.9832 22.7554 81.0961 22.7531C81.3178 22.7486 81.6286 22.7196 81.9497 22.6117C82.2731 22.5031 82.63 22.3062 82.9019 21.9527C83.1781 21.5938 83.3264 21.1258 83.3181 20.5511C83.3048 19.6257 83.3048 18.301 83.3081 17.2047C83.3098 16.6572 83.3123 16.1678 83.3144 15.8152L83.3171 15.399L83.3179 15.2865L83.3181 15.2573L83.3181 15.2499L83.3181 15.2481L83.3182 15.2476L83.3182 15.2475L82.7299 15.2429L83.3182 15.2475L83.3228 14.6532L82.7285 14.6547L72.3104 14.6802V10.6224H89.7749V21.4772V21.5206L89.7811 21.5624L89.7811 21.5627L89.7812 21.5631L89.7812 21.5636L89.7813 21.5641L89.7828 21.5756C89.7836 21.5814 89.7846 21.5891 89.7857 21.5985C89.7868 21.6076 89.788 21.6182 89.7893 21.6305C89.7948 21.6806 89.8022 21.7572 89.8087 21.8565C89.8217 22.0553 89.831 22.3432 89.8152 22.6902C89.7834 23.3877 89.6509 24.3039 89.2576 25.2104C88.8672 26.1106 88.2201 27.002 87.1472 27.6733C86.0716 28.3463 84.527 28.8235 82.3014 28.8235L66.8824 28.8235L65.1393 28.8235H65.1391H65.1389H65.1386H65.1384H65.1382H65.1379H65.1376H65.1373H65.1369H65.1365H65.1361H65.1357H65.1352H65.1347H65.1342H65.1338H65.1336H65.1333H65.1331H65.1328H65.1324H65.1322H65.1318H65.1316H65.1311H65.1304H65.1297H65.1289H65.1283H65.1281H65.1276H65.1272H65.1268H65.1264H65.1261H65.1255H65.1253H65.1245H65.1236H65.1228H65.1226H65.122H65.1216H65.1211H65.1205H65.1202H65.1194H65.1192H65.1183H65.1173H65.1171H65.1164H65.1159H65.1154H65.1147H65.1143H65.1134H65.1121H65.1112H65.1108H65.1101H65.1094H65.109H65.108H65.1079H65.1066H65.1055H65.1051H65.1044H65.1036H65.1032H65.1021H65.1007H65.1005H65.0995H65.0989H65.0982H65.0972H65.097H65.0956H65.0944H65.0938H65.0931H65.0921H65.0917H65.0903H65.089H65.0885H65.0876H65.0866H65.0862H65.0848H65.0847H65.0834H65.0827H65.082H65.0808H65.0805H65.079H65.0787H65.0776H65.0767H65.0761H65.0746H65.0731H65.0725H65.0715H65.0703H65.07H65.0684H65.0681H65.0669H65.0658H65.0653H65.0637H65.0635H65.0621H65.0612H65.0605H65.0589H65.0572H65.0565H65.0556H65.054H65.0523H65.0515H65.0506H65.049H65.0472H65.0464H65.0455H65.0438H65.0421H65.0412H65.0404H65.0385H65.0369H65.0358H65.0351H65.0333H65.033H65.0316H65.0302H65.0298H65.028H65.0273H65.0262H65.0245H65.0226H65.0215H65.0207H65.0189H65.0185H65.0171H65.0155H65.0152H65.0134H65.0125H65.0115H65.0097H65.0094H65.0078H65.0062H65.0059H65.0041H65.003H65.0022H65.0003H64.9998H64.9984H64.9965H64.9946H64.9932H64.9927H64.9908H64.9898H64.9889H64.9869H64.9864H64.985H64.983H64.9812H64.9795H64.9792H64.9773H64.9759H64.9753H64.9734H64.9724H64.9715H64.9695H64.9687H64.9676H64.9656H64.9651H64.9636H64.9617H64.9613H64.9597H64.9578H64.9576H64.9558H64.9538H64.9519H64.9499H64.948H64.946C64.9433 28.8235 64.9405 28.8235 64.9378 28.8235H59.2205C60.6941 29.5575 62.5444 29.976 64.7527 29.999L64.7527 30H64.7528H64.7528H64.7528H64.7529H64.7529H64.753H64.753H64.7531H64.7532H64.7532H64.7533H64.7534H64.7535H64.7536H64.7537H64.7539H64.754H64.7541H64.7542H64.7544H64.7545H64.7548H64.7548H64.7551H64.7552H64.7555H64.7555H64.7559H64.7559H64.7563H64.7568H64.7568H64.7572H64.7573H64.7577H64.7578H64.7582H64.7584H64.7587H64.759H64.7593H64.7596H64.7598H64.7602H64.7604H64.7609H64.761H64.7616H64.7617H64.7623H64.7624H64.763H64.7631H64.7637H64.764H64.7644H64.7648H64.7652H64.7657H64.766H64.7666H64.7667H64.7675H64.7675H64.7684H64.7684H64.7692H64.7694H64.7701H64.7705H64.771H64.7715H64.7719H64.7726H64.7728H64.7737H64.7738H64.7747H64.7749H64.7757H64.7761H64.7767H64.7773H64.7777H64.7786H64.7787H64.7798H64.7799H64.7809H64.7812H64.7819H64.7826H64.7831H64.784H64.7842H64.7853H64.7854H64.7865H64.7869H64.7877H64.7884H64.7889H64.79H64.7901H64.7913H64.7915H64.7925H64.7931H64.7938H64.7948H64.7951H64.7964H64.7965H64.7977H64.7982H64.799H64.8H64.8003H64.8017H64.8017H64.803H64.8036H64.8044H64.8054H64.8058H64.8072H64.8074H64.8086H64.8093H64.8101H64.8113H64.8115H64.813H64.8133H64.8145H64.8153H64.8159H64.8175H64.819H64.8196H64.8205H64.8217H64.822H64.8236H64.8239H64.8252H64.8262H64.8267H64.8283H64.8285H64.8299H64.8308H64.8315H64.8331H64.8332H64.8348H64.8356H64.8364H64.838H64.8381H64.8397H64.8405H64.8414H64.843H64.8431H64.8448H64.8456H64.8465H64.8482H64.8482H64.8499H64.8508H64.8517H64.8534H64.8535H64.8552H64.8563H64.8569H64.8587H64.859H64.8605H64.8618H64.8623H64.864H64.8647H64.8658H64.8676H64.8677H64.8695H64.8705H64.8713H64.8731H64.8735H64.875H64.8765H64.8768H64.8786H64.8796H64.8805H64.8824H64.8827H64.8842H64.8858H64.8861H64.888H64.889H64.8899H64.8917H64.8922H64.8936H64.8955H64.8955H64.8974H64.8988H64.8994H64.9013H64.9022H64.9032H64.9051H64.9056H64.907H64.9089H64.9091H64.9109H64.9125H64.9128H64.9148H64.9161H64.9167H64.9186H64.9197H64.9206H64.9225H64.9233H64.9245H64.9264H64.927H64.9284H64.9303H64.9307H64.9323H64.9343H64.9345H64.9362H64.9382H64.9383H64.9401H64.9421H64.9421H64.9441H64.946H64.948H64.9499H64.9519H64.9539H64.9558H64.9576H64.9578H64.9597H64.9613H64.9617H64.9636H64.9651H64.9656H64.9676H64.9687H64.9695H64.9715H64.9724H64.9734H64.9753H64.9759H64.9773H64.9792H64.9795H64.9812H64.9831H64.985H64.9864H64.9869H64.9889H64.9898H64.9908H64.9927H64.9932H64.9946H64.9965H64.9984H64.9998H65.0003H65.0022H65.003H65.0041H65.0059H65.0062H65.0078H65.0094H65.0097H65.0115H65.0125H65.0134H65.0152H65.0155H65.0171H65.0185H65.0189H65.0207H65.0215H65.0226H65.0244H65.0262H65.0273H65.028H65.0298H65.0302H65.0316H65.033H65.0333H65.0351H65.0358H65.0369H65.0386H65.0404H65.0412H65.0421H65.0438H65.0455H65.0464H65.0472H65.0489H65.0506H65.0515H65.0523H65.054H65.0556H65.0565H65.0572H65.0589H65.0605H65.0612H65.0621H65.0635H65.0637H65.0653H65.0658H65.0669H65.0681H65.0684H65.07H65.0703H65.0715H65.0725H65.0731H65.0746H65.0761H65.0767H65.0776H65.0787H65.079H65.0805H65.0808H65.082H65.0827H65.0834H65.0847H65.0848H65.0862H65.0866H65.0876H65.0885H65.089H65.0904H65.0917H65.0921H65.0931H65.0938H65.0944H65.0957H65.097H65.0972H65.0982H65.0989H65.0995H65.1005H65.1007H65.102H65.1032H65.1036H65.1044H65.1051H65.1055H65.1067H65.1079H65.108H65.109H65.1094H65.1101H65.1108H65.1112H65.1122H65.1133H65.1143H65.1147H65.1154H65.1159H65.1164H65.1171H65.1173H65.1183H65.1192H65.1194H65.1202H65.1205H65.1211H65.1216H65.122H65.1226H65.1228H65.1237H65.1245H65.1253H65.1255H65.1261H65.1264H65.1268H65.1272H65.1276H65.1281H65.1283H65.129H65.1297H65.1303H65.131H65.1316H65.1318H65.1322H65.1324H65.1328H65.1331H65.1333H65.1336H65.1338H65.1343H65.1348H65.1353H65.1357H65.1361H65.1365H65.1369H65.1372H65.1375H65.1378H65.1381H65.1383H65.1385H65.1387H65.1389H65.139H65.1392H82.3014C84.6958 30 86.469 29.4854 87.7712 28.6707C89.0762 27.8542 89.867 26.762 90.337 25.6786C90.8041 24.6015 90.9545 23.534 90.9905 22.7438C91.0086 22.3469 90.998 22.0149 90.9827 21.7798C90.975 21.6621 90.966 21.5682 90.9588 21.5022L90.9542 21.4619L90.9513 21.4383V10.0341V9.44591H90.3631H71.7221H71.1339V10.0341V15.2699V15.8596L71.7236 15.8581L82.1378 15.8326C82.1357 16.184 82.1333 16.6647 82.1317 17.2011C82.1283 18.2976 82.1283 19.6313 82.1418 20.5681C82.1469 20.9245 82.0574 21.1211 81.9696 21.2353C81.8774 21.355 81.7438 21.4398 81.5751 21.4965C81.4041 21.5539 81.2211 21.5738 81.072 21.5769C80.9995 21.5784 80.9399 21.5758 80.9004 21.573C80.8897 21.5723 80.8806 21.5715 80.8732 21.5709L80.8584 21.5695L80.8524 21.5688L80.8515 21.5687L80.8513 21.5687L80.8511 21.5687L80.8146 21.5637H80.7748H80.1856H65.2406C64.8094 21.5637 64.5048 21.3934 64.3001 21.2187C64.2078 21.1399 64.1373 21.061 64.0884 20.9992L64.0891 20.6868L64.0922 19.3781L64.1014 15.3758C64.1081 12.445 64.1148 9.45479 64.1148 9.2245H64.1148L64.1147 9.21661C64.1093 8.81581 64.2027 8.58567 64.2979 8.45022C64.3943 8.31298 64.5281 8.22242 64.6873 8.16268C64.8508 8.10134 65.0258 8.07883 65.1688 8.07421C65.2383 8.07197 65.2952 8.0741 65.3327 8.07654C65.3513 8.07775 65.3647 8.07902 65.3721 8.07978L65.3777 8.08039L65.4145 8.08548H65.4549H90.3899H90.9781V7.49725V0.588235V0H90.3899V0.588235C90.3899 0 90.3898 0 90.3897 0H90.389H90.388H90.3865H90.3846H90.3824H90.3797H90.3765H90.373H90.3691H90.3647H90.36H90.3549H90.3493H90.3433H90.337H90.3302H90.3231H90.3155H90.3076H90.2993H90.2905H90.2814H90.2719H90.262H90.2517H90.241H90.2299H90.2185H90.2067H90.1945H90.1819H90.1689H90.1555H90.1418H90.1277H90.1132H90.0984H90.0832H90.0676H90.0516H90.0353H90.0186H90.0016H89.9841H89.9664H89.9482H89.9297H89.9109H89.8916H89.8721H89.8521H89.8319H89.8112H89.7902H89.7689H89.7472H89.7252H89.7028H89.6801H89.657H89.6336H89.6099H89.5858H89.5614H89.5366H89.5115H89.4861H89.4603H89.4342H89.4078H89.3811H89.354H89.3266H89.2989H89.2708H89.2424H89.2137H89.1847H89.1554H89.1257H89.0957H89.0654H89.0348H89.0039H88.9727H88.9412H88.9093H88.8772H88.8447H88.812H88.7789H88.7455H88.7119H88.6779H88.6436H88.6091H88.5742H88.5391H88.5036H88.4679H88.4318H88.3955H88.3589H88.322H88.2849H88.2474H88.2096H88.1716H88.1333H88.0947H88.0559H88.0167H87.9773H87.9376H87.8976H87.8574H87.8169H87.7761H87.7351H87.6938H87.6522H87.6104H87.5683H87.5259H87.4833H87.4404H87.3973H87.3539H87.3102H87.2663H87.2222H87.1778H87.1331H87.0882H87.0431H86.9977H86.9521H86.9062H86.86H86.8137H86.7671H86.7202H86.6732H86.6258H86.5783H86.5305H86.4825H86.4342H86.3858H86.3371H86.2881H86.239H86.1896H86.14H86.0902H86.0401H85.9899H85.9394H85.8887H85.8378H85.7867H85.7353H85.6838H85.632H85.5801H85.5279H85.4755H85.4229H85.3701H85.3171H85.2639H85.2106H85.157H85.1032H85.0492H84.995H84.9406H84.8861H84.8313H84.7764H84.7212H84.6659H84.6104H84.5547H84.4989H84.4428H84.3866H84.3301H84.2736H84.2168H84.1598H84.1027H84.0454H83.988H83.9303H83.8725H83.8146H83.7564H83.6981H83.6396H83.581H83.5222H83.4633H83.4042H83.3449H83.2855H83.2259H83.1662H83.1063H83.0462H82.9861H82.9257H82.8652H82.8046H82.7438H82.6829H82.6219H82.5607H82.4993H82.4379H82.3762H82.3145H82.2526H82.1906H82.1285H82.0662H82.0038H81.9412H81.8786H81.8158H81.7529H81.6898H81.6267H81.5634H81.5H81.4365H81.3728H81.3091H81.2452H81.1813H81.1172H81.053H80.9887H80.9243H80.8597H80.7951H80.7304H80.6656H80.6006H80.5356H80.4705H80.4052H80.3399H80.2745H80.209H80.1434H80.0777H80.0119H79.946H79.8801H79.814H79.7479H79.6817H79.6154H79.549H79.4825H79.416H79.3494H79.2827H79.2159H79.1491H79.0822H79.0152H78.9482H78.8811H78.8139H78.7466H78.6793H78.612H78.5445H78.477H78.4095H78.3419H78.2742H78.2065H78.1387H78.0709H78.003H77.9351H77.8671H77.7991H77.731H77.6629H77.5947H77.5265H77.4583H77.39H77.3216H77.2533H77.1849H77.1165H77.048H76.9795H76.911H76.8424H76.7738H76.7052H76.6366H76.5679H76.4992H76.4305H76.3618H76.293H76.2243H76.1555H76.0867H76.0179H75.9491H75.8802H75.8114H75.7425H75.6737H75.6048H75.5359H75.467H75.3982H75.3293H75.2604H75.1915H75.1226H75.0538H74.9849H74.916H74.8472H74.7783H74.7095H74.6407H74.5718H74.503H74.4343H74.3655H74.2967H74.228H74.1593H74.0906H74.0219H73.9533H73.8847H73.8161H73.7475H73.679H73.6105H73.542H73.4736H73.4052H73.3368H73.2685H73.2002H73.1319H73.0637H72.9956H72.9274H72.8594H72.7913H72.7233H72.6554H72.5875H72.5197H72.4519H72.3842H72.3165H72.2489H72.1813H72.1138H72.0463H71.979H71.9116H71.8444H71.7772H71.7101H71.643H71.576H71.5091H71.4423H71.3755H71.3088H71.2422H71.1756H71.1091H71.0428H70.9764H70.9102H70.8441H70.778H70.712H70.6462H70.5804H70.5146H70.449H70.3835H70.3181H70.2527H70.1875H70.1223H70.0573H69.9923H69.9275H69.8627H69.7981H69.7336H69.6691H69.6048H69.5406H69.4765H69.4125H69.3486H69.2849H69.2212H69.1577H69.0943H69.031H68.9678H68.9047H68.8418H68.779H68.7163H68.6537H68.5913H68.529H68.4668H68.4048H68.3429H68.2811H68.2195H68.158H68.0966H68.0354H67.9743H67.9134H67.8526H67.7919H67.7314H67.6711H67.6109H67.5508H67.4909H67.4311H67.3715H67.3121H67.2528H67.1937H67.1347H67.0759H67.0172H66.9587H66.9004H66.8422H66.7842H66.7264H66.6687H66.6112H66.5539H66.4968H66.4398H66.383H66.3264H66.2699H66.2137H66.1576H66.1017H66.046H65.9904H65.9351H65.8799H65.8249H65.7701H65.7155H65.6611H65.6069H65.5529H65.4991H65.4455H65.392H65.3388H65.2858H65.233H65.1804H65.1279H65.0757H65.0237H64.9719H64.9203H64.869H64.8178H64.7669H64.7161H64.6656H64.6153H64.5652H64.5154H64.4658H64.4163H64.3671H64.3182H64.2694H64.2209H64.1726H64.1246H64.0768H64.0292H63.9818C59.7592 0 57.5007 1.7343 56.3269 3.54767C55.7509 4.43756 55.4502 5.32385 55.293 5.98573C55.2142 6.31757 55.1707 6.59591 55.1468 6.79424C55.1349 6.89351 55.1278 6.97303 55.1236 7.02954C55.1215 7.05781 55.1202 7.08034 55.1193 7.09675L55.1184 7.11671L55.1181 7.12315L55.118 7.12547L55.118 7.12641C55.118 7.12681 55.118 7.12719 55.7059 7.1464L55.118 7.12719L55.1176 7.13679V7.1464H55.7059C55.1176 7.1464 55.1176 7.14644 55.1176 7.14651V7.14685V7.14742V7.14821V7.14923V7.15048V7.15194V7.15364V7.15555V7.15768V7.16004V7.16262V7.16542V7.16843V7.17167V7.17512V7.1788V7.18268V7.18679V7.19111V7.19564V7.20039V7.20535V7.21053V7.21592V7.22151V7.22732V7.23334V7.23957V7.24601V7.25266V7.25951V7.26657V7.27384V7.28131V7.28899V7.29687V7.30495V7.31324V7.32173V7.33043V7.33932V7.34841V7.3577V7.3672V7.37689V7.38678V7.39686V7.40714V7.41762V7.42829V7.43916V7.45022V7.46147V7.47292V7.48456V7.49639V7.5084V7.52061V7.53301V7.5456V7.55837V7.57134V7.58448V7.59782V7.61134V7.62504V7.63893V7.653V7.66725V7.68169V7.69631V7.7111V7.72608V7.74124V7.75657V7.77208V7.78777V7.80364V7.81968V7.8359V7.8523V7.86886V7.8856V7.90252V7.9196V7.93686V7.95429V7.97188V7.98965V8.00759V8.02569V8.04396V8.0624V8.081V8.09977V8.11871V8.1378V8.15707V8.17649V8.19608V8.21583V8.23574V8.25581V8.27603V8.29642V8.31697V8.33767V8.35853V8.37955V8.40072V8.42205V8.44353V8.46517V8.48696V8.5089V8.53099V8.55323V8.57563V8.59817V8.62086V8.6437V8.66669V8.68983V8.71311V8.73654V8.76011V8.78383V8.80769V8.83169V8.85584V8.88013V8.90456V8.92913V8.95384V8.97869V9.00368V9.0288V9.05406V9.07946V9.105V9.13067V9.15648V9.18241V9.20849V9.23469V9.26103V9.28749V9.31409V9.34082V9.36768V9.39467V9.42178V9.44902V9.47639V9.50389V9.53151V9.55925V9.58712V9.61511V9.64322V9.67146V9.69982V9.7283V9.7569V9.78562V9.81445V9.84341V9.87248V9.90167V9.93098V9.9604V9.98994V10.0196V10.0493V10.0792V10.1092V10.1393V10.1695V10.1998V10.2303V10.2608V10.2915V10.3222V10.3531V10.3841V10.4151V10.4463V10.4776V10.509V10.5405V10.5721V10.6038V10.6356V10.6675V10.6995V10.7315V10.7637V10.796V10.8284V10.8609V10.8935V10.9262V10.9589V10.9918V11.0248V11.0578V11.0909V11.1242V11.1575V11.1909V11.2244V11.258V11.2917V11.3255V11.3593V11.3932V11.4273V11.4614V11.4956V11.5298V11.5642V11.5986V11.6332V11.6678V11.7024V11.7372V11.772V11.807V11.842V11.877V11.9122V11.9474V11.9827V12.0181V12.0535V12.089V12.1246V12.1603V12.196V12.2318V12.2677V12.3036V12.3396V12.3757V12.4119V12.4481V12.4844V12.5207V12.5571V12.5936V12.6301V12.6667V12.7033V12.7401V12.7768V12.8137V12.8506V12.8875V12.9245V12.9616V12.9987V13.0359V13.0731V13.1104V13.1478V13.1852V13.2226V13.2601V13.2977V13.3353V13.3729V13.4106V13.4484V13.4862V13.524V13.5619V13.5998V13.6378V13.6758V13.7139V13.752V13.7902V13.8284V13.8666V13.9049V13.9432V13.9816V14.0199V14.0584V14.0969V14.1354V14.1739V14.2125V14.2511V14.2897V14.3284V14.3671V14.4059V14.4447V14.4835V14.5223V14.5612V14.6001V14.639V14.6779V14.7169V14.7559V14.795V14.834V14.8731V14.9122V14.9513V14.9905V15.0296V15.0688V15.108V15.1473V15.1865V15.2258V15.265V15.3043V15.3437V15.383V15.4223V15.4617V15.5011V15.5405V15.5799V15.6193V15.6587V15.6981V15.7376V15.777V15.8165V15.8559V15.8954V15.9349V15.9744V16.0139V16.0534V16.0929V16.1324V16.1719V16.2114V16.2509V16.2904V16.3299V16.3694V16.4089V16.4484V16.4879V16.5274V16.5669V16.6064V16.6459V16.6854V16.7248V16.7643V16.8037V16.8432V16.8826V16.922V16.9615V17.0009V17.0403V17.0796V17.119V17.1583V17.1977V17.237V17.2763V17.3156V17.3549V17.3941V17.4334V17.4726V17.5118V17.5509V17.5901V17.6292V17.6683V17.7074V17.7465V17.7855V17.8245V17.8635V17.9025V17.9414V17.9803V18.0192V18.058V18.0969V18.1356V18.1744V18.2131V18.2518V18.2905V18.3291V18.3677V18.4062V18.4448V18.4832V18.5217V18.5601V18.5985V18.6368V18.6751V18.7133V18.7515V18.7897V18.8278V18.8659V18.904V18.942V18.9799V19.0178V19.0557V19.0935V19.1312V19.169V19.2066V19.2442V19.2818V19.3193V19.3568V19.3942V19.4316V19.4689V19.5061V19.5433V19.5804V19.6175V19.6546V19.6915V19.7284V19.7653V19.8021V19.8388V19.8755V19.9121V19.9487V19.9852V20.0216V20.0579V20.0942V20.1305V20.1666V20.2027V20.2388V20.2747V20.3106V20.3464V20.3822V20.4179V20.4535V20.489V20.5245V20.5599V20.5952V20.6305V20.6656V20.7007V20.7358V20.7707V20.8056V20.8403V20.8751V20.9097V20.9442V20.9787V21.0131V21.0474V21.0816V21.1157V21.1498V21.1837V21.2176V21.2514V21.2851V21.3187V21.3523V21.3857V21.4191V21.4523V21.4855V21.5186V21.5516V21.5845V21.6173V21.65V21.6826V21.7151V21.7475V21.7798V21.812V21.8442V21.8762V21.9081V21.94V21.9717V22.0033V22.0348V22.0663V22.0976V22.1288V22.1599V22.1909V22.2218V22.2526V22.2833V22.3138C55.1176 22.7269 55.1489 23.133 55.2114 23.5294H56.4051C56.3311 23.137 56.2941 22.7309 56.2941 22.3138V22.2833V22.2526V22.2218V22.1909V22.1599V22.1288V22.0976V22.0663V22.0348V22.0033V21.9717V21.94V21.9081V21.8762V21.8442V21.812V21.7798V21.7475V21.7151V21.6826V21.65V21.6173V21.5845V21.5516V21.5186V21.4855V21.4523V21.4191V21.3857V21.3523V21.3187V21.2851V21.2514V21.2176V21.1837V21.1498V21.1157V21.0816V21.0474V21.0131V20.9787V20.9442V20.9097V20.8751V20.8403V20.8056V20.7707V20.7358V20.7007V20.6656V20.6305V20.5952V20.5599V20.5245V20.489V20.4535V20.4179V20.3822V20.3464V20.3106V20.2747V20.2388V20.2027V20.1666V20.1305V20.0942V20.0579V20.0216V19.9852V19.9487V19.9121V19.8755V19.8388V19.8021V19.7653V19.7284V19.6915V19.6546V19.6175V19.5804V19.5433V19.5061V19.4689V19.4316V19.3942V19.3568V19.3193V19.2818V19.2442V19.2066V19.169V19.1312V19.0935V19.0557V19.0178V18.9799V18.942V18.904V18.8659V18.8278V18.7897V18.7515V18.7133V18.6751V18.6368V18.5985V18.5601V18.5217V18.4832V18.4448V18.4062V18.3677V18.3291V18.2905V18.2518V18.2131V18.1744V18.1356V18.0969V18.058V18.0192V17.9803V17.9414V17.9025V17.8635V17.8245V17.7855V17.7465V17.7074V17.6683V17.6292V17.5901V17.5509V17.5118V17.4726V17.4334V17.3941V17.3549V17.3156V17.2763V17.237V17.1977V17.1583V17.119V17.0796V17.0403V17.0009V16.9615V16.922V16.8826V16.8432V16.8037V16.7643V16.7248V16.6854V16.6459V16.6064V16.5669V16.5274V16.4879V16.4484V16.4089V16.3694V16.3299V16.2904V16.2509V16.2114V16.1719V16.1324V16.0929V16.0534V16.0139V15.9744V15.9349V15.8954V15.8559V15.8165V15.777V15.7376V15.6981V15.6587V15.6193V15.5799V15.5405V15.5011V15.4617V15.4223V15.383V15.3437V15.3043V15.265V15.2258V15.1865V15.1473V15.108V15.0688V15.0296V14.9905V14.9513V14.9122V14.8731V14.834V14.795V14.7559V14.7169V14.6779V14.639V14.6001V14.5612V14.5223V14.4835V14.4447V14.4059V14.3671V14.3284V14.2897V14.2511V14.2125V14.1739V14.1354V14.0969V14.0584V14.0199V13.9816V13.9432V13.9049V13.8666V13.8284V13.7902V13.752V13.7139V13.6758V13.6378V13.5998V13.5619V13.524V13.4862V13.4484V13.4106V13.3729V13.3353V13.2977V13.2601V13.2226V13.1852V13.1478V13.1104V13.0731V13.0359V12.9987V12.9616V12.9245V12.8875V12.8506V12.8137V12.7768V12.7401V12.7033V12.6667V12.6301V12.5936V12.5571V12.5207V12.4844V12.4481V12.4119V12.3757V12.3396V12.3036V12.2677V12.2318V12.196V12.1603V12.1246V12.089V12.0535V12.0181V11.9827V11.9474V11.9122V11.877V11.842V11.807V11.772V11.7372V11.7024V11.6678V11.6332V11.5986V11.5642V11.5298V11.4956V11.4614V11.4273V11.3932V11.3593V11.3255V11.2917V11.258V11.2244V11.1909V11.1575V11.1242V11.0909V11.0578V11.0248V10.9918V10.9589V10.9262V10.8935V10.8609V10.8284V10.796V10.7637V10.7315V10.6995V10.6675V10.6356V10.6038V10.5721V10.5405V10.509V10.4776V10.4463V10.4151V10.3841V10.3531V10.3222V10.2915V10.2608V10.2303V10.1998V10.1695V10.1393V10.1092V10.0792V10.0493V10.0196V9.98994V9.9604V9.93098V9.90167V9.87248V9.84341V9.81445V9.78562V9.7569V9.7283V9.69982V9.67146V9.64322V9.61511V9.58712V9.55925V9.53151V9.50389V9.47639V9.44902V9.42178V9.39467V9.36768V9.34082V9.31409V9.28749V9.26103V9.23469V9.20849V9.18241V9.15648V9.13067V9.105V9.07946V9.05406V9.0288V9.00368V8.97869V8.95384V8.92913V8.90456V8.88013V8.85584V8.83169V8.80769V8.78383V8.76011V8.73654V8.71311V8.68983V8.66669V8.6437V8.62086V8.59817V8.57563V8.55323V8.53099V8.5089V8.48696V8.46517V8.44353V8.42205V8.40072V8.37955V8.35853V8.33767V8.31697V8.29642V8.27603V8.25581V8.23574V8.21583V8.19608V8.17649V8.15707V8.1378V8.11871V8.09977V8.081V8.0624V8.04396V8.02569V8.00759V7.98965V7.97188V7.95429V7.93686V7.9196V7.90252V7.8856V7.86886V7.8523V7.8359V7.81968V7.80364V7.78777V7.77208V7.75657V7.74124V7.72608V7.7111V7.69631V7.68169V7.66725V7.653V7.63893V7.62504V7.61134V7.59782V7.58448V7.57134V7.55837V7.5456V7.53301V7.52061V7.5084V7.49639V7.48456V7.47292V7.46147V7.45022V7.43916V7.42829V7.41762V7.40714V7.39686V7.38678V7.37689V7.3672V7.3577V7.34841V7.33932V7.33043V7.32173V7.31324V7.30495V7.29687V7.28899V7.28131V7.27384V7.26657V7.25951V7.25266V7.24601V7.23957V7.23334V7.22732V7.22151V7.21592V7.21053V7.20535V7.20039V7.19564V7.19111V7.18679V7.18268V7.1788V7.17512V7.17167V7.16843V7.16542V7.16262V7.16004Z'
													fill='#B9B9B9'
												/>
											</svg>
											<span className='gold'>Приз</span>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div>
											<svg
												width='60'
												height='60'
												viewBox='0 0 60 60'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<mask
													id='mask0_1_100314'
													style={{ maskType: 'alpha' }}
													maskUnits='userSpaceOnUse'
													x='0'
													y='0'
													width='60'
													height='60'
												>
													<path
														d='M30 0C13.4582 0 0 13.4582 0 30C0 46.5418 13.4582 60 30 60C46.5418 60 60 46.5418 60 30C60 13.4582 46.5418 0 30 0ZM57.8303 28.9286H50.3036C50.0518 24.1243 48.135 19.7646 45.1104 16.4057L50.4289 11.0871C54.8079 15.8132 57.5678 22.0554 57.8303 28.9286ZM16.4057 45.1093C19.7646 48.135 24.1243 50.0507 28.9286 50.3025V57.8293C22.0554 57.5678 15.8132 54.8068 11.0871 50.4278L16.4057 45.1093ZM31.0714 50.3025C35.8757 50.0507 40.2353 48.1339 43.5943 45.1093L48.9129 50.4278C44.1868 54.8078 37.9446 57.5678 31.0714 57.8303V50.3025ZM30 48.2143C19.9564 48.2143 11.7857 40.0436 11.7857 30C11.7857 19.9564 19.9564 11.7857 30 11.7857C40.0436 11.7857 48.2143 19.9564 48.2143 30C48.2143 40.0436 40.0436 48.2143 30 48.2143ZM43.5943 14.8907C40.2353 11.865 35.8757 9.94928 31.0714 9.6975V2.16964C37.9446 2.43107 44.1868 5.19214 48.9129 9.57107L43.5943 14.8907ZM28.9286 9.6975C24.1243 9.94928 19.7646 11.8661 16.4057 14.8907L11.0871 9.57214C15.8132 5.19214 22.0554 2.43214 28.9286 2.16964V9.6975ZM9.57107 11.0871L14.8896 16.4057C11.8639 19.7646 9.94821 24.1243 9.69643 28.9286H2.16964C2.43214 22.0554 5.19214 15.8132 9.57107 11.0871ZM2.16964 31.0714H9.69643C9.94821 35.8757 11.865 40.2353 14.8896 43.5943L9.57107 48.9129C5.19214 44.1868 2.43214 37.9446 2.16964 31.0714ZM50.4289 48.9129L45.1104 43.5943C48.1361 40.2353 50.0518 35.8757 50.3036 31.0714H57.8303C57.5678 37.9446 54.8079 44.1868 50.4289 48.9129Z'
														fill='#3D3D3D'
													/>
													<path
														d='M27.751 31.5223H29.5578C29.4186 32.5028 29.0584 33.3346 28.3621 34.0091C27.4526 34.8902 26.2778 35.3307 24.8378 35.3307C23.3031 35.3307 22.0289 34.8333 21.0152 33.8386C20.011 32.8344 19.5089 31.6123 19.5089 30.1723C19.5089 28.7228 20.0063 27.496 21.001 26.4918C22.0052 25.4875 23.2463 24.9854 24.7242 24.9854C25.6431 24.9854 26.4863 25.1939 27.2536 25.6107C28.021 26.0275 28.6226 26.5912 29.0584 27.3018L27.3815 28.2681C27.1447 27.8607 26.7847 27.5291 26.3015 27.2733C25.8184 27.0175 25.2878 26.8897 24.71 26.8897C23.7531 26.8897 22.9715 27.2023 22.3652 27.8275C21.7589 28.4339 21.4557 29.2154 21.4557 30.1723C21.4557 31.1102 21.7636 31.887 22.3794 32.5028C22.9952 33.1091 23.8194 33.4123 24.8521 33.4123C25.6005 33.4123 26.2257 33.2465 26.7278 32.9149C27.23 32.5833 27.571 32.1191 27.751 31.5223Z'
														fill='#3D3D3D'
													/>
													<path
														d='M35.8959 29.7886H40.8838V30.556C40.8838 31.977 40.429 33.1281 39.5195 34.0091C38.6101 34.8902 37.4353 35.3307 35.9953 35.3307C34.4606 35.3307 33.1864 34.8333 32.1727 33.8386C31.1685 32.8344 30.6664 31.6123 30.6664 30.1723C30.6664 28.7228 31.1638 27.496 32.1585 26.4918C33.1627 25.4875 34.4038 24.9854 35.8816 24.9854C36.8006 24.9854 37.6438 25.1939 38.4111 25.6107C39.1785 26.0275 39.7801 26.5912 40.2159 27.3018L38.539 28.2681C38.3022 27.8607 37.9422 27.5291 37.459 27.2733C36.9759 27.0175 36.4453 26.8897 35.8674 26.8897C34.9106 26.8897 34.129 27.2023 33.5227 27.8275C32.9164 28.4339 32.6132 29.2154 32.6132 30.1723C32.6132 31.1102 32.9211 31.887 33.5369 32.5028C34.1527 33.1091 34.9769 33.4123 36.0095 33.4123C36.758 33.4123 37.3832 33.2465 37.8853 32.9149C38.3874 32.5833 38.7285 32.1191 38.9085 31.5223H35.8959V29.7886Z'
														fill='#3D3D3D'
													/>
												</mask>
												<g mask='url(#mask0_1_100314)'>
													<rect
														x='-3.46153'
														width='66.9231'
														height='60.5769'
														fill='#B9B9B9'
													/>
												</g>
											</svg>
											<span className='gold'>Токен</span>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div>
											<svg
												width='54'
												height='54'
												viewBox='0 0 54 54'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M28.9209 17.1996L38.9443 7.88263C38.9526 7.87493 38.96 7.8667 38.9679 7.85869C38.9735 7.85299 38.9791 7.84751 38.9846 7.84171C39.0068 7.81798 39.0276 7.7933 39.0464 7.76756C39.0488 7.76429 39.0509 7.76081 39.0532 7.75754C39.071 7.73234 39.0872 7.70639 39.1018 7.67971C39.1035 7.67665 39.1057 7.67401 39.1073 7.67085C39.1082 7.66905 39.1089 7.66705 39.1098 7.66526C39.1252 7.63594 39.1387 7.60588 39.1502 7.57508C39.1522 7.5697 39.1539 7.56422 39.1558 7.55884C39.1655 7.53131 39.1737 7.50326 39.1804 7.47489C39.1815 7.47004 39.183 7.46518 39.1841 7.46033C39.1907 7.42932 39.1953 7.398 39.1982 7.36647C39.1988 7.35929 39.1993 7.35223 39.1998 7.34505C39.2018 7.31531 39.2025 7.28546 39.2012 7.25562C39.2011 7.25298 39.2012 7.25045 39.2011 7.24781C39.1994 7.21564 39.1953 7.18358 39.1897 7.15162C39.1885 7.14509 39.1872 7.13855 39.186 7.13201C39.1733 7.06862 39.153 7.00639 39.1247 6.94638C39.1214 6.93953 39.1182 6.93278 39.1147 6.92603C39.0998 6.89671 39.0838 6.86781 39.0651 6.83996L34.7128 0.358805C34.7082 0.351949 34.7026 0.345938 34.6979 0.339188C34.6856 0.322102 34.6732 0.305437 34.6598 0.289512C34.652 0.28023 34.6437 0.271477 34.6355 0.262617C34.6204 0.24627 34.6052 0.230238 34.5889 0.215156C34.5814 0.208301 34.5736 0.201973 34.5659 0.195434C34.5478 0.17993 34.5294 0.164848 34.5101 0.151031C34.5038 0.146496 34.497 0.142488 34.4905 0.138164C34.4689 0.123715 34.4471 0.109793 34.4243 0.0975586C34.4202 0.0953438 34.4159 0.0936562 34.4118 0.0915469C34.2991 0.0331172 34.1728 0 34.0415 0H19.9675C19.9316 0 19.8961 0.00242578 19.8609 0.00706641C19.6292 0.0351211 19.4191 0.162316 19.2872 0.358805L14.9351 6.83996C14.9163 6.86781 14.9003 6.89681 14.8854 6.92613C14.8821 6.93288 14.8787 6.93953 14.8755 6.94638C14.8473 7.00639 14.8268 7.06873 14.8141 7.13211C14.8129 7.13855 14.8116 7.14498 14.8105 7.15152C14.8049 7.18348 14.8008 7.21554 14.7991 7.24781C14.799 7.25034 14.7991 7.25298 14.799 7.25562C14.7977 7.28557 14.7983 7.31542 14.8003 7.34516C14.8009 7.35223 14.8013 7.35919 14.8019 7.36636C14.8049 7.39789 14.8094 7.42932 14.816 7.46033C14.8171 7.46518 14.8186 7.47004 14.8197 7.47489C14.8264 7.50326 14.8346 7.53131 14.8443 7.55895C14.8462 7.56432 14.8478 7.5697 14.8499 7.57498C14.8615 7.60577 14.875 7.63583 14.8904 7.66526C14.8914 7.66705 14.8919 7.66905 14.8929 7.67085C14.8946 7.67391 14.8967 7.67654 14.8984 7.67971C14.9131 7.70639 14.9292 7.73234 14.947 7.75754C14.9494 7.76081 14.9515 7.76429 14.9538 7.76756C14.9727 7.7933 14.9933 7.81798 15.0156 7.84171C15.0211 7.84751 15.0267 7.8531 15.0324 7.85869C15.0403 7.8667 15.0477 7.87493 15.0559 7.88263L25.0793 17.1996C17.0075 18.1531 10.7254 25.0364 10.7254 33.3604C10.7254 42.3343 18.0262 49.6351 27.0001 49.6351C35.974 49.6351 43.2748 42.3343 43.2748 33.3604C43.2748 25.0364 36.9928 18.1531 28.9209 17.1996ZM28.7673 15.1349L31.1123 8.09884H36.3368L28.7673 15.1349ZM27.0021 15.319L24.608 8.09895H29.4084L27.0021 15.319ZM34.1147 2.36809L36.8774 6.48221H31.8816L34.1147 2.36809ZM32.6825 1.61779L30.5225 5.59744L28.3625 1.61779H32.6825ZM29.1632 6.48221H24.8458L27.0045 2.50509L29.1632 6.48221ZM25.6466 1.61779L23.4866 5.59754L21.3266 1.61779H25.6466ZM19.8903 2.36071L22.1274 6.48221H17.1228L19.8903 2.36071ZM17.6632 8.09895H22.9047L25.2399 15.1417L17.6632 8.09895ZM27 48.0182C18.9176 48.0182 12.3421 41.4427 12.3421 33.3603C12.3421 25.2779 18.9176 18.7024 27 18.7024C35.0824 18.7024 41.6579 25.2779 41.6579 33.3603C41.6579 41.4427 35.0824 48.0182 27 48.0182Z'
													fill='#B9B9B9'
												/>
												<path
													d='M35.1019 14.3734C34.6912 14.198 34.2163 14.3889 34.041 14.7993C33.8656 15.2099 34.0563 15.6848 34.4669 15.8602C41.4869 18.8591 46.023 25.7283 46.023 33.3604C46.023 43.8497 37.4893 52.3834 27 52.3834C16.5107 52.3834 7.97703 43.8496 7.97703 33.3603C7.97703 25.7138 12.5249 18.8395 19.5633 15.8473C19.9741 15.6726 20.1655 15.198 19.991 14.7871C19.8161 14.3761 19.3415 14.1848 18.9308 14.3595C11.2944 17.606 6.3603 25.0642 6.3603 33.3603C6.3603 44.7411 15.6192 54 27 54C38.3808 54 47.6397 44.7411 47.6397 33.3603C47.6397 25.0797 42.7183 17.627 35.1019 14.3734Z'
													fill='#B9B9B9'
												/>
											</svg>
											<span className='gold'>Кольцо</span>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div>
											<svg
												width='95'
												height='36'
												viewBox='0 0 95 36'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<mask
													id='mask0_1_100190'
													style={{ maskType: 'alpha' }}
													maskUnits='userSpaceOnUse'
													x='0'
													y='0'
													width='95'
													height='36'
												>
													<path
														d='M76.6137 35.0742C71.1793 35.0742 66.7547 30.6496 66.7547 25.2152C66.7547 19.7809 71.1793 15.3562 76.6137 15.3562C82.0481 15.3562 86.4727 19.7809 86.4727 25.2152C86.4727 30.6496 82.0481 35.0742 76.6137 35.0742ZM76.6137 17.1738C72.1891 17.1738 68.5906 20.7723 68.5906 25.1969C68.5906 29.6215 72.1891 33.2199 76.6137 33.2199C81.0383 33.2199 84.6367 29.6215 84.6367 25.1969C84.6367 20.7723 81.0383 17.1738 76.6137 17.1738Z'
														fill='white'
													/>
													<path
														d='M17.0926 35.0742C11.6582 35.0742 7.2336 30.6496 7.2336 25.2152C7.2336 19.7809 11.6582 15.3562 17.0926 15.3562C22.527 15.3562 26.9516 19.7809 26.9516 25.2152C26.9516 30.6496 22.527 35.0742 17.0926 35.0742ZM17.0926 17.1738C12.668 17.1738 9.06953 20.7723 9.06953 25.1969C9.06953 29.6215 12.668 33.2383 17.0926 33.2383C21.5172 33.2383 25.1156 29.6398 25.1156 25.2152C25.1156 20.7906 21.5172 17.1738 17.0926 17.1738Z'
														fill='white'
													/>
													<path
														d='M17.0926 30.5211C14.1734 30.5211 11.7867 28.1344 11.7867 25.2152C11.7867 22.2961 14.1734 19.9094 17.0926 19.9094C20.0117 19.9094 22.3984 22.2961 22.3984 25.2152C22.3984 28.1344 20.0117 30.5211 17.0926 30.5211ZM17.0926 21.727C15.1832 21.727 13.6227 23.2875 13.6227 25.1969C13.6227 27.1063 15.1832 28.6668 17.0926 28.6668C19.0019 28.6668 20.5625 27.1063 20.5625 25.1969C20.5625 23.2875 19.0019 21.727 17.0926 21.727Z'
														fill='white'
													/>
													<path
														d='M76.5769 30.5211C73.6578 30.5211 71.2711 28.1344 71.2711 25.2152C71.2711 22.2961 73.6578 19.9094 76.5769 19.9094C79.4961 19.9094 81.8828 22.2961 81.8828 25.2152C81.8828 28.1344 79.4961 30.5211 76.5769 30.5211ZM76.5769 21.727C74.6676 21.727 73.107 23.2875 73.107 25.1969C73.107 27.1063 74.6676 28.6668 76.5769 28.6668C78.4863 28.6668 80.0469 27.1063 80.0469 25.1969C80.0469 23.2875 78.4863 21.727 76.5769 21.727Z'
														fill='white'
													/>
													<path
														d='M90.8789 30.4844H84.398V28.6484H89.9609V25.1969C89.9609 25.0684 89.9793 24.9398 90.0344 24.8297L91.9437 20.4785L88.2902 17.743C84.2512 14.7137 79.2574 13.043 74.2086 13.043H66.4609C66.2773 13.043 66.0938 12.9879 65.9469 12.8777L57.8137 7.35156C53.3707 4.34063 48.1934 2.74336 42.8324 2.74336H23.6285L1.83594 9.40781V10.2891H2.9375C3.45156 10.2891 3.85547 10.693 3.85547 11.207V19.1016C3.85547 19.6156 3.45156 20.0195 2.9375 20.0195H1.83594V25.0316L4.58984 28.6484H9.28984V30.4844H4.13086C3.83711 30.4844 3.58008 30.3559 3.39648 30.1172L0.183594 25.8945C0.0550781 25.7293 0 25.5457 0 25.3438V19.1016C0 18.5875 0.403906 18.1836 0.917969 18.1836H2.01953V12.125H0.917969C0.403906 12.125 0 11.7211 0 11.207V8.72852C0 8.32461 0.257031 7.97578 0.642578 7.84727L23.2246 0.962499C23.3164 0.94414 23.4082 0.925781 23.5 0.925781H42.8324C48.5605 0.925781 54.1051 2.6332 58.8418 5.84609L66.7363 11.207H74.2086C79.643 11.207 85.0406 13.0063 89.3918 16.2742L93.6328 19.4504C93.9816 19.7074 94.0918 20.1664 93.9266 20.552L91.7969 25.3988V29.5664C91.7969 30.0805 91.393 30.4844 90.8789 30.4844Z'
														fill='white'
													/>
													<path
														d='M55.6656 28.6484H68.8109V30.4844H55.6656V28.6484Z'
														fill='white'
													/>
													<path
														d='M24.877 28.6484H51.9938V30.4844H24.877V28.6484Z'
														fill='white'
													/>
													<path
														d='M6.92148 20.0195H2.9375C2.42344 20.0195 2.01953 19.6156 2.01953 19.1016V11.207C2.01953 10.693 2.42344 10.2891 2.9375 10.2891H6.93984C7.30703 10.2891 7.6375 10.5094 7.78438 10.8398L9.71211 15.3379C9.82227 15.5949 9.80391 15.907 9.67539 16.1457L7.74766 19.5422C7.56406 19.8359 7.25195 20.0195 6.92148 20.0195ZM3.85547 18.1836H6.38906L7.82109 15.65L6.33398 12.125H3.85547V18.1836Z'
														fill='white'
													/>
													<path
														d='M60.7695 12.6758H47C46.9449 12.6758 46.9082 12.6758 46.8531 12.6574L28.402 9.81171L28.6774 7.99414L47.0734 10.8398H57.9055L57.1527 10.3074C52.5996 7.05781 47.2387 5.33203 41.6391 5.33203H25.2809L20.4707 6.7457L25.0238 7.44336L24.7484 9.26093L16.1195 7.93906C15.6973 7.86562 15.3668 7.51679 15.3484 7.09453C15.3117 6.67226 15.5871 6.26836 16.0094 6.1582L24.9137 3.55117C25.0055 3.53281 25.0789 3.51445 25.1707 3.51445H41.6574C47.6426 3.51445 53.3707 5.35039 58.2359 8.82031L61.3203 11.0234C61.6508 11.2621 61.7793 11.666 61.6691 12.0516C61.5223 12.4187 61.1734 12.6758 60.7695 12.6758Z'
														fill='white'
													/>
													<path
														d='M35.8375 10.9684C35.7824 10.9684 35.7457 10.9684 35.6906 10.95L31.9453 10.3809C31.5047 10.3074 31.1742 9.92187 31.1742 9.48125V4.41406C31.1742 3.9 31.5781 3.49609 32.0922 3.49609H35.8375C36.3516 3.49609 36.7555 3.9 36.7555 4.41406V10.032C36.7555 10.3074 36.6453 10.5461 36.4434 10.7297C36.2781 10.8766 36.0578 10.9684 35.8375 10.9684ZM33.0102 8.67344L34.9195 8.96719V5.33203H33.0102V8.67344Z'
														fill='white'
													/>
													<path
														d='M65.3961 26.1148L35.5438 24.334C35.2867 24.3156 35.048 24.1871 34.8828 23.9852L29.2098 16.825C29.0262 16.6047 28.9711 16.3109 29.0445 16.0355C29.118 15.7602 29.3016 15.5398 29.5586 15.4113L35.4887 12.7492C35.6539 12.6758 35.8191 12.6574 36.0027 12.6758L65.084 17.082L64.8086 18.8996L35.9844 14.5484L31.3945 16.6047L36.0762 22.5164L65.5246 24.2789L65.3961 26.1148Z'
														fill='white'
													/>
													<path
														d='M87.3906 19.2852H93.082V21.1211H87.3906V19.2852Z'
														fill='white'
													/>
												</mask>
												<g mask='url(#mask0_1_100190)'>
													<rect
														x='-18'
														y='-10'
														width='128'
														height='58'
														rx='12'
														fill='url(#paint0_linear_1_100190)'
													/>
												</g>
												<defs>
													<linearGradient
														id='paint0_linear_1_100190'
														x1='-6.09303'
														y1='-4.31371'
														x2='98.57'
														y2='21.6013'
														gradientUnits='userSpaceOnUse'
													>
														<stop stopColor='#B48A3D' />
														<stop offset='0.478771' stopColor='#FCECCE' />
														<stop offset='1' stopColor='#CCAB6C' />
													</linearGradient>
												</defs>
											</svg>
											<span className='gold'>Автомобиль</span>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div>
											<svg
												width='42'
												height='58'
												viewBox='0 0 42 58'
												fill='none'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													d='M31.8044 20.8354L31.8044 20.8354C33.5142 23.3399 34.4179 26.2678 34.4179 29.303C34.4179 37.6034 27.6649 44.3566 19.3645 44.3566C11.0641 44.3566 4.31104 37.6035 4.31104 29.3031C4.31104 21.0028 11.0641 14.2498 19.3645 14.2498C23.0118 14.2498 26.5333 15.5767 29.2802 17.9866C29.5811 18.2506 29.6111 18.7088 29.3471 19.0098C29.083 19.3107 28.6249 19.3406 28.3239 19.0766C25.8417 16.8991 22.6598 15.6998 19.3644 15.6998C11.8634 15.6998 5.76105 21.8021 5.76105 29.303C5.76105 36.804 11.8634 42.9063 19.3644 42.9063C26.8654 42.9063 32.9677 36.804 32.9677 29.303C32.9677 26.561 32.1512 23.9155 30.6066 21.653L30.5034 21.7235L30.6066 21.653C30.3808 21.3223 30.4659 20.8712 30.7966 20.6454C31.1275 20.4196 31.5787 20.5047 31.8044 20.8354Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.25'
												/>
												<path
													d='M20.8968 29.303C20.8968 28.4579 20.2095 27.7706 19.3645 27.7706C18.5194 27.7706 17.8321 28.4579 17.8321 29.303C17.8321 30.1482 18.5194 30.8355 19.3645 30.8355C20.2095 30.8355 20.8969 30.1482 20.8968 29.303ZM20.8968 29.303H20.7718L20.8968 29.303C20.8968 29.303 20.8968 29.303 20.8968 29.303ZM28.8198 24.5101L28.8198 24.5101C29.0009 24.8672 28.8581 25.3035 28.5008 25.4844L28.5008 25.4844L22.3579 28.5984L22.2737 28.6411L22.2917 28.7337C22.3275 28.9183 22.3468 29.1083 22.3468 29.3029C22.3468 30.9474 21.0088 32.2855 19.3643 32.2855C17.7199 32.2855 16.3818 30.9474 16.3818 29.3029C16.3818 28.9005 16.4623 28.5168 16.6074 28.1663L16.6436 28.0789L16.5694 28.0204L13.2585 25.4068L13.2585 25.4068C12.9442 25.1588 12.8906 24.7029 13.1387 24.3884C13.3869 24.0742 13.8427 24.0205 14.157 24.2687L17.469 26.883L17.5432 26.9416L17.6197 26.8862C18.1108 26.5307 18.7132 26.3204 19.3643 26.3204C20.2282 26.3204 21.0071 26.6898 21.5526 27.2792L21.6167 27.3484L21.7008 27.3058L27.8452 24.1912C27.8452 24.1912 27.8452 24.1911 27.8452 24.1911C28.2024 24.0102 28.6388 24.1528 28.8198 24.5101Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.25'
												/>
												<path
													d='M37.5308 26.0488L37.5492 26.1519H37.6538H39.0338C40.167 26.1519 41.089 27.0739 41.0889 28.207V29.7929C41.0889 30.9259 40.1668 31.848 39.0336 31.848H37.7504H37.6422L37.6267 31.9551C37.0678 35.8214 35.3067 39.3041 32.7341 42.0096L32.6997 42.0458V42.0957V46.7167C32.6997 48.0734 31.5957 49.1773 30.2389 49.1773H29.0232H28.8982V49.3023V54.505C28.8982 56.363 27.3864 57.8748 25.5285 57.8748H13.2005C11.3426 57.8748 9.8308 56.363 9.8308 54.505V54.0756C9.8308 53.6751 10.1554 53.3506 10.5559 53.3506C10.9563 53.3506 11.2809 53.6751 11.2809 54.0756V54.505C11.2809 55.5635 12.142 56.4246 13.2005 56.4246H25.5286C26.5871 56.4246 27.4481 55.5635 27.4481 54.505V46.0882V45.8902L27.2694 45.9753C24.8722 47.1166 22.1919 47.7565 19.3646 47.7565C16.5373 47.7565 13.8571 47.1166 11.4598 45.9753L11.281 45.8902V46.0882V50.453C11.281 50.8535 10.9564 51.1781 10.556 51.1781C10.1555 51.1781 9.83092 50.8535 9.83092 50.453V49.3023V49.1773H9.70592H8.4901C7.13328 49.1773 6.02931 48.0734 6.02931 46.7167V42.0957V42.0458L5.99489 42.0096C2.84584 38.6978 0.910889 34.2222 0.910889 29.3029C0.910889 24.3836 2.84596 19.908 5.99489 16.5963L6.02931 16.5601V16.5102V11.8895C6.02931 10.5327 7.13329 9.42869 8.4901 9.42869H9.70569H9.83069V9.30369V3.10217C9.83069 1.46066 11.1664 0.125 12.808 0.125H25.921C27.5625 0.125 28.8982 1.46065 28.8983 3.10217V4.15013C28.8983 4.55066 28.5736 4.8752 28.1732 4.8752C27.7728 4.8752 27.4481 4.55066 27.4481 4.15013V3.10217C27.4481 2.26002 26.7631 1.57513 25.921 1.57513H12.8081C11.9658 1.57513 11.2809 2.26002 11.2809 3.10217V12.5177V12.7157L11.4597 12.6306C13.8569 11.4893 16.5372 10.8494 19.3645 10.8494C22.1918 10.8494 24.8719 11.4893 27.2693 12.6306L27.448 12.7157V12.5177V7.77289C27.448 7.37236 27.7727 7.04782 28.1731 7.04782C28.5735 7.04782 28.8982 7.37236 28.8982 7.77289V9.3038V9.4288H29.0232H30.239C31.5958 9.4288 32.6998 10.5328 32.6998 11.8896V16.5103V16.5603L32.7342 16.5965C35.1726 19.1609 36.883 22.4232 37.5308 26.0488ZM31.0453 15.0279L31.2495 15.1954V14.9312V11.8895C31.2495 11.3322 30.7963 10.8788 30.2389 10.8788H29.0232H29.023H28.898V11.0038V13.4381V13.5082L28.9579 13.5447C29.6886 13.9912 30.3858 14.4873 31.0453 15.0279ZM9.8308 11.0038V10.8788H9.7058H8.4901C7.93267 10.8788 7.47933 11.3322 7.47933 11.8896V14.9313V15.1954L7.68357 15.028C8.34312 14.4874 9.04035 13.9913 9.77098 13.5448L9.8308 13.5083V13.4382V11.0038ZM9.7058 47.7273H9.8308V47.6023V45.1681V45.098L9.77098 45.0614C9.04023 44.6149 8.34301 44.1189 7.68358 43.5782L7.47933 43.4108V43.6749V46.7168C7.47933 47.2741 7.93256 47.7273 8.48998 47.7273H9.7058ZM28.8982 47.6023V47.7273H29.0232H30.2389C30.7964 47.7273 31.2496 47.2741 31.2496 46.7167V43.6748V43.4107L31.0454 43.5781C30.3858 44.1188 29.6886 44.6148 28.958 45.0613L28.8982 45.0979V45.168V47.6023ZM37.7932 30.2665L37.7864 30.3979H37.918H39.0338C39.3675 30.3979 39.6389 30.1266 39.6389 29.7929V28.2069C39.6389 27.8732 39.3675 27.6019 39.0338 27.6019H37.8756H37.7396L37.7511 27.7374C37.7947 28.2538 37.8182 28.7757 37.8182 29.3029C37.8182 29.6261 37.8096 29.9473 37.7932 30.2665ZM2.36091 29.303C2.36091 38.6789 9.98858 46.3066 19.3645 46.3066C28.7404 46.3066 36.3681 38.6789 36.3681 29.303C36.3681 19.9272 28.7404 12.2996 19.3645 12.2996C9.98858 12.2996 2.36091 19.9272 2.36091 29.303Z'
													fill='#B9B9B9'
													stroke='#B9B9B9'
													strokeWidth='0.25'
												/>
											</svg>
											<span className='gold'>Часы</span>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__example example2'>
					<div className='referral__container'>
						<div className='referral__example-wrapper'>
							<div className='referral__example-img'>
								<picture>
									<source
										media='(max-width: 767.98px)'
										srcSet={partnersBlock6Mob}
									/>
									<img src={partnersBlock6} alt='example' />
								</picture>
							</div>
							<div className='referral__example-title gold'>
								Разберем на примере
							</div>
							<div className='referral__example-body'>
								<div className='referral__example-content'>
									<p>
										В командной ноге 10 000 баллов, что равняется 10 000$
										оборота команды Вашего лидера. Как только Вы пригласите
										партнера в первую линию, и он сделает депозит, к примеру 1
										000$ - у Вас закроется цикл. С Вашего правого и левого
										направления спишется 1 000 баллов, а на Ваш счет системы
										статусов будет начислено 1 000$ оборота, что позволит
										получить статус “Manager 2”.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__qsb'>
					<img
						src={promoMountains}
						alt='mountains'
						className='referral__qsb-img'
					/>
					<div className='referral__container'>
						<div className='referral__qsb-title title'>
							Бонус
							<br />
							<span className='gold'>быстрого старта</span>
						</div>
						<div className='referral__qsb-descr gold'>
							ДАННЫЙ БОНУС НАЧИСЛЯЕТСЯ ПО ИСТЕЧЕНИЮ 30-ДНЕЙ С МОМЕНТА
							РЕГИСТРАЦИИ НА БАЛАНС ВАШЕГО КАБИНЕТА И СРАЗУ ДОСТУПЕН ДЛЯ ВЫВОДА.
						</div>
						<div className='referral__qsb-wrapper'>
							<div className='referral__qsb-body'>
								<div className='referral__qsb-content'>
									<p>
										Сумма вознаграждения зависит от оборота вашей структуры
										только в 1 линии и приведена в таблице.
									</p>
									<p>
										Таким образом, если за первый месяц работы вы сможете
										привлечь, к примеру, всего 3-х партнеров, которые сделают
										депозит в 1500$, 3000$ и 750$ - Оборот Вашей первой линии
										будет составлять 5250$, что позволит получить бонус в
										размере 250$.
									</p>
									<p>
										Помимо этого бонуса, вам будут также начислены все
										реферальные и иные бонусные вознаграждения. Личные
										инвестиции в расчет не идут.
									</p>
									<p>
										Для получения премии у вас должен быть минимум один депозит,
										осуществленный до окончания 30-дневного срока с момента
										вашей регистрации.
									</p>
								</div>
								<div className='referral__qsb-table'>
									<div className='referral__qsb-table--row'>
										<div className='referral__qsb-table--col nogold'>
											<div>
												<span className='gold'>Оборот</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>100$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>500$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>1000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>2500$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>5000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>7000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>10000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>15000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>20000$</span>
											</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>
												<span className='gold'>50000$</span>
											</div>
										</div>
									</div>
									<div className='referral__qsb-table--row'>
										<div className='referral__qsb-table--col nogold'>
											<div>Премия</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>5$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>25$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>50$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>125$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>250$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>350$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>500$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>750$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>1000$</div>
										</div>
										<div className='referral__qsb-table--col'>
											<div>2500$</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='referral__invite'>
					<div className='referral__container'>
						<div className='referral__invite-wrapper'>
							<div className='referral__invite-title title'>
								Бонус&nbsp;
								<br />
								<span className='gold'>Пригласителя</span>
							</div>
							<div className='referral__invite-img'>
								<img src={partnersBlock8} alt='block8' />
							</div>
							<div className='referral__invite-body'>
								<div className='referral__invite-descr gold'>
									Данный бонус предназначен для мотивации спонсора и партнера.
								</div>
								<div className='referral__invite-text'>
									После того как ваш партнер зарегистрировался по вашей
									реферальной ссылке ему, и вам в личном кабинете становится
									доступен прогресс-бар с информацией о статусе бонуса. Вместе с
									этим, Вам, и Вашему партнеру начисляются по ⅓ золотого слитка
									со статусом “locked”.
									<br />
									После достижения партнером Ранга 2 (оборот 1 000$) статус
									“locked” снимается, и к Вашему счету привязывается часть
									золотого слитка. Как только у Вас соберется 3 части слитка,
									компания “U-KG Holding” вышлет вам брендированный золотой
									слиток на адрес, указанный в личном профиле.
									<br />
									Для удобства, в личном кабинете указана информация, которая
									отображает прогресс достижения бонуса вами и вашими
									партнерами. Бонус работает на протяжении 50 дней с момента
									регистрации нового партнера.
								</div>
								<ul className='referral__invite-list'>
									<li>
										<div>
											<span className='gold'>Срок действия</span>
											<div className='referral__invite-cell'>
												<div>
													<span className='gold'>50 дней</span>
												</div>
											</div>
										</div>
										<div>
											<span className='gold'>Условие достижения</span>
											<div className='referral__invite-cell'>
												<div>
													<span className='gold'>
														Приглашенный достиг 2 ранга{' '}
													</span>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div>
											<span className='gold'>Вознаграждение</span>
											<div className='referral__invite-cell'>
												<div>
													<span className='gold'>1/3 золотого слитка</span>
												</div>
											</div>
										</div>
										<div>
											<span className='gold'>Кто получает</span>
											<div className='referral__invite-cell'>
												<div>
													<span className='gold'>
														Пригласивший и его реферал
													</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
								<div className='referral__invite-btn button button_gold'>
									Присоединиться
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Partners;
