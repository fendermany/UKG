// Functions
import Refbonus from '../../functions/getRefBonus';
import checkBars from './../../functions/checkBars';
import checkManagerPoints from './../../functions/checkManagerPoints';
import getDate from './../../functions/getDate';
import getDateObject from './../../functions/getDateObject';
import fastStartLvl from '../../functions/getFastStartBonus';
// Hooks
import useAdditions from './../../../hooks/useAdditions';
import useWalletsTree from './../../../hooks/useWalletsTree';
import useUserInfo from './../../../hooks/useUserInfo';
import useAdditionsWeek from './../../../hooks/useAdditionsWeek';
import useNotUsedInviteBonus from './../../../hooks/useNotUsedInviteBonus';
import useReferralsLast from './../../../hooks/useReferralsLast';
// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import Yieldchart from './Yieldchart';
import CabinetPools from '../../cabinetPools/CabinetPools';
import CabinetReflvl from '../../cabinetReflvl/CabinetReflvl';
import QuickStartBonusTimer from './QuickStartBonusTimer';
import checkManagerLvl from './../../functions/checkManagerLvl';
// Media
import {
	cg,
	cgWhite,
	banknota,
	mail,
	user,
	userWhite,
	bonus3,
	documents,
	procent,
	dollar,
} from '../../../img/images';
// Styles
import './cabinetHome.scss';

export default function CabinetHome() {
	const { userInfo, isSuccessUserInfo } = useUserInfo();

	const { walletsTree, isSuccessWalletsTree } = useWalletsTree();

	const { getAddition, isSuccessAddition } = useAdditions();

	const { getAdditionWeek, isSuccessAdditionWeek } = useAdditionsWeek();

	const { notUsedInviteBonus, isSuccessNotUsedInviteBonus } =
		useNotUsedInviteBonus();

	const { referralsLast, isSuccessreferralsLast } = useReferralsLast();

	// Quick Start Bonus
	let date, nowDate, time, qsbView;

	if (isSuccessUserInfo) {
		date = getDateObject(isSuccessUserInfo, userInfo.data.registerDate);

		time = new Date(
			date.year,
			date.month - 1,
			date.day,
			date.hour,
			date.minute,
			date.second
		);

		nowDate = new Date();

		time.setSeconds(time.getSeconds() + 2592000);

		qsbView = nowDate.getTime() - time.getTime();
	}

	// Invite bonus

	let trueRefs = [];

	if (
		isSuccessWalletsTree &&
		walletsTree.data &&
		walletsTree.data.children.length
	) {
		walletsTree.data.children.map(item => trueRefs.push(item.user.publicId));
	}

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
								<Yieldchart />
								<ul className='cabhome__profitability-table grey-block-dark'>
									<li>
										<span>
											<img src={procent} alt='procent-table' />
											Процент доходности компании за все время:
										</span>
										<span className='gold'> % </span>
									</li>
									<li>
										<span>
											<img src={procent} alt='procent-table' />
											Процент доходности компании за эту неделю:
										</span>
										<span className='gold'> % </span>
									</li>
									<li>
										<span>
											<img src={dollar} alt='dollar-table' />
											Ваша доходность за все время:
										</span>
										<span className='gold'>
											{isSuccessAddition && (
												<>
													{Math.floor(
														getAddition.data.content.reduce(
															(acc, item) => acc + item.amount,
															0
														)
													)}
												</>
											)}
											<img src={cg} alt='cg-prof' />
										</span>
									</li>
									<li>
										<span>
											<img src={dollar} alt='dollar-table' />
											Ваша доходность за все эту неделю:
										</span>
										<span className='gold'>
											{isSuccessAdditionWeek && (
												<>
													{Math.floor(
														getAdditionWeek.data.content.reduce(
															(acc, item) => acc + item.amount,
															0
														)
													)}
												</>
											)}
											<img src={cg} alt='cg-prof' />
										</span>
									</li>
								</ul>
							</div>
							<div className='cabhome__investments'>
								<div className='cabhome__title cabinet__investments-title'>
									Ваши <span className='gold'>Инвестиции</span>
								</div>
								<CabinetPools />
							</div>
							{qsbView < 0 && isSuccessWalletsTree && walletsTree.data && (
								<div className='cabhome__qsb'>
									<div className='cabhome__qsb-title cabinet__title'>
										БОНУС <span className='gold'>Быстрого старта</span>
									</div>
									<div className='cabhome__qsb-wrapper grey-block-dark-414'>
										<div className='cabhome__qsb-body'>
											{isSuccessUserInfo && (
												<QuickStartBonusTimer expiryTimestamp={time} />
											)}
											<div className='cabhome__qsb-body--row'>
												<div className='cabhome__qsb-body--title'>
													для получения бонуса необходимо
												</div>
												<div className='cabhome__qsb-body--item grey-block-dark'>
													<img src={user} alt='quick-start-bonus-user' />
													<span>Ваш оборот</span>
													<span className='gold'>
														{isSuccessWalletsTree && (
															<>
																{walletsTree.data.leftHistoryPoints +
																	walletsTree.data.rightHistoryPoints}
															</>
														)}
														<img src={cg} alt='turnover' />
													</span>
												</div>
												<div className='cabhome__qsb-body--item grey-block-dark'>
													<img src={user} alt='quick-start-bonus-user' />
													<span>Вы получите</span>
													<span className='gold'>
														{isSuccessUserInfo &&
															fastStartLvl(
																isSuccessUserInfo,
																userInfo.data.fastStartRank
															)}
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
														{isSuccessWalletsTree && (
															<>
																{100 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 100 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														5
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
														{isSuccessWalletsTree && (
															<>
																{500 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 500 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														25
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
														{isSuccessWalletsTree && (
															<>
																{1000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 1000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														50
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
														{isSuccessWalletsTree && (
															<>
																{2500 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 2500 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														125
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
														{isSuccessWalletsTree && (
															<>
																{5000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 5000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														250
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
														{isSuccessWalletsTree && (
															<>
																{7000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 7000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														350
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
														{isSuccessWalletsTree && (
															<>
																{10000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 10000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
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
														15000
														<img src={cg} alt='turn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--earn'>
													<span>осталось</span>
													<span className='gold'>
														{isSuccessWalletsTree && (
															<>
																{15000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 15000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
														<img src={cg} alt='earn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--premium'>
													<span>премия</span>
													<span className='gold'>
														750
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
														{isSuccessWalletsTree && (
															<>
																{20000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 20000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
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
														50000
														<img src={cg} alt='turn' />
													</span>
												</div>
												<div className='cabhome__qsb-table--earn'>
													<span>осталось</span>
													<span className='gold'>
														{isSuccessWalletsTree && (
															<>
																{50000 -
																	+(
																		walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints
																	) >
																0
																	? 50000 -
																	  +(
																			walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints
																	  )
																	: 0}
															</>
														)}
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
										</div>
									</div>
								</div>
							)}
							{isSuccessWalletsTree && walletsTree.data && (
								<>
									<div className='cabhome__mancor'>
										<div className='cabhome__invitebonus grey-block-dark-414'>
											<div className='cabhome__invitebonus-title cabinet__title'>
												БОНУС <span className='gold'>Пригласителя</span>
											</div>
											<div className='cabhome__invitebonus-3gold'>
												<div>
													<span>Полученно</span>
													<span className='gold'>
														{checkBars(isSuccessUserInfo, userInfo)}
													</span>
													<img src={userWhite} alt='3gold-user' />
												</div>
												<div>
													{isSuccessUserInfo &&
														userInfo.data.balance.bonusCount === 1 && (
															<img src={bonus3} alt='bonus-3' />
														)}
												</div>
												<div>
													<span>
														Условия для получения бонуса пригласителя:
													</span>
													<span>
														Вашим приглашенным необходимо
														<br />
														Достичь уровня <span>МЕНЕДЖЕР 2</span> за 90 дней
													</span>
													<img src={documents} alt='bonus-documents' />
												</div>
											</div>
											{isSuccessNotUsedInviteBonus &&
												notUsedInviteBonus.data.content.length > 0 && (
													<>
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
																{isSuccessWalletsTree &&
																	notUsedInviteBonus.data.content
																		.filter(item =>
																			trueRefs.includes(item.publicId)
																		)
																		.map((referral, idx) => (
																			<tr key={`referral ${idx}`}>
																				<td>{referral.fullName}</td>
																				<td>{referral.email}</td>
																				<td>
																					<div>
																						{isSuccessWalletsTree &&
																							walletsTree.data.children
																								.filter(
																									item =>
																										item.user.publicId ===
																										referral.publicId
																								)
																								.map(
																									item =>
																										checkManagerPoints(
																											isSuccessWalletsTree,
																											`RANK_${checkManagerLvl(
																												item.leftHistoryPoints +
																													item.rightHistoryPoints
																											)}`
																										) -
																										(item.leftHistoryPoints +
																											item.rightHistoryPoints)
																								)}
																						<img src={cgWhite} alt='saldo' />
																					</div>
																				</td>
																				<td>
																					<div>
																						{isSuccessWalletsTree &&
																							walletsTree.data.children
																								.filter(
																									item =>
																										item.user.publicId ===
																										referral.publicId
																								)
																								.map(
																									item =>
																										item.leftHistoryPoints +
																										item.rightHistoryPoints
																								)}
																						<img src={cgWhite} alt='turn' />
																					</div>
																				</td>
																				<td className='cabhome__invitebonus-table--progress'>
																					<span>
																						{isSuccessWalletsTree &&
																							walletsTree.data.children
																								.filter(
																									item =>
																										item.user.publicId ===
																										referral.publicId
																								)
																								.map(item =>
																									checkManagerLvl(
																										item.leftHistoryPoints +
																											item.rightHistoryPoints
																									)
																								)}{' '}
																						ур
																					</span>
																					<div>
																						<span
																							style={{
																								width: `${
																									isSuccessWalletsTree &&
																									walletsTree.data.children
																										.filter(
																											item =>
																												item.user.publicId ===
																												referral.publicId
																										)
																										.map(
																											item =>
																												(211 / 100) *
																												(((item.leftHistoryPoints +
																													item.rightHistoryPoints) /
																													checkManagerPoints(
																														isSuccessWalletsTree,
																														`RANK_${checkManagerLvl(
																															item.leftHistoryPoints +
																																item.rightHistoryPoints
																														)}`
																													)) *
																													100)
																										)
																								}px`,
																							}}
																						></span>
																					</div>
																				</td>
																			</tr>
																		))
																		.slice(0, 3)}
															</tbody>
														</table>
														{/* <a
													href='/'
													className='cabhome__invitebonus-table--more'
												>
													<span></span>
													<span></span>
													<span></span>
												</a> */}
													</>
												)}
										</div>
										<div className='cabhome__yourlvl grey-block-dark-414'>
											<div className='cabhome__yourlvl-title'>ВАШ УРОВЕНЬ</div>
											<div className='cabhome__yourlvl-body'>
												<div className='cabhome__yourlvl-body--title gold'>
													МЕНЕДЖЕР{' '}
													{isSuccessWalletsTree && (
														<>{walletsTree.data.rank.replace(/[^0-9]/g, '')}</>
													)}
												</div>
												<div className='cabhome__yourlvl-body--subtitle'>
													Оборот структуры:
												</div>
												<ul className='cabhome__yourlvl-body--list'>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree && (
																<>
																	{walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints}
																</>
															)}
															<img src={cg} alt='done' />
														</span>
														<span>Выполнено</span>
													</li>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree &&
																checkManagerPoints(
																	isSuccessWalletsTree,
																	walletsTree.data.rank
																) -
																	(isSuccessWalletsTree &&
																		walletsTree.data.leftHistoryPoints +
																			walletsTree.data.rightHistoryPoints)}
															<img src={cg} alt='done' />
														</span>
														<span>Осталось</span>
													</li>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree &&
																checkManagerPoints(
																	isSuccessWalletsTree,
																	walletsTree.data.rank
																)}
															<img src={cg} alt='done' />
														</span>
														<span>Всего нужно</span>
													</li>
												</ul>
												<div className='cabhome__yourlvl-body--progress'>
													<span
														style={{
															width: `${
																(366 / 100) *
																(isSuccessWalletsTree &&
																	((walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints) /
																		checkManagerPoints(
																			isSuccessWalletsTree,
																			walletsTree.data.rank
																		)) *
																		100)
															}px`,
														}}
													></span>
												</div>
											</div>
											{/* <div className='cabhome__yourlvl-footer'>
										<span>
											ПОДАРОК ЗА
											<br />
											СЛЕДУЮЩИЙ УРОВЕНЬ
										</span>
										<img src={car} alt='next-gift' />
									</div> */}
										</div>
									</div>
									<div className='cabhome__reflvl reflvl'>
										<div className='cabhome__reflvl-wrapper reflvl__wrapper'>
											<ul className='cabhome__top reflvl__top'>
												<li>
													<span>Ваш реферальный уровень:</span>
													{isSuccessUserInfo && (
														<span className='gold'>
															УРОВЕНЬ{' '}
															{userInfo.data.rank.replace(/[^0-9]/g, '')}
														</span>
													)}
												</li>
												<li>
													<span>реферальный бонус:</span>
													{isSuccessUserInfo && (
														<span className='gold'>
															{Refbonus(isSuccessUserInfo, userInfo)}%
														</span>
													)}
												</li>
												<li className='flex items-center'>
													<span>ОБОРОТ:</span>
													<span className='gold flex items-center'>
														{isSuccessWalletsTree && (
															<>
																{walletsTree.data.leftHistoryPoints +
																	walletsTree.data.rightHistoryPoints}
															</>
														)}
														<img className='ml-1 w-4 h-4' src={cg} alt='cg' />
													</span>
												</li>
											</ul>
											<CabinetReflvl />
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
														{isSuccessreferralsLast && (
															<>
																{referralsLast.data.content
																	.filter(item =>
																		trueRefs.includes(item.publicId)
																	)
																	.map((referral, idx) => (
																		<tr key={`referral ${idx}`}>
																			<td>
																				<span>{referral.fullName}</span>
																				<span>
																					<img src={mail} alt='mail' />
																					<a
																						className='w-40 truncate'
																						href={'mailto:' + referral.email}
																					>
																						{referral.email}
																					</a>
																				</span>
																			</td>
																			<td>
																				{getDate(
																					isSuccessreferralsLast,
																					referral.registerDate
																				)}
																			</td>
																		</tr>
																	))
																	.slice(0, 5)}
															</>
														)}
													</tbody>
												</table>
											</div>
										</div>
										{/* <div className='cabhome__latest-item ref'>
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
										</div> */}
									</div>
								</>
							)}
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
		</div>
	);
}
