import { Link } from 'react-router-dom';
import LightGallery from 'lightgallery/react';
import { Helmet } from 'react-helmet';

// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
// Media
import {
	productionBlock1,
	productionBlock2,
	productionBlock2Bg,
	productionBlock2Bg2,
	productionBlock3Bg,
	productionBlock3List1,
	productionBlock3List2,
	productionBlock3List3,
	productionBlock3List4,
	productionBlock3List5,
	productionBlock3List6,
	productionBlock4,
	productionBlock4Bg,
	productionBlock4Bg2,
	productionBlock5Bg,
	productionBlock5List1,
	sliderNext,
	sliderPrev,
} from '../../../img/images.js';
// Styles
import './production.scss';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

const Production = () => {
	return (
		<div className='wrapper'>
			<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page production'>
				<Breadcrumbs page='Производство' />
				<div className='production__promo'>
					<div className='production__container'>
						<div className='production__promo-wrapper'>
							<div className='production__promo-title title'>
								Производство
								<br />
								<span className='gold'>U-KG Holding</span>
							</div>
							<div className='production__promo-body'>
								<div className='production__promo-text'>
									<p>
										Золото – металл один из первых, ставших известным людям.
										Благодаря красоте и редкости его называют драгоценным,
										используют в финансовой и ювелирной деятельности.
									</p>

									<p>
										Такие свойства, как инертность, пластичность, высокая тепло-
										и электропроводность, позволяют применять золото в
										электронной, химической промышленности, медицине и
										стоматологии.
									</p>

									<p>
										Есть пять методов добычи золота, основной из них – промывка
										россыпей. Начинается все с геологоразведочных работ, затем
										снимают пустую породу и разрабатывают золотосодержащие
										пласты. После этого начинается промывка. Осевший золотой
										песок вынимают и отправляют на обогащение – аффинаж, после
										которого можно отливать слитки.
									</p>
								</div>
							</div>
							<div className='production__promo-img'>
								<img src={productionBlock1} alt='proizvodstvo_block1' />
							</div>
						</div>
					</div>
				</div>
				<div className='production__pressform'>
					<img
						className='production__pressform-bg'
						src={productionBlock2Bg}
						alt='b2-bg'
					/>
					<img
						className='production__pressform-bg2'
						src={productionBlock2Bg2}
						alt='b2-bg2'
					/>
					<div className='production__container'>
						<div className='production__pressform-wrapper'>
							<div className='production__pressform-img'>
								<img src={productionBlock2} alt='b2' />
							</div>
							<div className='production__pressform-body'>
								<div className='production__pressform-title title'>
									РАЗРАБОТКА ЛОКАЛЬНЫХ
									<br />
									<span className='gold'>МЕСТОРОЖДЕНИЙ</span>
								</div>
								<div className='production__pressform-text'>
									<p>
										Для разработки локальных месторождений золота, в
										соответствии с лицензионными условиями разработки участка,
										компанией подписываются документы с консолидирующим
										Заказчиком компанией “Полиметаллы МГТ”
									</p>
									<ul>
										<li>
											Лизинговый контракт на СПГ-технику (объемы, цены, сроки,
											залог запасов и лицензии участка).
										</li>
										<li>
											Связный контракт на поставку СПГ-топлива, с учетом
											загрузки техники, времени работы в сутки, маршрутов
											пробегов и технологических операций.
										</li>
										<li>
											Договор о гарантийном и сервисном обслуживании (сроки
											обязательных сервисных работ, тестовые работы, текущие
											ремонты, условия гарантии завода)
										</li>
										<li>
											Договор страхования техники и жизни работников ( зона
											работ, проект разработки, регламенты и сертификация работ,
											ОТ и ТБ).
										</li>
										<li>
											Договор о сертификации специалистов для работы с
											криожидкостями и СПГ-техникой, переподготовка для работы
											на СПГ-технике).
										</li>
										<li>
											Договоры с аффинажным заводом:
											<ul>
												<li>
													о сдач-приемке золоторудных материалов на аффинаж
												</li>
												<li>об оплате аффинированного металла.</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='production__ecosystem'>
					<img
						src={productionBlock3Bg}
						alt=''
						className='production__ecosystem-bg'
					/>
					<div className='production__container'>
						<div className='production__ecosystem-title title'>
							Этапы производства <br />
							<span className='gold'>U-KG Holding</span>
						</div>
						<div className='production__ecosystem-descr'>
							Компании холдинга работают на всех этапах производства. Начиная с
							добычи рассивного золота, получения шливового золота из песков,
							передачи золота на кыргызский Аффинажный завод, где происходит
							очистка золота от примесей. В результате чего мы получаем слитки
							до 1 кг с чистотой 99.99%.
						</div>
						<div className='production__ecosystem-text'>
							<p>
								Впоследствии это золото возможно реализовать Национальному Банку
								Кыргызстана или экспортировать по своему усмотрению.
							</p>
						</div>
						<ul className='production__ecosystem-list'>
							<li className='production__ecosystem-item-gold'>
								<div className='production__ecosystem-item--wrapper'>
									<img
										src={productionBlock3List1}
										alt='Наличие производственных мощностей!'
									/>
									<span>U-KG Holding</span>
								</div>
							</li>
							<li className='production__ecosystem-item'>
								<img
									src={productionBlock3List2}
									alt='Легальность и законность всех наших компаний!'
								/>
								<span>Добыча компаниями холдинга</span>
							</li>
							<li className='production__ecosystem-item-gold'>
								<div className='production__ecosystem-item--wrapper'>
									<img
										src={productionBlock3List3}
										alt='Криптовалютный актив подтвержденный реальным золотом'
									/>
									<span>Шлиховое золото</span>
								</div>
							</li>
							<li className='production__ecosystem-item'>
								<img
									src={productionBlock3List4}
									alt='Международная деятельность холдинга лицензии на добычу золота'
								/>
								<span>Получение золотого сплава ДАРЕ 92%</span>
							</li>
							<li className='production__ecosystem-item-gold'>
								<div className='production__ecosystem-item--wrapper'>
									<img
										src={productionBlock3List5}
										alt='CG токен торгуется на криптовалютной бирже'
									/>
									<span>
										Получение слитков с чистотой 99% на АК "Карабалтинском
										Государственном аффинажном заводе"
									</span>
								</div>
							</li>
							<li className='production__ecosystem-item'>
								<img
									src={productionBlock3List6}
									alt='Выгодные условия для инвесторов'
								/>
								<span>Реализация готовых слитков. Получение прибыли</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='production__representatives'>
					<img
						src={productionBlock4Bg}
						alt='bg4'
						className='production__representatives-bg'
					/>
					<img
						src={productionBlock4Bg2}
						alt='bg4-2'
						className='production__representatives-bg2'
					/>
					<div className='production__container'>
						<div className='production__representatives-wrapper'>
							<div className='production__representatives-body'>
								<div className='production__representatives-title title'>
									представители
									<br />
									<span className='gold'>производства</span>
								</div>
								<div className='production__representatives-text'>
									<p>
										Если у Вас остались какие-либо вопросы касательно
										производства нашего холдинга - смело обращайтесь к нашему
										представителю, который сможет проконсультировать Вас и
										ответить на вопросы.
									</p>

									<p>
										Помимо прочего, Вы можете оставить заявку на онлайн
										видеоконференцию с представителем холдинга, во время которой
										для Вас проведут экскурсию по производству и покажут
										некоторые из этапов технологических процессов.
									</p>
								</div>
							</div>
							<div className='production__representatives-img'>
								<img src={productionBlock4} alt='b4-img' />
							</div>
							<Link
								to='/contacts'
								className='production__representatives-btn button button_gold'
							>
								Связаться с представителем производства
							</Link>
						</div>
					</div>
				</div>
				<div className='production__gallery'>
					<img
						className='production__gallery-bg'
						src={productionBlock5Bg}
						alt='mountains'
					/>
					<div className='production__container'>
						<div className='production__gallery-title title'>
							Галерея&nbsp;
							<span className='gold'>Фотографий</span>
						</div>
						<div className='production__gallery-descr'>
							<span className='gold'>U-KG HOLDING</span> - это новые
							возможности, партнерство и условия, которых вы не видели на рынке
							инвестиционных компаний.
						</div>
						<Swiper
							observer
							observeParents
							modules={[A11y, Navigation]}
							slidesPerView={3}
							spaceBetween={30}
							speed={1000}
							className='production__gallery-slider'
							wrapperTag='ul'
							watchSlidesProgress
							navigation={{
								prevEl: '.production__gallery-slider--prev',
								nextEl: '.production__gallery-slider--next',
							}}
							breakpoints={{
								0: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 20,
								},
								992: {
									slidesPerView: 3,
									spaceBetween: 30,
								},
							}}
						>
							<SwiperSlide className='swiper-slide' tag='li'>
								<img src={productionBlock5List1} alt='li1' />
							</SwiperSlide>
							<SwiperSlide className='swiper-slide' tag='li'>
								<img src={productionBlock5List1} alt='li1' />
							</SwiperSlide>
							<SwiperSlide className='swiper-slide' tag='li'>
								<img src={productionBlock5List1} alt='li1' />
							</SwiperSlide>
							<SwiperSlide className='swiper-slide' tag='li'>
								<img src={productionBlock5List1} alt='li1' />
							</SwiperSlide>
							<SwiperSlide className='swiper-slide' tag='li'>
								<img src={productionBlock5List1} alt='li1' />
							</SwiperSlide>
						</Swiper>
						<div className='production__gallery-slider--navigation'>
							<div className='production__gallery-slider--prev'>
								<img src={sliderPrev} alt='slider-prev' />
							</div>
							<div className='production__gallery-slider--next'>
								<img src={sliderNext} alt='slider-next' />
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Production;
