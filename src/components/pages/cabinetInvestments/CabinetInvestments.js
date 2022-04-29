import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';


import {cg, gold, gold3, poucheGold, angleDownSolid, calcGold} from '../../../img/images';

import './cabinetInvestments.scss';
import CabinetPools from './../../cabinetPools/CabinetPools';


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
								<CabinetPools/>
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}
