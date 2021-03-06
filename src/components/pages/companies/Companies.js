// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper';
// Media
import {
	companiesBg1,
	companiesBg2,
	companiesList1,
	companiesList2,
	companiesList3,
	companiesList4,
	companiesList5,
	promoMountains,
	sliderNext,
	sliderPrev,
} from '../../../img/images.js';
// Styles
import './companies.scss';
import {Helmet} from "react-helmet";

const Companies = () => {
	return (
		<div className='wrapper'>
		<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main className='page partners'>
				<Breadcrumbs page='Компании-партнеры' />
				<div className='partners__main'>
					<ul className='partners__list'>
						<li className='partners__item'>
							<div className='partners__container'>
								<div className='partners__item-wrapper'>
									<div className='partners__item-img'>
										<img src={companiesList1} alt='li1' />
									</div>
									<div className='partners__item-body'>
										<div className='partners__item-title gold'>
											Ltd «Аян-инвест» (Ag+An)
										</div>
										<div className='partners__item-text'>
											<p>
												Была создана в 2015 году. В<b>2017 году Гребенюк А,В</b>
												приобрел 75% уставного капитала Ltd «Аян-инвест» и в
												октябре 2017 года компания получила лицензию на
												<b>площади «Айджыйло»</b> для проведения геолого
												разведки и добыче полиметаллов и приобретает
												Корпоративные права Месторождение «Сохское « рассыпное
												золото.
											</p>
											<p>
												Общий депозит составил 150600,8 унций золота. Директор
												Салиев Куштарбек Джусупбекович - Директор ОсОО «Аян
												Инвест, член правления U-Kg Holdsng опыт работы в
												горнорудном комплексе более 10 лет.
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className='partners__item'>
							<div className='partners__container'>
								<div className='partners__item-wrapper'>
									<div className='partners__item-img'>
										<img src={companiesList2} alt='li2' />
									</div>
									<div className='partners__item-body'>
										<div className='partners__item-title gold'>
											Ltd «Uranium-KG»
										</div>
										<div className='partners__item-text'>
											<p>
												Была создана в декабре 2017 года и приобрела 80%
												компании «МИЯ» ltd и лицензионную площадь «Бейрутская «
												на золото полиметаллические руды . Были завершены
												геологоразведочные работы 2019 году. Из-за эпидении
												COVID-19, восстановительные и добычные работы
												возобновлены только в сентябре 2021 года. Депозит по
												золоту составил 2900 кг или 93247.5 унций золота и
												завершит отработку в октябре 2023 года .
											</p>
											<ul>
												<li>
													<b>В 2019 году компания подписала</b> Опционное
													соглашения на приобретении 100% доли уставного фонда
													компании «Базис-Голд» которая владеет лицензионными
													площадями «Уланская « и Северо восточный Улан с общим
													депозитом по золоту 4800 кг или 154340,8 унций золота.
												</li>
												<li>
													<b>В августе 2021</b> году компания возобновила работы
													на лицензионных площадях «Уланская» и «Северо
													восточный Улан» и планирует в марте 2022 года
													приступить к добычным работам и выйти на показатели
													120 кг или 3858,5 унций золота в месяц и завершить
													отработку месторождения в 2025 году.
												</li>
												<li>
													<b>Ltd «Uranium-KG (An+Ag)</b> – подписала соглашение
													на поставку Филиалом Акционерного общества
													«Кыргызалтын» на выполнение работ с ноября 2021 года
													«Об оказании услуг на проведение Аффинажных работ
													«Поставка сплава «ДАРЕ» золото в объеме 24115.7 в
													месяц с рудников Компания приступила к работам на
													добычу золота в октябре 2021 и планирует довести
													добычу до 2022 года до 1200 кг в год. MAPRIMAC, S.A.
													de C.V. Мексика, где компания выполняет совместные
													работы по добыче золота на лицензионных площадях.
												</li>
											</ul>
											<p>
												Директор Гребенюк Виктор с опытом 10 лет в
												горно-промышленном комплексе
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className='partners__item'>
							<img src={companiesBg1} alt='bg' className='partners__item-bg' />
							<div className='partners__container'>
								<div className='partners__item-wrapper'>
									<div className='partners__item-img'>
										<img src={companiesList3} alt='li3' />
									</div>
									<div className='partners__item-body'>
										<div className='partners__item-title gold'>
											Ltd «Полиметалы МГТ»
										</div>
										<div className='partners__item-text'>
											<p>
												Была создана в 2017 году. Учредитель - Минбаева Гульжан
												Турсуновна Компания до декабря 2019 года выполняла
												подрядные работы на лицензионных площадях в Монголии и
												Венгрии.
											</p>
											<ul>
												<li>
													<b>После начала работ в 2021 году</b>, совместно с
													компанией “ ООО Майнинг Ресурс”, приступила к работам
													на Лицензионной площади «участок Торпок Тушту Жаллал-
													Абатская область Чаткальский район». В октябре 2021
													года «Management company «U-Kg Holding» и ооо «Майнинг
													Ресурс» подписала Опционное соглашение о приобретении
													75% Уставного капитала компании ооо «Майнинг Ресурс.
													Общий депозит по золоту составил до 14000кг или
													450160,7 унций золота.
												</li>
												<li>
													<b>«ООО Полиметаллы МГТ»</b> – разработала и
													приступила к внедрению на территории Кыргызской
													республику Проект «Обеспечения горно добывающих
													компаний работающих на проектах по добыче
													золото-полиметаллических руд до 2023 года» в объеме до
													220 единиц автомобилей и механизмов на сумму до 20 млн
													долларов.
												</li>
												<li>
													<b>Данная техника будет работать</b> на лицензионных
													площадях с депозитом по золоту до 110 тон.или
													3215434,083 унций золота. Программа предусматривает
													лизинговое обеспечение с участием
													Российско-Кыргызского Фонда Развитие.
												</li>
												<li>
													<b>
														Данная программа обеспечит отработку месторождений
														до периода до 2031 года.
													</b>
												</li>
											</ul>
											<p>
												Учредитель Минбаева Гульжан Турсуновна передала- Ltd
												«Полиметалы МГТ» в управление U-Kg Holdsng
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className='partners__item'>
							<div className='partners__container'>
								<div className='partners__item-wrapper'>
									<div className='partners__item-img'>
										<img src={companiesList4} alt='li4' />
									</div>
									<div className='partners__item-body'>
										<div className='partners__item-title gold'>
											Ltd «Геостар плюс»
										</div>
										<div className='partners__item-text'>
											<p>
												Была создана в 2017 году и вошла в Холдинг для
												объединения усилий по отработке месторождений золота
												«Копчигай западный, «Копчигай центральное», »Копчигай
												Восточное» и «Дельта». С общим запасом 17 000 кг.
											</p>
											<ul>
												<li>
													<b>После решения Государственной комиссией</b> по
													запасам от 16 декабря 2019 года учесть в
													государственном балансе за ОсОО «Геостарт плюс запасы
													на участке «Капчигай-Западный» с балансовыми запасами
													золота- 439.7» Были проведены дополнительные
													уточняющие работы где по итогам было оценено, что
													депозит по золоту этих площадей может составить до 8
													500 кг.
												</li>
												<li>
													<b>В августе 2021</b> года работы были возобновлены и
													сегодня выполняются настроечные работы оборудования
													механизмов по запуску проекта «Дельта», что позволит
													выйти на добычу до 180 кг в месяц с сроком отработки
													до 2023 года.
												</li>
												<li>
													<b>Работы по проекту «Копчигай западный»</b>
													планируется завершить до 2027 года, а проект «Копигай
													центральный» 2028 год.
												</li>
											</ul>
											<p>
												<b>Директор Касымбеков Рассул 40 лет работы</b> в
												геологоразведке. Из них 35 лет на руководящих
												должностях. Заслуженный геолог республики.
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li className='partners__item'>
							<img src={companiesBg2} alt='bg2' className='partners__item-bg' />
							<div className='partners__container'>
								<div className='partners__item-wrapper'>
									<div className='partners__item-img'>
										<img src={companiesList5} alt='li5' />
									</div>
									<div className='partners__item-body'>
										<div className='partners__item-title gold'>
											ООО «Бикомпакт»
										</div>
										<div className='partners__item-text'>
											<p>
												Было зарестрировано в 2013 году для отработке
												месторождение «Среднее Карасу» – Первая постановка на
												Государственные баланс запасов золота золота- 159.7 кг
												». И первое проведение добычных работ что позволило
												заявить о перспективности Таш-кумырского рудного узла
												где запасы оцениваются до 25 000 кг или 803858,5 унций
												золота
											</p>
											<ul>
												<li>
													<b>В декабре 2019 года</b> U-Kg Holdsng и ООО «
													Бикомпакт» подписали опционное соглашение о покупки
													холдингом 100% доли в уставном фонде ООО «Бикомпакт» и
													начале работ месторождение Карасу Среднее участок
													«Терметаш» и Кок Кия Левый Берег. Работы были
													остановлены по причине COViD 19 и возобновлены в
													августе 2021 года. Проведены восстановительные работы
													и монтаж промывочного оборудования начаты
													пуско-наладочные работы. Начало добычных работ в
													средине ноября 2021 года. Производительность будет
													доведена 100 кг в месяц в марте 2022 года.
												</li>
											</ul>
											<p>
												<b>Директор Буянов Сергей Викторович</b> Геолог 40 лет
												работы в том числе на руководящих областях в горно
												промышленном комплексе. Заслуженый геолог республики,
												почетный гражданин города Каштумыра Кыргызская
												республика. Призер чемпионата мира по тяжелой атлетики
												на чемпионате мира 1982года.
											</p>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div className='partners__news'>
					<img
						src={promoMountains}
						alt='mountains'
						className='partners__news-bg'
					/>
					<div className='partners__container'>
						<div className='partners__news-wrapper'>
							<div className='partners__news-title title'>
								Последние&nbsp;
								<span className='gold'>Новости</span>
							</div>
							<div className='partners__news-slider--navigation'>
								<div className='partners__news-slider--prev'>
									<img src={sliderPrev} alt='prev' />
								</div>
								<div className='partners__news-slider--next'>
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
								className='partners__news-slider'
								wrapperTag='ul'
								watchSlidesProgress
								navigation={{
									prevEl: '.partners__news-slider--prev',
									nextEl: '.partners__news-slider--next',
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
									<div className='partners__news-slider--date'>
										10 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='partners__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='partners__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='partners__news-slider--date'>
										9 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='partners__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='partners__news-slider--descr'>
										Приветствуем Вас, друзья и партнеры компании. Сегодня -
										знаменательная дата! Мы готовы презентовать вам то, о чем вы
										так много слышали и уже так много знаете - новый,
										улучшенный, маркетинг компании!
									</div>
								</SwiperSlide>
								<SwiperSlide className='swiper-slide' tag='li'>
									<div className='partners__news-slider--date'>
										11 ФЕВРАЛЯ 2021, 16:37
									</div>
									<div className='partners__news-slider--title'>
										ВСТРЕЧАЙТЕ НОВЫЙ МАРКЕТИНГ
									</div>
									<div className='partners__news-slider--descr'>
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

export default Companies;
