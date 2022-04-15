import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';


import {cg, gold, gold3, poucheGold, angleDownSolid, calcGold} from '../../../img/images';

import './cabinetInvestments.scss';


export default function CabinetInvestments() {
	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<div className='cabinvest'>
							<div className='cabinvest__slider swiper'>
								<ul className='swiper-wrapper'>
									<li className='swiper-slide slide-gold'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
									<li className='swiper-slide slide-silver'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
									<li className='swiper-slide slide-gold'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
									<li className='swiper-slide slide-silver'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
									<li className='swiper-slide slide-gold'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
									<li className='swiper-slide slide-silver'>
										<div className='cabinvest__slider-top'>
											<span>Срок инвестиции</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-second'>
											<span>
												мин. инвестиция <span>от 50$</span>
											</span>
											<img src={poucheGold} alt='мин. инвестиция  от 50$' />
										</div>
										<div className='cabinvest__slider-third'>
											<span>Ежемесячная доходность</span>
											<span>125</span>
										</div>
										<div className='cabinvest__slider-fourth'>
											<span>Общая доходность</span>
											<span>100%</span>
										</div>
										<div className='cabinvest__slider-fifth'>
											<span></span>
											<button>Инвестировать</button>
										</div>
									</li>
								</ul>
							</div>
							<div className='cabinvest__calc'>
								<div className='cabinvest__calc-inputs'>
									<div className='cabinvest__calc-inputs--wrapper'>
										<div className='cabinvest__calc-title cabinet__title_36'>
											Калькулятор доходности
										</div>
										<div className='cabinvest__calc-list'>
											<div className='cabinvest__calc-item'>
												<div className='cabinvest__calc-subtitle'>
													Инвестиционный пул
												</div>
												<div className='cabinvest__calc-select'>
													18 месяцев - 20% ежемесячно
													<div className='cabinvest__calc-img'>
														<img
															src={angleDownSolid}
															alt='18 месяцев - 20% ежемесячно'
														/>
													</div>
												</div>
											</div>
											<div className='cabinvest__calc-item'>
												<div className='cabinvest__calc-subtitle'>
													Сумма инвестиций
												</div>
												<div className='cabinvest__calc-select'>
													10 000 $
													<div className='cabinvest__calc-img'>
														<img
															src={angleDownSolid}
															alt='18 месяцев - 20% ежемесячно'
														/>
													</div>
												</div>
											</div>
										</div>
										<button className='cabinvest__calc-button button button_gold'>
											Инвестировать
										</button>
									</div>
								</div>
								<div className='cabinvest__calc-result'>
									<div className='cabinvest__calc-result--wrapper'>
										<div className='cabinvest__calc-result--item'>
											<div className='cabinvest__calc-result--title'>
												Ваш ежемесячный доход
											</div>
											<div className='cabinvest__calc-result--body'>
												<span>278 000 $</span>
												<span>278 %</span>
											</div>
										</div>
										<div className='cabinvest__calc-result--item'>
											<div className='cabinvest__calc-result--title'>
												Ваш общий доход
											</div>
											<div className='cabinvest__calc-result--body'>
												<span>
													<span className='gold'>100 000 $</span>
												</span>
												<span>278 %</span>
											</div>
										</div>
										<div className='cabinvest__calc-result--footer'>
											<div>
												<span>
													<img src={calcGold} alt='Калькулятор доходности' />
												</span>
											</div>
											<span className='gold'>Золотой слиток U-KG HOLDING</span>
										</div>
									</div>
								</div>
							</div>
							<div className='cabinvest__pulls'>
								<div className='cabinvest__pulls-title cabinet__title_36'>
									Ваши активные пулы
								</div>
								<ul className='cabhome__pulls pulls'>
									<li className='pulls__item pull'>
										<div className='pull__header'>
											<img src={gold} alt='pull-header' />
											<div className='pull__name grey-block-dark'>
												<span className='gold'>Название пула</span>
											</div>
											<div className='pull__progress'>
												<div className='pull__progress-start'>0%</div>
												<div className='pull__progress-body'>
													<div
														style={{ width: '50%' }}
														className='pull__progress-body--inner'
													>
														<div className='pull__progress-current gold'>
															50%
														</div>
													</div>
												</div>
												<div className='pull__progress-end'>100%</div>
											</div>
											<div className='pull__profit grey-block-dark'>
												<span>Прибыль</span>
												<span className='gold'>1046.14</span>
												<img src={cg} alt='pull-profit' />
											</div>
											<div className='pull__more'>
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>
										<div className='pull__body'>
											<img src='img/cabinet/gold.svg' alt='pull-header' />
											<div className='pull__table'>
												<div className='pull__column'>
													<span className='gold'>Название пула</span>
													<span>6 месяцев</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата старта</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата окончания</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Сумма депозита</span>
													<span>
														(42% + тело ) 142
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className='pulls__item pull'>
										<div className='pull__header'>
											<img src={gold3} alt='pull-header' />
											<div className='pull__name grey-block-dark'>
												<span className='gold'>Название пула</span>
											</div>
											<div className='pull__progress'>
												<div className='pull__progress-start'>0%</div>
												<div className='pull__progress-body'>
													<div
														style={{ width: '50%' }}
														className='pull__progress-body--inner'
													>
														<div className='pull__progress-current gold'>
															50%
														</div>
													</div>
												</div>
												<div className='pull__progress-end'>100%</div>
											</div>
											<div className='pull__profit grey-block-dark'>
												<span>Прибыль</span>
												<span className='gold'>1046.14</span>
												<img src={cg} alt='pull-profit' />
											</div>
											<div className='pull__more'>
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>
										<div className='pull__body'>
											<img src={gold3} alt='pull-header' />
											<div className='pull__table'>
												<div className='pull__column'>
													<span className='gold'>Название пула</span>
													<span>6 месяцев</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата старта</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата окончания</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Сумма депозита</span>
													<span>
														(42% + тело ) 142
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className='pulls__item pull'>
										<div className='pull__header'>
											<img src='img/cabinet/gold-1.svg' alt='pull-header' />
											<div className='pull__name grey-block-dark'>
												<span className='gold'>Название пула</span>
											</div>
											<div className='pull__progress'>
												<div className='pull__progress-start'>0%</div>
												<div className='pull__progress-body'>
													<div
														style={{ width: '50%' }}
														className='pull__progress-body--inner'
													>
														<div className='pull__progress-current gold'>
															50%
														</div>
													</div>
												</div>
												<div className='pull__progress-end'>100%</div>
											</div>
											<div className='pull__profit grey-block-dark'>
												<span>Прибыль</span>
												<span className='gold'>1046.14</span>
												<img src={cg} alt='pull-profit' />
											</div>
											<div className='pull__more'>
												<span></span>
												<span></span>
												<span></span>
											</div>
										</div>
										<div className='pull__body'>
											<img src='img/cabinet/gold-1.svg' alt='pull-header' />
											<div className='pull__table'>
												<div className='pull__column'>
													<span className='gold'>Название пула</span>
													<span>6 месяцев</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата старта</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Дата окончания</span>
													<span>23.12.2021</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Сумма депозита</span>
													<span>
														(42% + тело ) 142
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img
															src={cg}
															alt='deposit amount'
														/>
													</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}
