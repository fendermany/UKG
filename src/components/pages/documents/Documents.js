// Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Media
import {
	documentsBlock1,
	documentsBlock2,
	documentsBlock2Document,
	documentsBlock3,
	sliderNext,
	sliderPrev,
} from '../../../img/images.js';
// Styles
import './documents.scss';


const Documents = () => {
	return (
		<div className='wrapper'>
			<Header />

			<main className='page documents'>
				<Breadcrumbs page='Документы компании' />
				<div className='documents__promo'>
					<div className='documents__container'>
						<div className='documents__promo-wrapper'>
							<div className='documents__promo-body'>
								<h1 className='documents__promo-title'>
									Наши&nbsp;
									<br />
									<span className='gold'>Документы</span>
								</h1>
								<div className='documents__promo-descr'>
									<p>
										Деятельность U-KG Holding максимально прозрачна. Ниже вы
										можете увидеть часть сертификатов и лицензий, которые
										подтверждают надежность предприятия, проверенную многими
										структурами.
									</p>

									<p>
										Это очень важно, ведь добыча ценных металлов подлежит
										постоянному лицензированию. Мы проводим документацию всех
										наших компаний и производства в целом в соответствии к
										действующим нормам.
									</p>
								</div>
								<button className='documents__promo-btn button button_transparent'>
									<div>
										<span>
											<span className='gold'>
												МЫ ГОТОВЫ ПРЕДОСТАВИТЬ ВСЮ НЕОБХОДИМУЮ ДОКУМЕНТАЦИЮ
											</span>
										</span>
									</div>
								</button>
							</div>
							<div className='documents__promo-video promo-video'>
								<div className='promo-video__preview'>
									<img src={documentsBlock1} alt='promo' />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='documents__list'>
					<img src={documentsBlock2} alt='bg' className='documents__list-bg' />
					<div className='documents__container'>
						<div className='documents__list-wrapper'>
							<ul className='documents__list-body'>
								<li className='documents__list-item documents__list-item--photo'>
									<div className='documents__list-item--img'>
										<img src={documentsBlock2Document} alt='documents' />
									</div>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-item--inner'>
											<div className='documents__list-title'>
												БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
											</div>
											<div className='documents__list-descr'>
												Давно выяснено, что при оценке дизайна и композиции
												читаемый текст мешает сосредоточиться.
											</div>
											<a
												href='/'
												className='documents__list-btn button button_gold'
											>
												Открыть документ
											</a>
										</div>
									</div>
								</li>
								<li className='documents__list-item'>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-title'>
											БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
										</div>
										<div className='documents__list-descr'>
											Давно выяснено, что при оценке дизайна и композиции
											читаемый текст мешает сосредоточиться.
										</div>
										<a href='/' className='documents__list-btn button button_gold'>
											Открыть документ
										</a>
									</div>
								</li>
								<li className='documents__list-item'>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-title'>
											БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
										</div>
										<div className='documents__list-descr'>
											Давно выяснено, что при оценке дизайна и композиции
											читаемый текст мешает сосредоточиться.
										</div>
										<a href='/' className='documents__list-btn button button_gold'>
											Открыть документ
										</a>
									</div>
								</li>
							</ul>
							<ul className='documents__list-body-bottom'>
								<li className='documents__list-item'>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-title'>
											БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
										</div>
										<div className='documents__list-descr'>
											Давно выяснено, что при оценке дизайна и композиции
											читаемый текст мешает сосредоточиться.
										</div>
										<a href='/' className='documents__list-btn button button_gold'>
											Открыть документ
										</a>
									</div>
								</li>
								<li className='documents__list-item'>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-title'>
											БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
										</div>
										<div className='documents__list-descr'>
											Давно выяснено, что при оценке дизайна и композиции
											читаемый текст мешает сосредоточиться.
										</div>
										<a href='/' className='documents__list-btn button button_gold'>
											Открыть документ
										</a>
									</div>
								</li>
								<li className='documents__list-item'>
									<div className='documents__list-item--wrapper'>
										<div className='documents__list-title'>
											БАНКОВСКИЕ РЕКВИЗИТЫ U-KG Holding
										</div>
										<div className='documents__list-descr'>
											Давно выяснено, что при оценке дизайна и композиции
											читаемый текст мешает сосредоточиться.
										</div>
										<a href='/' className='documents__list-btn button button_gold'>
											Открыть документ
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className='documents__news'>
					<img
						src={documentsBlock3}
						alt='mountains'
						className='documents__news-bg'
					/>
					<div className='documents__container'>
						<div className='documents__news-wrapper'>
							<div className='documents__news-title title'>
								Последние&nbsp;
								<span className='gold'>Новости</span>
							</div>
							<div className='documents__news-slider--navigation'>
								<div className='documents__news-slider--prev'>
									<img src={sliderPrev} alt='prev' />
								</div>
								<div className='documents__news-slider--next'>
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
								className='documents__news-slider'
								wrapperTag='ul'
								watchSlidesProgress
								navigation={{
									prevEl: '.documents__news-slider--prev',
									nextEl: '.documents__news-slider--next',
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
									<div className='documents__news-slider--date'>
										10 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='documents__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='documents__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='documents__news-slider--date'>
										9 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='documents__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='documents__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='documents__news-slider--date'>
										11 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='documents__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='documents__news-slider--descr'>
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

export default Documents;
