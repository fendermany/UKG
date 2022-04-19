import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import { Tab, Tabs, TabPanel } from '@mui/material';

import {
	cg,
	cgWhite,
	car,
	banknota,
	mail,
	okCircle,
	user,
	userWhite,
	bonus3,
	documents,
	calendar,
	clock,
	procent,
	dollar,
	gold,
	gold3,
	gold1,
} from '../../../img/images';

import './cabinetHome.scss';
import Yieldchart from './Yieldchart';

export default function CabinetHome() {
	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabhome'>
							<div className='cabhome__profitability'>
								<Yieldchart/>
								<ul className='cabhome__profitability-table grey-block-dark'>
									<li>
										<span>
											<img src={procent} alt='procent-table' />
											Процент доходности компании за все время:
										</span>
										<span className='gold'> 8.9% </span>
									</li>
									<li>
										<span>
											<img src={procent} alt='procent-table' />
											Процент доходности компании за эту неделю:
										</span>
										<span className='gold'> 0% </span>
									</li>
									<li>
										<span>
											<img src={dollar} alt='dollar-table' />
											Ваша доходность за все время:
										</span>
										<span className='gold'>
											293.67
											<img src={cg} alt='cg-prof' />
										</span>
									</li>
									<li>
										<span>
											<img src={dollar} alt='dollar-table' />
											Ваша доходность за все эту неделю:
										</span>
										<span className='gold'>
											0.00
											<img src={cg} alt='cg-prof' />
										</span>
									</li>
								</ul>
							</div>
							<div className='cabhome__investments'>
								<div className='cabhome__title cabinet__investments-title'>
									Ваши <span className='gold'>Инвестиции</span>
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
											<img src={gold} alt='pull-header' />
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
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img src={cg} alt='deposit amount' />
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
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
											</div>
										</div>
									</li>
									<li className='pulls__item pull'>
										<div className='pull__header'>
											<img src={gold1} alt='pull-header' />
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
											<img src={gold1} alt='pull-header' />
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
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Общая прибыль</span>
													<span>
														432587
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
												<div className='pull__column'>
													<span className='gold'>Заработанно</span>
													<span>
														55754740
														<img src={cg} alt='deposit amount' />
													</span>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</div>
							<div className='cabhome__qsb'>
								<div className='cabhome__qsb-title cabinet__title'>
									БОНУС <span className='gold'>Быстрого старта</span>
								</div>
								<div className='cabhome__qsb-wrapper grey-block-dark-414'>
									<div className='cabhome__qsb-body'>
										<div className='cabhome__qsb-body--row'>
											<div className='cabhome__qsb-body--title'>
												сколько осталось
											</div>
											<div className='cabhome__qsb-body--item grey-block-dark'>
												<img src={calendar} alt='quick-start-bonus-calendar' />
												<span>Дата</span>
												<span className='gold'>29 дней</span>
											</div>
											<div className='cabhome__qsb-body--item grey-block-dark'>
												<img src={clock} alt='quick-start-bonus-clock' />
												<span>Время</span>
												<span className='gold'>05:39:09</span>
											</div>
										</div>
										<div className='cabhome__qsb-body--row'>
											<div className='cabhome__qsb-body--title'>
												для получения бонуса необходимо
											</div>
											<div className='cabhome__qsb-body--item grey-block-dark'>
												<img src={user} alt='quick-start-bonus-user' />
												<span>Ваш оборот</span>
												<span className='gold'>
													0.00
													<img src={cg} alt='turnover' />
												</span>
											</div>
											<div className='cabhome__qsb-body--item grey-block-dark'>
												<img src={user} alt='quick-start-bonus-user' />
												<span>Вы получите</span>
												<span className='gold'>
													0
													<img src={cg} alt='turnover' />
												</span>
											</div>
										</div>
									</div>
									<div className='cabhome__qsb-table'>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													100
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													100
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													100
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													500
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													500
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													500
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													1000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													1000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													1000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													2500
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													2500
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													2500
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													5000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													5000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													5000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													7000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													7000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													7000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													10000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													10000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													10000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													15000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													15000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													15000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													20000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													20000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													20000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
										<div className='cabhome__qsb-table--row'>
											<div className='cabhome__qsb-table--turn'>
												<span>ОБОРОТ</span>
												<span className='gold'>
													50000
													<img src={cg} alt='turn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--earn'>
												<span>осталось</span>
												<span className='gold'>
													50000
													<img src={cg} alt='earn' />
												</span>
											</div>
											<div className='cabhome__qsb-table--premium'>
												<span>премия</span>
												<span className='gold'>
													50000
													<img src={cg} alt='earn' />
												</span>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='cabhome__mancor'>
								<div className='cabhome__invitebonus grey-block-dark-414'>
									<div className='cabhome__invitebonus-title cabinet__title'>
										БОНУС <span className='gold'>Пригласителя</span>
									</div>
									<div className='cabhome__invitebonus-3gold'>
										<div>
											<span>Полученно</span>
											<span className='gold'>1 слиток</span>
											<img src={userWhite} alt='3gold-user' />
										</div>
										<div>
											<img src={bonus3} alt='bonus-3' />
										</div>
										<div>
											<span>Условия для получения бонуса пригласителя:</span>
											<span>
												Вашим приглашенным необходимо
												<br />
												Достичь уровня <span>МЕНЕДЖЕР 2</span> за 90 дней
											</span>
											<img src={documents} alt='bonus-documents' />
										</div>
									</div>
									<table className='cabhome__invitebonus-table'>
										<thead>
											<tr>
												<th>Логин</th>
												<th>Почта</th>
												<th>Осталось</th>
												<th>Оборот</th>
												<th>Прогресс</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>User</td>
												<td>testmail@gmail</td>
												<td>
													<div>
														35333330.14
														<img src={cgWhite} alt='saldo' />
													</div>
												</td>
												<td>
													<div>
														35055.14
														<img src={cgWhite} alt='turn' />
													</div>
												</td>
												<td className='cabhome__invitebonus-table--progress'>
													<span>8 ур</span>
													<div>
														<span style={{ width: '50%' }}></span>
													</div>
												</td>
											</tr>
											<tr>
												<td>User</td>
												<td>testmail@gmail</td>
												<td>
													<div>
														35333330.14
														<img src={cgWhite} alt='saldo' />
													</div>
												</td>
												<td>
													<div>
														35055.14
														<img src={cgWhite} alt='turn' />
													</div>
												</td>
												<td className='cabhome__invitebonus-table--progress'>
													<span>8 ур</span>
													<div>
														<span style={{ width: '50%' }}></span>
													</div>
												</td>
											</tr>
											<tr>
												<td>User</td>
												<td>testmail@gmail</td>
												<td>
													<div>
														35333330.14
														<img src={cgWhite} alt='saldo' />
													</div>
												</td>
												<td>
													<div>
														35055.14
														<img src={cgWhite} alt='turn' />
													</div>
												</td>
												<td className='cabhome__invitebonus-table--progress'>
													<span>8 ур</span>
													<div>
														<span style={{ width: '50%' }}></span>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
									<a href='/' className='cabhome__invitebonus-table--more'>
										<span></span>
										<span></span>
										<span></span>
									</a>
								</div>
								<div className='cabhome__yourlvl grey-block-dark-414'>
									<div className='cabhome__yourlvl-title'>ВАШ УРОВЕНЬ</div>
									<div className='cabhome__yourlvl-body'>
										<div className='cabhome__yourlvl-body--title gold'>
											МЕНЕДЖЕР 4
										</div>
										<div className='cabhome__yourlvl-body--subtitle'>
											Оборот структуры:
										</div>
										<ul className='cabhome__yourlvl-body--list'>
											<li>
												<span className='gold'>
													12040
													<img src={cg} alt='done' />
												</span>
												<span>Выполнено</span>
											</li>
											<li>
												<span className='gold'>
													12040
													<img src={cg} alt='done' />
												</span>
												<span>Осталось</span>
											</li>
											<li>
												<span className='gold'>
													12040
													<img src={cg} alt='done' />
												</span>
												<span>Всего нужно</span>
											</li>
										</ul>
										<div className='cabhome__yourlvl-body--progress'>
											<span style={{ width: '50%' }}></span>
										</div>
									</div>
									<div className='cabhome__yourlvl-footer'>
										<span>
											ПОДАРОК ЗА
											<br />
											СЛЕДУЮЩИЙ УРОВЕНЬ
										</span>
										<img src={car} alt='next-gift' />
									</div>
								</div>
							</div>
							<div className='cabhome__reflvl reflvl'>
								<div className='cabhome__reflvl-wrapper reflvl__wrapper'>
									<ul className='cabhome__top reflvl__top'>
										<li>
											<span>Ваш реферальный уровень:</span>
											<span className='gold'>УРОВЕНЬ 6</span>
										</li>
										<li>
											<span>реферанльный бонус:</span>
											<span className='gold'>15%</span>
										</li>
										<li>
											<span>ОБОРОТ:</span>
											<span className='gold'>7000$</span>
										</li>
									</ul>
									<div className='reflvl__body'>
										<div className='reflvl__progress'>
											<span style={{ width: '794px' }}></span>
										</div>
										<div className='reflvl__thead gold'>
											<span>Уровень</span>
											<span>РЕФ. БОНУС</span>
											<span>Оборот</span>
										</div>
										<div className='reflvl__step'>
											<span>1 уровень</span>
											<span className='gold'>9%</span>
											<span>
												100
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<img src={okCircle} alt='done' />
											</span>
										</div>
										<div className='reflvl__step'>
											<span>2 уровень</span>
											<span className='gold'>10%</span>
											<span>
												500
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<img src={okCircle} alt='done' />
											</span>
										</div>
										<div className='reflvl__step'>
											<span>3 уровень</span>
											<span className='gold'>12%</span>
											<span>
												1000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<img src={okCircle} alt='done' />
											</span>
										</div>
										<div className='reflvl__step'>
											<span>4 уровень</span>
											<span className='gold'>13%</span>
											<span>
												2500
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<img src={okCircle} alt='done' />
											</span>
										</div>
										<div className='reflvl__step'>
											<span>5 уровень</span>
											<span className='gold'>14%</span>
											<span>
												5000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<img src={okCircle} alt='done' />
											</span>
										</div>
										<div className='reflvl__step _active'>
											<span>6 уровень</span>
											<span className='gold'>15%</span>
											<span>
												7000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span> текущий </span>
										</div>
										<div className='reflvl__step'>
											<span>7 уровень</span>
											<span className='gold'>16%</span>
											<span>
												10000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<span>ОСТАЛОСЬ</span>
												<span>10000</span>
											</span>
										</div>
										<div className='reflvl__step'>
											<span>8 уровень</span>
											<span className='gold'>17%</span>
											<span>
												15000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<span>ОСТАЛОСЬ</span>
												<span>15000</span>
											</span>
										</div>
										<div className='reflvl__step'>
											<span>9 уровень</span>
											<span className='gold'>18%</span>
											<span>
												20000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<span>ОСТАЛОСЬ</span>
												<span>20000</span>
											</span>
										</div>
										<div className='reflvl__step'>
											<span>10 уровень</span>
											<span className='gold'>19%</span>
											<span>
												50000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<span>ОСТАЛОСЬ</span>
												<span>50000</span>
											</span>
										</div>
										<div className='reflvl__step'>
											<span>11 уровень</span>
											<span className='gold'>20%</span>
											<span>
												50000
												<img src={cgWhite} alt='lvl-1' />
											</span>
											<span>
												<span>ОСТАЛОСЬ</span>
												<span>50000</span>
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='cabhome__latest'>
								<div className='cabhome__latest-item regpar'>
									<div className='cabhome__latest-wrapper'>
										<div className='cabhome__latest-title'>
											Последние зарегистрированные партнеры
										</div>
										<table className='cabhome__latest-table'>
											<thead>
												<tr>
													<th>Логин</th>
													<th>Дата регистрации</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<span>User</span>
														<span>
															<img src={mail} alt='mail' />
															testmail@gmail
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>User</span>
														<span>
															<img src={mail} alt='mail' />
															testmail@gmail
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>User</span>
														<span>
															<img src={mail} alt='mail' />
															testmail@gmail
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>User</span>
														<span>
															<img src={mail} alt='mail' />
															testmail@gmail
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>User</span>
														<span>
															<img src={mail} alt='mail' />
															testmail@gmail
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className='cabhome__latest-item ref'>
									<div className='cabhome__latest-wrapper'>
										<div className='cabhome__latest-title'>
											Последние полученные реферальные
										</div>
										<table className='cabhome__latest-table'>
											<thead>
												<tr>
													<th>Логин</th>
													<th>Сумма депозита</th>
													<th>Реферальные</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>User</td>
													<td>
														<span className='gold'>
															0.10
															<img src={cg} alt='dep-sum' />
														</span>
													</td>
													<td>
														<span>
															0.10
															<img src={cgWhite} alt='ref-sum' />
														</span>
													</td>
												</tr>
												<tr>
													<td>User</td>
													<td>
														<span className='gold'>
															0.10
															<img src={cg} alt='dep-sum' />
														</span>
													</td>
													<td>
														<span>
															0.10
															<img src={cgWhite} alt='ref-sum' />
														</span>
													</td>
												</tr>
												<tr>
													<td>User</td>
													<td>
														<span className='gold'>
															0.10
															<img src={cg} alt='dep-sum' />
														</span>
													</td>
													<td>
														<span>
															0.10
															<img src={cgWhite} alt='ref-sum' />
														</span>
													</td>
												</tr>
												<tr>
													<td>User</td>
													<td>
														<span className='gold'>
															0.10
															<img src={cg} alt='dep-sum' />
														</span>
													</td>
													<td>
														<span>
															0.10
															<img src={cgWhite} alt='ref-sum' />
														</span>
													</td>
												</tr>
												<tr>
													<td>User</td>
													<td>
														<span className='gold'>
															0.10
															<img src={cg} alt='dep-sum' />
														</span>
													</td>
													<td>
														<span>
															0.10
															<img src={cgWhite} alt='ref-sum' />
														</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
								<div className='cabhome__latest-item cab'>
									<div className='cabhome__latest-wrapper'>
										<div className='cabhome__latest-title'>
											Последние операции по кабинету
										</div>
										<table className='cabhome__latest-table'>
											<thead>
												<tr>
													<th>Тип операции</th>
													<th>Дата операции</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<span>Вклад</span>
														<span>
															<img src={banknota} alt='banknota' />
															100.00$
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>Вклад</span>
														<span>
															<img src={banknota} alt='banknota' />
															100.00$
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>Вклад</span>
														<span>
															<img src={banknota} alt='banknota' />
															100.00$
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>Вклад</span>
														<span>
															<img src={banknota} alt='banknota' />
															100.00$
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
												<tr>
													<td>
														<span>Вклад</span>
														<span>
															<img src={banknota} alt='banknota' />
															100.00$
														</span>
													</td>
													<td>11.03.2021 18:03</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	);
}
