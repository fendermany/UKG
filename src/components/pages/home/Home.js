import { useState, useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Select from 'react-select';
import DataContext from '../../../contexts/DataContext';
import { Navigation, Pagination, A11y, Thumbs, EffectFade } from 'swiper';
import VideoPlayer from '../../ui/video/VideoPlayer';
import { Helmet } from 'react-helmet';

// Components
import Footer from '../../footer/Footer';
import Header from './../../header/Header';
// Media
import {
	homeAbout,
	homeAboutMob,
	homeAboutBg,
	homeProductsBg,
	homeProductsGoldReflection,
	homeProductsSlide1,
	homeProductsSlide2,
	homeProductsSlide3,
	homeProductsSlide4,
	homeToken,
	homeTokenMob,
	homeGuaranteesBg,
	homeGuaranteesList1,
	homeGuaranteesList2,
	homeGuaranteesList3,
	homeGuaranteesList4,
	homeGuaranteesList5,
	homeGuaranteesList6,
	homeOffer1,
	homeOffer2,
	homeOffer3,
	homeOffer4,
	homeOffer5,
	homeOffer6,
	homePromo,
	homePromoMob,
	homeRoadmap,
	homeRoadmapMob,
	iconsPlay,
	sliderPrev,
	sliderNext,
	promoMountains,
} from '../../../img/images.js';
// Styles
import './home.scss';

const Home = () => {
	const [productSwiper, setProductSwiper] = useState(null);
	const [productSwiperThumbs, setProductSwiperThumbs] = useState(null);
	const [roadmapSwiper, setRoadmapSwiper] = useState(null);
	const [roadmapSwiperThumbs, setRoadmapSwiperThumbs] = useState(null);
	const { calcOptions } = useContext(DataContext);
	const [currentCalc, setCurrentCalc] = useState('pool5');
	const [calcSum, setCalcSum] = useState(10000);
	const [calcMonth, setCalcMonth] = useState({
		value:
			(+calcSum / 100) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent),
		procent: +calcOptions
			.filter(c => c.value === currentCalc)
			.map(c => c.procent),
	});
	const [calcAll, setCalcAll] = useState({
		value:
			(+calcSum / 100) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.months),
		procent:
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.months) +
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.body),
	});
	const [calcPrize, setCalcPrize] = useState(
		calcOptions.filter(c => c.value === currentCalc).map(c => c.prize)
	);

	const getValue = () => {
		return currentCalc ? calcOptions.find(c => c.value === currentCalc) : '';
	};

	function onChange(newValue) {
		setCurrentCalc(newValue.value);
		setCalcPrize(newValue.prize);
		setCalcMonth({
			value: (+calcSum / 100) * newValue.procent,
			procent: newValue.procent,
		});
		setCalcAll({
			value: (+calcSum / 100) * +newValue.procent * +newValue.months,
			procent: +newValue.procent * +newValue.months + +newValue.body,
		});
	}

	const handleChange = event => {
		setCalcSum(event.target.value);
		setCalcMonth({
			value:
				(+event.target.value / 100) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent),
			procent: +calcOptions
				.filter(c => c.value === currentCalc)
				.map(c => c.procent),
		});
		setCalcAll({
			value:
				(+event.target.value / 100) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.months),
			procent:
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
					+calcOptions.filter(c => c.value === currentCalc).map(c => c.months) +
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.body),
		});
	};

	const optionsPromo = {
		controls: true,
		poster: homePromo,
		sources: [{ src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' }],
	};

	const optionsAbout = {
		controls: true,
		poster: homeAbout,
		sources: [{ src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4' }],
	};

	return (
		<div className='wrapper'>
			<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page home'>
				<div className='home__promo'>
					<div className='home__container'>
						<div className='home__promo-wrapper'>
							<div className='home__promo-body'>
								<div className='home__promo-subtext gold'>
									золото всегда в цене
								</div>
								<h1 className='home__promo-title'>
									Создай свое БУДУЩЕЕ
									<span className='gold'>Вместе с нами!</span>
								</h1>
								<div className='home__promo-descr'>
									Золото – один из самых надежных инвестиционных инструментов,
									который создаст прочную основу для Вашего будущего
								</div>
								<button className='home__promo-btn button button_gold'>
									Уникальное предложение
								</button>
							</div>
							<div className='home__promo-video promo-video'>
								<div className='promo-video__preview'>
									<VideoPlayer options={optionsPromo} key={'promo-video'} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='home__about'>
					<img src={homeAboutBg} alt='bg-about' className='home__about-bg' />
					<div className='home__container'>
						<div className='home__about-wrapper'>
							<div className='home__about-video about-video'>
								<div className='about-video__preview'>
									<VideoPlayer options={optionsAbout} abc={'about-video'} />
								</div>
							</div>
							<div className='home__about-body'>
								<h2 className='home__about-title title'>
									О <span className='gold'> U-KG Holding</span>
								</h2>
								<div className='home__about-descr'>
									<p>
										<span className='gold'>"U-KG HOLDING" LLC</span> - Холдинг
										компаний по добыче и обогащению золото-полиметаллических
										руд. В состав холдинга входят 5 лицензированных компаний,
										которые занимаются добычей золота и разработкой
										месторождений с общим запасом золота 72 тыс. кг.
									</p>
									<p>
										<span className='gold'>Цель холдинга</span> - приобретение и
										развития максимального количества золотодобычных участков с
										целью разработки большинства месторождений.
									</p>
									<p>
										Мы являемся одним из крупных игроков на международном рынке
										драгоценных металлов. Тому подтверждением являются договора
										с Конго, Мексикой, Венгрией и другими европейскими странами.
									</p>
									<p>
										Тому подтверждением являются договора с Конго, Мексикой,
										Венгрией и другими европейскими странами.
									</p>
								</div>
								<a
									href='/'
									className='home__about-btn button button_transparent'
								>
									<div>
										<span>Подробнее</span>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className='home__products'>
					<img src={homeProductsBg} alt='bg' className='home__products-bg' />
					<div className='home__container'>
						<div className='home__products-border--wrapper'>
							<div className='home__products-wrapper'>
								<Swiper
									observer
									observeParents
									modules={[A11y, Thumbs, EffectFade, Navigation, Pagination]}
									thumbs={{ swiper: productSwiperThumbs }}
									onSwiper={setProductSwiper}
									slidesPerView={1}
									speed={1000}
									slideToClickedSlide
									className='home__products-inner'
									wrapperTag='ul'
									effect='fade'
									pagination={{
										el: '.home__products-slider--pagination',
										clickable: true,
									}}
									navigation={{
										prevEl: '.home__products-slider--prev',
										nextEl: '.home__products-slider--next',
									}}
									onSlideChangeTransitionStart={() => {
										productSwiperThumbs.slideTo(productSwiper.activeIndex);
									}}
								>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__products-body'>
											<h2 className='home__products-title title'>
												Продукция
												<br />
												<span className='gold'>U-KG Holding</span>
											</h2>
											<div className='home__products-descr'>
												<p>
													Компании холдинга работают на всех этапах
													производства. Начиная с добычи рассивного золота,
													получения шливового золота из песков, передачи золота
													на кыргызский аффинажный завод (который имеет
													аккредитацию на LBMA Лондонская биржа драгоценных
													металлов), где происходит очистка золота от примесей.
												</p>
												<p>
													В результате чего мы получаем слитки до 1 кг с
													чистотой 99.99%.
												</p>
											</div>
											<button className='home__products-btn button button_gold'>
												Производство онлайн
											</button>
										</div>
										<div className='home__products-img'>
											<picture>
												<img
													src={homeProductsGoldReflection}
													alt='gold_reflection'
												/>
											</picture>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='home__products-slider'>
									<Swiper
										modules={[A11y, Thumbs]}
										observer
										observeParents
										watchSlidesProgress
										onSwiper={setProductSwiperThumbs}
										slidesPerView={5}
										speed={1000}
										spaceBetween={27}
										className='home__products-thumbnails'
										wrapperTag='ul'
										breakpoints={{
											0: {
												slidesPerView: 'auto',
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
											1300: {
												slidesPerView: 5,
												spaceBetween: 27,
											},
										}}
										onSlideChangeTransitionStart={() => {
											productSwiper.slideTo(productSwiperThumbs.activeIndex);
										}}
									>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide1} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide2} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide3} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide4} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide1} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide2} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide3} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide className='swiper-slide' tag='li'>
											<div className='home__products-thumbnails--wrapper'>
												<img src={homeProductsSlide4} alt='product' />
												<div className='home__products-slider--hover'>
													<h3>Заголовок</h3>
													<span>
														В результате чего мы получаем слитки до 1 кг с
														чистотой 99.99%.
													</span>
												</div>
											</div>
										</SwiperSlide>
									</Swiper>
									<div className='home__products-slider--prev'>
										<img src={sliderPrev} alt='slider-prev' />
									</div>
									<div className='home__products-slider--next'>
										<img src={sliderNext} alt='slider-next' />
									</div>
									<div className='home__products-slider--pagination'></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='home__token'>
					<div className='home__container'>
						<div className='home__token-wrapper'>
							<div className='home__token-img'>
								<picture>
									<source srcSet={homeTokenMob} media='(max-width: 480px)' />
									<img src={homeToken} alt='token' />
								</picture>
							</div>
							<div className='home__token-body'>
								<div className='home__token-textup gold'>Собственный токен</div>
								<div className='home__token-title title'>
									CRYPTO
									<br />
									GOLD
									<span className='gold'>TOKEN</span>
								</div>
								<div className='home__token-text'>
									<p>
										В целях скорейшей реализации всех планов “U-KG Holding” LLC
										выпустил цифровой актив “CG Token”. Он является аналогом
										цифровой акции компании, приобретая который вы становитесь
										совладельцем реальной компании.
									</p>

									<p>
										По мере добычи золота и его продажи, компания выкупает токен
										на бирже. В будущем CG токен можно будет обменивать на
										золотые слитки, изделия, или с помощью его участвовать в
										программах лояльности и промоушенах.
									</p>
								</div>
								<button className='button button_transparent home__token-btn'>
									<div>
										<span>Купить токен</span>
									</div>
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='home__offer'>
					<img
						className='home__offer-img'
						src={promoMountains}
						alt='Предложение для инвесторов'
					/>
					<div className='home__container'>
						<div className='home__offer-title title'>
							Предложение
							<br />
							<span className='gold'>Для инвесторов</span>
						</div>
						<div className='home__offer-wrapper'>
							<div className='home__offer-body'>
								<div className='home__offer-body--wrapper'>
									<ul className='home__offer-list'>
										<li>
											<img
												src={homeOffer1}
												alt='Инвестиционные пулы 6 - 18 месяцев'
											/>
											<span>Инвестиционные пулы:</span>
											<span className='gold'>6 - 18 месяцев</span>
										</li>
										<li>
											<img
												src={homeOffer2}
												alt='Проценты доходности 7 -20% в месяц'
											/>
											<span>Инвестиционные пулы:</span>
											<span className='gold'>7 -20% в месяц</span>
										</li>
										<li>
											<img
												src={homeOffer3}
												alt='Инвестирование и получение прибыли Через CG TOKEN'
											/>
											<span>Инвестирование и получение прибыли:</span>
											<span className='gold'>Через CG TOKEN</span>
										</li>
										<li>
											<img
												src={homeOffer4}
												alt='Начисления прибыли Ежедневно'
											/>
											<span>Начисления прибыли:</span>
											<span className='gold'>Ежедневно</span>
										</li>
										<li>
											<img
												src={homeOffer5}
												alt='Вывод прибыли и партнерских бонусов Без ограничения'
											/>
											<span>Вывод прибыли и партнерских бонусов:</span>
											<span className='gold'>Без ограничения</span>
										</li>
										<li>
											<img
												src={homeOffer6}
												alt='НоМинимальная сумма инвестиции ОТ 1 CG ТОКЕНА'
											/>
											<span>Номинимальная сумма инвестиции:</span>
											<span className='gold'>ОТ 1 CG ТОКЕНА</span>
										</li>
									</ul>
								</div>
							</div>
							<div className='home__offer-calc'>
								<div className='home__offer-calc--title'>
									КАЛЬКУЛЯТОР <span className='gold'>ДОХОДНОСТИ</span>
								</div>
								<div className='home__offer-calc--inner'>
									<ul className='home__offer-calc--list'>
										<li className='home__offer-calc--item'>
											<label htmlFor='pool'>Инвестиционный пул</label>
											<Select
												classNamePrefix='calc-list'
												onChange={onChange}
												value={getValue()}
												className='form'
												options={calcOptions}
												isSearchable={false}
											/>
										</li>
										<li className='home__offer-calc--item'>
											<label htmlFor='sum'>Сумма инвестиций</label>
											<div className='home__offer-calc--item---line'>
												<input
													autoComplete='off'
													type='text'
													name='sum'
													value={calcSum}
													onChange={handleChange}
													placeholder='10 000'
													className='input'
													maxLength='7'
												/>
												<span>$</span>
											</div>
										</li>
									</ul>
									<div className='home__offer-calc--result'>
										<div className='home__offer-calc--result---wrapper'>
											<div className='home__offer-calc--result---month'>
												<h3>Ваш ежемесячный доход</h3>
												<div>
													<span>{Math.round(calcMonth.value)}$</span>
													<span>{calcMonth.procent}%</span>
												</div>
											</div>
											<div className='home__offer-calc--result---all'>
												<h3 className='gold'>Ваш общий доход</h3>
												<div>
													<span className='gold'>
														{Math.round(calcAll.value)}$
													</span>
													<span className='gold'>{calcAll.procent}%</span>
												</div>
												<span className='gold h-4 block'>
													{calcPrize && <>+ золотой слиток U-KG HOLDING</>}
												</span>
											</div>
										</div>
									</div>
								</div>
								<button className='home__offer-calc--button button button_gold'>
									Инвестировать
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className='home__guarantees'>
					<img
						src={homeGuaranteesBg}
						alt='bg-guar'
						className='home__guarantees-bg'
					/>
					<div className='home__container'>
						<div className='home__guarantees-title title'>
							Гарантия для <span className='gold'>инвесторов</span>
						</div>
						<ul className='home__guarantees-list'>
							<li className='home__guarantees-item-gold'>
								<div className='home__guarantees-item--wrapper'>
									<img
										src={homeGuaranteesList1}
										alt='Наличие производственных мощностей!'
									/>
									<span>Наличие производственных мощностей!</span>
								</div>
							</li>
							<li className='home__guarantees-item'>
								<img
									src={homeGuaranteesList2}
									alt='Легальность и законность всех наших компаний!'
								/>
								<span>Легальность и законность всех наших компаний!</span>
							</li>
							<li className='home__guarantees-item-gold'>
								<div className='home__guarantees-item--wrapper'>
									<img
										src={homeGuaranteesList3}
										alt='Криптовалютный актив подтвержденный реальным золотом'
									/>
									<span>
										Криптовалютный актив подтвержденный реальным золотом
									</span>
								</div>
							</li>
							<li className='home__guarantees-item'>
								<img
									src={homeGuaranteesList4}
									alt='Международная деятельность холдинга лицензии на добычу золота'
								/>
								<span>
									Международная деятельность холдинга лицензии на добычу золота
								</span>
							</li>
							<li className='home__guarantees-item-gold'>
								<div className='home__guarantees-item--wrapper'>
									<img
										src={homeGuaranteesList5}
										alt='CG токен торгуется на криптовалютной бирже'
									/>
									<span>CG токен торгуется на криптовалютной бирже</span>
								</div>
							</li>
							<li className='home__guarantees-item'>
								<img
									src={homeGuaranteesList6}
									alt='Выгодные условия для инвесторов'
								/>
								<span>Выгодные условия для инвесторов</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='home__roadmap'>
					<div className='home__container'>
						<div className='home__roadmap-wrapper'>
							<div className='home__roadmap-img'>
								<picture>
									<source
										media='(max-width: 479.98px)'
										srcSet={homeRoadmapMob}
									/>
									<img src={homeRoadmap} alt='Дорожная Карта' />
								</picture>
							</div>
							<div className='home__roadmap-title title'>
								Дорожная
								<br />
								<span className='gold'>Карта</span>
							</div>
							<div className='home__roadmap-body'>
								<Swiper
									observer
									observeParents
									modules={[A11y, Thumbs]}
									thumbs={{ swiper: roadmapSwiperThumbs }}
									onSwiper={setRoadmapSwiper}
									slidesPerView={1}
									spaceBetween={20}
									speed={1000}
									watchSlidesProgress
									slideToClickedSlide
									className='home__roadmap-slider'
									wrapperTag='ul'
									onSlideChangeTransitionStart={() => {
										roadmapSwiperThumbs.slideTo(roadmapSwiper.activeIndex);
									}}
									// onBeforeInit={() => {
									// 	let sliderTitles = document.querySelectorAll(
									// 		'.home__roadmap-slider--title'
									// 	);

									// 	sliderTitles.forEach(sliderTitle => {
									// 		sliderThumbnails.push(sliderTitle.innerHTML);
									// 	});
									// }}
									// pagination={{
									// 	el: '.home__roadmap-slider--pagination',
									// 	clickable: true,
									// 	bulletActiveClass: 'home__roadmap-slider--thumbnail-active',
									// 	renderBullet: (index, className) => {
									// 		return (
									// 			'<div class="home__roadmap-slider--thumbnail ' +
									// 			className +
									// 			'">' +
									// 			sliderThumbnails[index] +
									// 			'</div>'
									// 		);
									// 	},
									// 	dynamicBullets: true,
									// }}
									breakpoints={{
										0: {
											spaceBetween: 20,
											slidesPerView: 1.1,
										},
										768: {
											slidesPerView: 1,
											spaceBetween: 85,
										},
									}}
								>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__roadmap-slider--title gold'>2019</div>
										<div className='home__roadmap-slider--text'>
											<p>
												Холдинг компаний по добыче и обогащению
												золото-полиметаллических руд. В состав холдинга входят 5
												лицензированных компаний, которые занимаются добычей
												золота и разработкой месторождений с общим запасом
												золота 72 тыс. кг.
											</p>
											<p>
												Мы являемся одним из крупных игроков на международном
												рынке драгоценных металлов. Тому подтверждением являются
												договора с Конго, Мексикой, Венгрией и другими
												европейскими странами.
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__roadmap-slider--title gold'>2020</div>
										<div className='home__roadmap-slider--text'>
											<p>
												Холдинг компаний по добыче и обогащению
												золото-полиметаллических руд. В состав холдинга входят 5
												лицензированных компаний, которые занимаются добычей
												золота и разработкой месторождений с общим запасом
												золота 72 тыс. кг.
											</p>
											<p>
												Мы являемся одним из крупных игроков на международном
												рынке драгоценных металлов. Тому подтверждением являются
												договора с Конго, Мексикой, Венгрией и другими
												европейскими странами.
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__roadmap-slider--title gold'>2021</div>
										<div className='home__roadmap-slider--text'>
											<p>
												Холдинг компаний по добыче и обогащению
												золото-полиметаллических руд. В состав холдинга входят 5
												лицензированных компаний, которые занимаются добычей
												золота и разработкой месторождений с общим запасом
												золота 72 тыс. кг.
											</p>
											<p>
												Мы являемся одним из крупных игроков на международном
												рынке драгоценных металлов. Тому подтверждением являются
												договора с Конго, Мексикой, Венгрией и другими
												европейскими странами.
											</p>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='home__roadmap-slider--title gold'>2022</div>
										<div className='home__roadmap-slider--text'>
											<p>
												Холдинг компаний по добыче и обогащению
												золото-полиметаллических руд. В состав холдинга входят 5
												лицензированных компаний, которые занимаются добычей
												золота и разработкой месторождений с общим запасом
												золота 72 тыс. кг.
											</p>
											<p>
												Мы являемся одним из крупных игроков на международном
												рынке драгоценных металлов. Тому подтверждением являются
												договора с Конго, Мексикой, Венгрией и другими
												европейскими странами.
											</p>
										</div>
									</SwiperSlide>
								</Swiper>
								<Swiper
									modules={[A11y, Thumbs]}
									observer
									observeParents
									watchSlidesProgress
									onSwiper={setRoadmapSwiperThumbs}
									slidesPerView={'auto'}
									spaceBetween={142}
									speed={1000}
									className='home__roadmap-slider--pagination'
									wrapperTag='ul'
									breakpoints={{
										0: {
											spaceBetween: 92,
										},
										768: {
											spaceBetween: 122,
										},
										992: {
											spaceBetween: 142,
										},
									}}
									onSlideChangeTransitionStart={() => {
										roadmapSwiper.slideTo(roadmapSwiperThumbs.activeIndex);
									}}
								>
									<SwiperSlide
										className='swiper-slide home__roadmap-slider--thumbnail'
										tag='li'
									>
										2019
									</SwiperSlide>
									<SwiperSlide
										className='swiper-slide home__roadmap-slider--thumbnail'
										tag='li'
									>
										2020
									</SwiperSlide>
									<SwiperSlide
										className='swiper-slide home__roadmap-slider--thumbnail'
										tag='li'
									>
										2021
									</SwiperSlide>
									<SwiperSlide
										className='swiper-slide home__roadmap-slider--thumbnail'
										tag='li'
									>
										2022
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className='home__news'>
					<div className='home__container'>
						<div className='home__news-wrapper'>
							<div className='home__news-title title'>
								Последние &nbsp;
								<span className='gold'>Новости</span>
							</div>
							<div className='home__news-slider--navigation'>
								<div className='home__news-slider--prev'>
									<img src={sliderPrev} alt='prev' />
								</div>
								<div className='home__news-slider--next'>
									<img src={sliderNext} alt='next' />
								</div>
							</div>
							<Swiper
								observer
								observeParents
								modules={[A11y, Navigation]}
								slidesPerView={2}
								spaceBetween={22}
								speed={1000}
								className='home__news-slider'
								wrapperTag='ul'
								watchSlidesProgress
								navigation={{
									prevEl: '.home__news-slider--prev',
									nextEl: '.home__news-slider--next',
								}}
								breakpoints={{
									0: {
										spaceBetween: 20,
										slidesPerView: 1.1,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 158,
									},
								}}
							>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='home__news-slider--date'>
										10 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='home__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='home__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='home__news-slider--date'>
										9 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='home__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='home__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='home__news-slider--date'>
										11 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='home__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='home__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
							</Swiper>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Home;
