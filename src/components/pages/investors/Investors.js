import { useState, useContext } from 'react';
import Select from 'react-select';
import DataContext from '../../../contexts/DataContext';
// Components
import Header from './../../header/Header';
import Footer from './../../footer/Footer';
import Breadcrumbs from './../../breadcrumbs/Breadcrumbs';
// Media
// Media
import {
	investorsBlock1,
	investorsBlock2,
	investorsBlock4Bottom,
	investorsBlock4Left,
	investorsBlock4Right,
	investorsBlock5,
	investorsBlock5Mobile,
	homeOffer1,
	homeOffer2,
	homeOffer3,
	homeOffer4,
	homeOffer5,
	homeOffer6,
	investorsBlock2Partner,
	investorsBlock2PartnerMob,
} from '../../../img/images.js';
// Styles
import './investors.scss';

const Investors = () => {
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

	return (
		<div className='wrapper'>
			<Header />

			<main className='page partner'>
				<Breadcrumbs page='Инвесторам' />
				<div className='partner__promo'>
					<img
						src={investorsBlock1}
						alt='promo-bg'
						className='partner__promo-img'
					/>
					<div className='partner__container'>
						<div className='partner__promo-wrapper'>
							<div className='partner__promo-body'>
								<div className='partner__promo-subtext gold'>
									золото всегда в цене
								</div>
								<h1 className='partner__promo-title'>
									Инвестиционное предложение
									<span className='gold'>от U-KG Holding </span>
								</h1>
								<button className='partner__promo-btn button button_gold'>
									Уникальное предложение
								</button>
							</div>
							<div className='partner__offer-body'>
								<div className='partner__offer-body--wrapper'>
									<ul className='partner__offer-list'>
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
						</div>
					</div>
				</div>
				<div className='partner__calc'>
					<div className='partner__container'>
						<div className='partner__calc-wrapper'>
							<div className='partner__offer-calc--result'>
								<div className='partner__offer-calc--result---wrapper'>
									<div className='partner__offer-calc--result---month'>
										<h3>Ваш ежемесячный доход</h3>
										<div>
											<span>{Math.round(calcMonth.value)}$</span>
											<span>{calcMonth.procent}%</span>
										</div>
									</div>
									<div className='partner__offer-calc--result---all'>
										<h3 className='gold'>Ваш общий доход</h3>
										<div>
											<span className='gold'>{Math.round(calcAll.value)}$</span>
											<span className='gold'>{calcAll.procent}%</span>
										</div>
										<span className='gold h-4 block'>
											{calcPrize && <>+ золотой слиток U-KG HOLDING</>}
										</span>
									</div>
								</div>
							</div>
							<div className='partner__offer-calc'>
								<div className='partner__offer-calc--title'>
									КАЛЬКУЛЯТОР <span className='gold'>ДОХОДНОСТИ</span>
								</div>
								<ul className='partner__offer-calc--list'>
									<li className='partner__offer-calc--item'>
										<label for='pool'>Инвестиционный пул</label>
										<Select
											classNamePrefix='calc-list'
											onChange={onChange}
											value={getValue()}
											className='form'
											options={calcOptions}
										/>
									</li>
									<li className='partner__offer-calc--item'>
										<label for='sum'>Сумма инвестиций</label>
										<div className='partner__offer-calc--item---line'>
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
							</div>
							<button className='partner__offer-calc--button button button_gold'>
								Инвестировать
							</button>
						</div>
					</div>
				</div>
				<div className='partner__specons'>
					<img
						className='partner__specons-bg'
						src={investorsBlock2}
						alt='bg-right'
					/>
					<div className='partner__container'>
						<div className='partner__specons-wrapper'>
							<div className='partner__specons-img'>
								<picture>
									<source
										media='(max-width: 767.98px)'
										srcSet={investorsBlock2PartnerMob}
									/>
									<img src={investorsBlock2Partner} alt='СПЕЦИАЛЬНЫЕ УСЛОВИЯ' />
								</picture>
							</div>
							<div className='partner__specons-body'>
								<div className='partner__specons-title title'>
									СПЕЦИАЛЬНЫЕ <span className='gold'>УСЛОВИЯ</span>
								</div>
								<div className='partner__specons-content'>
									<p>
										У каждого инвестора есть возможность проинвестировать в
										холдинг на прямую с возможностью заключения индивидуального
										договора на индивидуальных, приемлимых для обоих сторон
										условиях. Такая возможность доступна для инвесторов от 50
										000$.
									</p>

									<p>
										Для всех инвесторов от 50 000$ мы предлагаем индивидуальные
										возможности инвестирования. А именно:
									</p>
									<ul>
										<li>личная встреча с владельцем холдинга</li>
										<li>подписание индивидуального договора</li>
										<li>
											возможность стать представителем холдинга в СНГ, США и
											Европе.
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='partner__specons-footer'>
							<div className='partner__specons-footer--wrapper'>
								С инвесторами от 500 000$ мы готовы рассматривать индивидуальные
								условия, вплоть до возможности стать совладельцем одной из
								компаний.
							</div>
						</div>
						<a href='/' className='partner__specons-btn button button_gold'>
							Стать совладельцем
						</a>
					</div>
				</div>
				<div className='partner__guarantees'>
					<img
						src={investorsBlock4Left}
						alt='g-l-img'
						className='partner__guarantees-img--left'
					/>
					<img
						src={investorsBlock4Right}
						alt='g-r-img'
						className='partner__guarantees-img--right'
					/>
					<img
						src={investorsBlock4Bottom}
						alt='g-b-img'
						className='partner__guarantees-img--bottom'
					/>
					<div className='partner__container'>
						<div className='partner__guarantees-title title'>
							Гарантия для <span className='gold'>инвесторов</span>
						</div>
						<ul className='partner__guarantees-list'>
							<li className='partner__guarantees-item'>
								<img
									src={homeOffer1}
									alt='Наличие производственных мощностей!'
								/>
								<span>Наличие производственных мощностей!</span>
							</li>
							<li className='partner__guarantees-item'>
								<img
									src={homeOffer2}
									alt='Легальность и законность всех наших компаний!'
								/>
								<span>Легальность и законность всех наших компаний!</span>
							</li>
							<li className='partner__guarantees-item'>
								<img
									src={homeOffer3}
									alt='Криптовалютный актив подтвержденный реальным золотом'
								/>
								<span>
									Криптовалютный актив подтвержденный реальным золотом
								</span>
							</li>
							<li className='partner__guarantees-item'>
								<img
									src={homeOffer4}
									alt='Международная деятельность холдинга лицензии на добычу золота'
								/>
								<span>
									Международная деятельность холдинга лицензии на добычу золота
								</span>
							</li>
							<li className='partner__guarantees-item'>
								<img
									src={homeOffer4}
									alt='CG токен торгуется на криптовалютной бирже'
								/>
								<span>CG токен торгуется на криптовалютной бирже</span>
							</li>
							<li className='partner__guarantees-item'>
								<img src={homeOffer6} alt='Выгодные условия для инвесторов' />
								<span>Выгодные условия для инвесторов</span>
							</li>
						</ul>
					</div>
				</div>
				<div className='partner__token'>
					<div className='partner__container'>
						<div className='partner__token-wrapper'>
							<div className='partner__token-body'>
								<div className='partner__token-content'>
									СТАНЬТЕ СОВЛАДЕЛЬЦАМИ КРУПНОГО БИЗНЕСА ПРЯМО СЕЙЧАС!
									<br />
									<span className='gold'>
										СОЗДАЙТЕ СВОЕ БУДУЩЕЕ ВМЕСТЕ С U-KG HOLDING.
									</span>
								</div>
								<a href='/' className='partner__token-btn button button_gold'>
									Инвестировать
								</a>
							</div>
							<div className='partner__token-img'>
								<picture>
									<source
										media='(max-width: 480px)'
										srcSet={investorsBlock5Mobile}
									/>
									<img src={investorsBlock5} alt='partner-token' />
								</picture>
							</div>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default Investors;
