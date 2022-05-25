import { useState } from 'react';
import { Link } from 'react-router-dom';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Thumbs, EffectFade } from 'swiper';
// Components
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
// Media
import {
	aboutBlock1,
	aboutBlock2,
	aboutBlock3,
	aboutBlock3List1,
	aboutBlock3List2,
	aboutBlock3List3,
	aboutBlock3List4,
	aboutBlock3List5,
	promoMountains,
	sliderNext,
	sliderPrev,
} from '../../../img/images.js';
// Styles
import './about.scss';
import {Helmet} from "react-helmet";

const About = () => {
	const [aboutSwiper, setAboutSwiper] = useState(null);
	const [aboutSwiperThumbs, setAboutSwiperThumbs] = useState(null);

	return (
		<div className='wrapper'>
			<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page about'>
				<Breadcrumbs page='О компании' />
				<div className='about__promo'>
					<div className='about__container'>
						<div className='about__promo-wrapper'>
							<div className='about__promo-body'>
								<div className='about__promo-subtext gold'>О компании</div>
								<div className='about__promo-title title gold'>
									U-KG Holding
								</div>
								<div className='about__promo-descr'>
									Была создана как компания по управлению проектами, цель
									которых добыча золото полиметаллических руд в странах
									центральной Азии в 2017 году
								</div>
								<div className='about__promo-table'>
									<div className='about__promo-table--wrapper'>
										<span className='gold'>“U-KG Holding” LLC</span>
										<p>
											Создание холдинга предоставило новые возможности для уже
											существующих и работающих компаний-партнеров, а именно:
										</p>
										<ul>
											<li>Выход на международный рынок</li>
											<li>Внедрение новых технологий в производстве</li>
											<li>Получение современного оборудования</li>
											<li>
												Привлечение инвестиций для масштабации производства
											</li>
										</ul>
									</div>
								</div>
								<p>
									Создание холдинга позволило нам разработать собственный
									цифровой актив - <span className='gold'>CG Token</span>,
									который привязан к золотовалютным запасам находящимся на
									территории разрабатываемых рудников.
								</p>
								<Link
									to='/cgtoken'
									className='about__promo-btn button button_gold'
								>
									Подробнее о токене
								</Link>
							</div>
							<div className='about__promo-img'>
								<img src={aboutBlock1} alt='b1' />
							</div>
						</div>
					</div>
				</div>
				<div className='about__create'>
					<div className='about__container'>
						<div className='about__create-wrapper'>
							<div className='about__create-img'>
								<img src={aboutBlock2} alt='b2' />
							</div>
							<div className='about__create-body'>
								<div className='about__create-title title'>
									Создание
									<br />
									<span className='gold'>холдинга</span>
								</div>
								<div className='about__create-descr'>
									<span className='gold'>В марте 2018 года </span> состоялось
									собрание компаний о вхождении в Холдинг:
								</div>
								<div className='about__create-text'>
									<ul>
										<li>Ltd «Аян-инвест» (Ag+An)</li>
										<li>Ltd «Геостар плюс» (An + Ag)</li>
										<li>Ltd «Uranium-KG (An+Ag)</li>
										<li>Ltd «Полиметалы МГТ» (Аn +Аg)</li>
										<li>Ltd «Бикомпакт» (An+Ag)</li>
										<li>Ltd «Юр. Консульт. центр - Алекс и партнеры»</li>
									</ul>
								</div>
								<p>
									"U-KG Holding" LLC возглавляет, управляет и руководит всеми
									участниками разработки, производства и реализации.
								</p>
							</div>
						</div>
						<div className='about__create-footer'>
							<p>
								Участки «Капчигай», «Дельта», «Учкурук», «Среднекарасуйское»,
								«Каратор» являются месторождениями, с объёмом запасов шлихового
								золота от переработки которого Будет произведено 72 000 кг.
							</p>
							<p>
								Ознакомиться с подробной информацией о каждой из компаний и
								перспективах золотодобычи вы можете на специальной странице
							</p>
							<Link
								to='/companies'
								className='about__create-footer--btn button button_gold'
							>
								Подробнее о компаниях-партнерах
							</Link>
						</div>
					</div>
				</div>
				<div className='about__leaders'>
					<img src={aboutBlock3} alt='b3' className='about__leaders-bg' />
					<div className='about__container'>
						<div className='about__leaders-title title'>
							Познакомьтесь!
							<br />
							<span className='gold'>Наши руководители!</span>
						</div>
						<div className='about__leaders-wrapper'>
							<div className='about__leaders-body'>
								<Swiper
									observer
									observeParents
									modules={[A11y, Thumbs, EffectFade, Navigation]}
									thumbs={{ swiper: aboutSwiperThumbs }}
									onSwiper={setAboutSwiper}
									slidesPerView={1}
									watchSlidesProgress
									spaceBetween={22}
									speed={1000}
									slideToClickedSlide
									className='about__leaders-show'
									wrapperTag='ul'
									effect='fade'
									navigation={{
										prevEl: '.about__leaders-show--prev',
										nextEl: '.about__leaders-show--next',
									}}
									onSlideChangeTransitionStart={() => {
										aboutSwiperThumbs.slideTo(aboutSwiper.activeIndex);
									}}
								>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-show--body'>
											<div className='about__leaders-show--body---uptext'>
												Генеральный Директор «U-KG Holding» LLC
											</div>
											<div className='about__leaders-show--body---name gold'>
												Гребенюк Александр Викторович
											</div>
											<div className='about__leaders-show--body---descr'>
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
										</div>
										<div className='about__leaders-show--img'>
											<img
												src={aboutBlock3List1}
												alt='Гребенюк Александр Викторович'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-show--body'>
											<div className='about__leaders-show--body---uptext'>
												Генеральный Директор «U-KG Holding» LLC
											</div>
											<div className='about__leaders-show--body---name gold'>
												Гребенюк Александр Викторович
											</div>
											<div className='about__leaders-show--body---descr'>
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
										</div>
										<div className='about__leaders-show--img'>
											<img
												src={aboutBlock3List2}
												alt='Гребенюк Александр Викторович'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-show--body'>
											<div className='about__leaders-show--body---uptext'>
												Генеральный Директор «U-KG Holding» LLC
											</div>
											<div className='about__leaders-show--body---name gold'>
												Гребенюк Александр Викторович
											</div>
											<div className='about__leaders-show--body---descr'>
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
										</div>
										<div className='about__leaders-show--img'>
											<img
												src={aboutBlock3List3}
												alt='Гребенюк Александр Викторович'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-show--body'>
											<div className='about__leaders-show--body---uptext'>
												Генеральный Директор «U-KG Holding» LLC
											</div>
											<div className='about__leaders-show--body---name gold'>
												Гребенюк Александр Викторович
											</div>
											<div className='about__leaders-show--body---descr'>
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
										</div>
										<div className='about__leaders-show--img'>
											<img
												src={aboutBlock3List4}
												alt='Гребенюк Александр Викторович'
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-show--body'>
											<div className='about__leaders-show--body---uptext'>
												Генеральный Директор «U-KG Holding» LLC
											</div>
											<div className='about__leaders-show--body---name gold'>
												Гребенюк Александр Викторович
											</div>
											<div className='about__leaders-show--body---descr'>
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
										</div>
										<div className='about__leaders-show--img'>
											<img
												src={aboutBlock3List5}
												alt='Гребенюк Александр Викторович'
											/>
										</div>
									</SwiperSlide>
								</Swiper>
								<Swiper
									modules={[A11y, Thumbs]}
									observer
									observeParents
									watchSlidesProgress
									onSwiper={setAboutSwiperThumbs}
									slidesPerView={5}
									speed={1000}
									spaceBetween={76}
									className='about__leaders-thumbs'
									wrapperTag='ul'
									breakpoints={{
										0: {
											slidesPerView: 2,
											spaceBetween: 20,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 40,
										},
										992: {
											slidesPerView: 4,
											spaceBetween: 50,
										},
										1170: {
											slidesPerView: 5,
											spaceBetween: 76,
										},
									}}
									onSlideChangeTransitionStart={() => {
										aboutSwiper.slideTo(aboutSwiperThumbs.activeIndex);
									}}
								>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-thumbs--wrapper'>
											<img
												src={aboutBlock3List1}
												alt='Гребенюк Александр Викторович'
												className='about__leaders-thumbs--img'
											/>
											<div className='about__leaders-thumbs--tooltip'>
												<span className='gold'>
													Гребенюк Александр Викторович
												</span>
												<span>
													Ген. директор
													<br />
													Юр. консалт центра
													<br />
													«Александр и партнёры»
												</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-thumbs--wrapper'>
											<img
												src={aboutBlock3List2}
												alt='Гребенюк Александр Викторович'
												className='about__leaders-thumbs--img'
											/>
											<div className='about__leaders-thumbs--tooltip'>
												<span className='gold'>
													Гребенюк Александр Викторович
												</span>
												<span>
													Ген. директор
													<br />
													Юр. консалт центра
													<br />
													«Александр и партнёры»
												</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-thumbs--wrapper'>
											<img
												src={aboutBlock3List3}
												alt='Гребенюк Александр Викторович'
												className='about__leaders-thumbs--img'
											/>
											<div className='about__leaders-thumbs--tooltip'>
												<span className='gold'>
													Гребенюк Александр Викторович
												</span>
												<span>
													Ген. директор
													<br />
													Юр. консалт центра
													<br />
													«Александр и партнёры»
												</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-thumbs--wrapper'>
											<img
												src={aboutBlock3List4}
												alt='Гребенюк Александр Викторович'
												className='about__leaders-thumbs--img'
											/>
											<div className='about__leaders-thumbs--tooltip'>
												<span className='gold'>
													Гребенюк Александр Викторович
												</span>
												<span>
													Ген. директор
													<br />
													Юр. консалт центра
													<br />
													«Александр и партнёры»
												</span>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide className='swiper-slide' tag='li'>
										<div className='about__leaders-thumbs--wrapper'>
											<img
												src={aboutBlock3List5}
												alt='Гребенюк Александр Викторович'
												className='about__leaders-thumbs--img'
											/>
											<div className='about__leaders-thumbs--tooltip'>
												<span className='gold'>
													Гребенюк Александр Викторович
												</span>
												<span>
													Ген. директор
													<br />
													Юр. консалт центра
													<br />
													«Александр и партнёры»
												</span>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='about__leaders-navigation'>
									<div className='about__leaders-show--prev'>
										<img src={sliderPrev} alt='slider-prev' />
									</div>
									<div className='about__leaders-show--next'>
										<img src={sliderNext} alt='slider-next' />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='about__news'>
					<img
						src={promoMountains}
						alt='mountains'
						className='about__news-bg'
					/>
					<div className='about__container'>
						<div className='about__news-wrapper'>
							<div className='about__news-title title'>
								Последние
								<span className='gold'>Новости</span>
							</div>
							<div className='about__news-slider--navigation'>
								<div className='about__news-slider--prev'>
									<img src={sliderPrev} alt='prev' />
								</div>
								<div className='about__news-slider--next'>
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
								className='about__news-slider'
								wrapperTag='ul'
								watchSlidesProgress
								navigation={{
									prevEl: '.about__news-slider--prev',
									nextEl: '.about__news-slider--next',
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
									<div className='about__news-slider--date'>
										10 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='about__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='about__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='about__news-slider--date'>
										9 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='about__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='about__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='about__news-slider--date'>
										11 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='about__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='about__news-slider--descr'>
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

export default About;
