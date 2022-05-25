// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Media
import {
	tokenBlock1,
	tokenBlock2,
	tokenBlock2Btn,
	tokenBlock2List1,
	tokenBlock2List2,
	tokenBlock2List3,
	tokenBlock2List4,
	tokenBlock2List5,
	tokenBlock2List6,
	tokenBlock3,
	tokenBlock4Bg,
	tokenBlock4List1,
	tokenBlock4List2,
	tokenBlock4List3,
	tokenBlock4List4,
	tokenBlock4List5,
	tokenBlock4List6,
	tokenBlock4Line,
	promoMountains,
} from '../../../img/images.js';
// Styles
import './token.scss';
import {Helmet} from "react-helmet";
import { Link } from 'react-router-dom';

const Token = () => {
	return (
		<div class='wrapper'>
		<Helmet>
				<meta name='viewport' content='width=device-width' />
			</Helmet>
			<Header />

			<main class='page token'>
				<Breadcrumbs page='CG Token' />
				<div class='token__promo'>
					<img
						src={tokenBlock1}
						alt='b1-bg'
						class='token__promo-bg'
					/>
				</div>
				<div class='token__list'>
					<img
						src={tokenBlock2}
						alt='b2-bg'
						class='token__list-bg'
					/>
					<div class='token__container'>
						<div class='token__list-descr gold'>
							CG Token был разработан для масштабирования нашего холдинга и
							открытия новых возможностей для развития
						</div>
						<div class='token__list-text'>
							Его задача - решать ключевые проблемы взаимодействия инвестора и
							компаний-партнеров нашего холдинга. Благодаря токену для вас
							открывается возможность не только инвестировать в добычу золота на
							наших участков или производство, но и стать совладельцем одно из
							компаний.
						</div>
						<div class='token__list-table'>
							<ul class='token__list-table--wrapper'>
								<li>
									<span class='gold'>Токен прошел листинг</span>
									<span>на криптовалютной бирже BTC Alpha</span>
									<img src={tokenBlock2List1} alt='li1' />
								</li>
								<li>
									<span class='gold'>мгновенная покупка и продажа</span>
									<span>токена в торговых парах</span>
									<img src={tokenBlock2List2} alt='li2' />
								</li>
								<li>
									<span class='gold'>обширная экосистема</span>
									<span>Использование цифровых активов на базе TRON</span>
									<img src={tokenBlock2List3} alt='li3' />
								</li>
								<li>
									<span class='gold'>Низкая комиссия</span>
									<span>за транзакцию - всего 1 - 2 TRX</span>
									<img src={tokenBlock2List4} alt='li4' />
								</li>
								<li>
									<span class='gold'>Высокая производительность</span>
									<span>и моментальные переводы</span>
									<img src={tokenBlock2List5} alt='li5' />
								</li>
								<li>
									<span class='gold'>Кроссплатформенность токена</span>
									<span> Возможность добавить его в удобный вам кошелек</span>
									<img src={tokenBlock2List6} alt='li6' />
								</li>
							</ul>
						</div>
						<div class='token__list-inner'>
							<a href='/' class='token__list-btn button button_gold'>
								посмотреть курс токена
							</a>
							<img src={tokenBlock2Btn} alt='btn-bg' />
						</div>
					</div>
				</div>
				<div class='token__benefits'>
					<div class='token__container'>
						<div class='token__benefits-wrapper'>
							<div class='token__benefits-img'>
								<div class='token__benefits-img--wrapper'>
									<img src={tokenBlock3} alt='b3' />
								</div>
							</div>
							<div class='token__benefits-body'>
								<div class='token__benefits-title title gold'>
									Преимущества CG Token
								</div>
								<div class='token__benefits-text'>
									<p>
										<span class='gold'>CRYPTO GOLD TOKEN</span> - не просто
										открывает новые возможностей для всех инвесторов и
										партнеров, но и выводит деятельность холдинга на совершенно
										новый уровень безопасности для вас.
									</p>
									<p>
										<span class='gold'>ИНВЕСТИЦИИ</span> - наши пользователи не
										инвестируют в “воздух”. Вы становитесь владельцем токена,
										который подтвержден золотом на наших участках.
									</p>
									<p>
										<span class='gold'>ЦИФРОВОЙ АКТИВ CG</span> - в любой момент
										вы можете продать или купить цифровой актив CG на
										криптовалютной бирже, или у других партнеров холдинга. Мы
										никак не ограничиваем наших пользователей в транзакциях
									</p>
									<p>
										<span class='gold'>
											ОПТИМИЗИРОВАТЬ СВОИ ИНВЕСТИЦИОННЫЕ ПОРТФЕЛИ
										</span>
										<br />
										используя комбинацию инновационных цифровых технологий, а
										держателям токенов предоставляется возможность приумножить
										свои инвестиции.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='token__ecosystem'>
					<img
						src={tokenBlock4Bg}
						alt='bg-4'
						class='token__ecosystem-bg'
					/>
					<div class='token__container'>
						<div class='token__ecosystem-title title'>
							Экосистема <span class='gold'>U-KG Holding</span>
						</div>
						<div class='token__ecosystem-descr'>
							<span class='gold'>U-KG HOLDING</span> - это новые возможности,
							партнерство и условия, которых вы не видели на рынке
							инвестиционных компаний.
						</div>
						<div class='token__ecosystem-text'>
							<p>
								Таким образом новая модель организационной деятельности требуют
								определения и уточнения существенных финансовых и
								административных условий. Таким образом рамки и место обучения
								кадров обеспечивает широкому кругу (специалистов) участие в
								формировании существенных финансовых и административных условий.
							</p>
							<p>
								С другой стороны новая модель организационной деятельности
								играет важную роль в формировании позиций, занимаемых
								участниками в отношении поставленных задач. Идейные соображения
								высшего порядка, а также начало повседневной работы по
								формированию позиции влечет за собой процесс внедрения и
								модернизации форм развития.
							</p>
						</div>
						<ul class='token__ecosystem-list'>
							<li class='token__ecosystem-item-gold'>
								<div class='token__ecosystem-item--wrapper'>
									<img
										src={tokenBlock4List1}
										alt='Наличие производственных мощностей!'
									/>
									<span>Разработка собственного цифрового актива</span>
								</div>
							</li>
							<li class='token__ecosystem-item'>
								<img
									src={tokenBlock4List2}
									alt='Легальность и законность всех наших компаний!'
								/>
								<span>Листинг CG токена на криптовалютной бирже</span>
							</li>
							<li class='token__ecosystem-item-gold'>
								<div class='token__ecosystem-item--wrapper'>
									<img
										src={tokenBlock4List3}
										alt='Криптовалютный актив подтвержденный реальным золотом'
									/>
									<span>
										Запуск инвестиционных систем для инвесторов холдинга
									</span>
								</div>
							</li>
							<li class='token__ecosystem-item'>
								<img
									src={tokenBlock4List4}
									alt='Международная деятельность холдинга лицензии на добычу золота'
								/>
								<span>Открытие представительств в Азии, Европе, США</span>
							</li>
							<li class='token__ecosystem-item-gold'>
								<div class='token__ecosystem-item--wrapper'>
									<img
										src={tokenBlock4List5}
										alt='CG токен торгуется на криптовалютной бирже'
									/>
									<span>
										Покупка дополнительного оборудования для ускорения добычи
										ресурсов
									</span>
								</div>
							</li>
							<li class='token__ecosystem-item'>
								<img
									src={tokenBlock4List6}
									alt='Выгодные условия для инвесторов'
								/>
								<span>
									Подписание новых контрактов по реализации собственной
									продукции
								</span>
							</li>
						</ul>
						<div class='token__ecosystem-footer'>
							<img
								src={tokenBlock4Line}
								alt='bg-4'
								class='token__ecosystem-footer--bg'
							/>
							<div class='token__ecosystem-footer--descr'>
								"U-KG Holding" LLC возглавляет, управляет и руководит всеми
								участниками разработки, производства и реализации.
							</div>
							<div class='token__ecosystem-footer--table'>
								<div class='token__ecosystem-footer--table---wrapper'>
									<span class='gold'>
										Total Crypto Gold Token supply is limited to
									</span>
									<span class='gold'>250 000 000</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class='token__footer'>
					<img
						src={promoMountains}
						alt='mountains'
						class='token__footer-bg'
					/>
					<div class='token__container'>
						<div class='token__footer-title'>
							За нами будущее – присоединяйтесь!
						</div>
						<div class='token__footer-btns'>
							<Link to='/registration' class='token__footer-btn button button_gold'>
								Зарегистрируйтесь уже сейчас
							</Link>
							<Link to='/registration' class='token__footer-btn button button_transparent'>
								<div>
									<span>
										<span class='gold'>Станьте владельцем CG Token</span>
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Token;
