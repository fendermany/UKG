import { useMemo } from 'react';
import Popup from 'reactjs-popup';
import { useTable, useExpanded } from 'react-table';
// Hooks
import useUserInfo from './../../../hooks/useUserInfo';
import useWalletsTree from './../../../hooks/useWalletsTree';
import useAdditionsStructure from './../../../hooks/useAdditionsStructure';
import useReferrals from './../../../hooks/useReferrals';
// Functions
import Refbonus from './../../functions/getRefBonus';
import checkManagerPoints from './../../functions/checkManagerPoints';
import checkManagerLvl from './../../functions/checkManagerLvl';
// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import CabinetReflvl from './../../cabinetReflvl/CabinetReflvl';
// Media
import {
	cg,
	cgWhite,
	user,
	procent,
	handStars,
	earned,
	turnBG,
	turnAvatar,
	procentGold,
	turnoverLeft,
	turnoverRight,
	diamond,
	selfturn,
} from '../../../img/images';
// Styles
import './cabinetAffiliate.scss';
import {Helmet} from "react-helmet";

export default function CabinetAffiliate() {
	const { userInfo, isSuccessUserInfo } = useUserInfo();
	const { walletsTree, isSuccessWalletsTree } = useWalletsTree();
	const { getAdditionStructure, isSuccessAdditionStructure } =
		useAdditionsStructure();
	const { referrals, isSuccessReferrals } = useReferrals();

	const columns = useMemo(
		() => [
			{
				// Build our expander column
				id: 'expander', // Make sure it has an ID
				Header: () => null,
				Cell: ({ row }) =>
					// Use the row.canExpand and row.getToggleRowExpandedProps prop getter
					// to build the toggle for expanding a row
					row.canExpand ? (
						<div
							{...row.getToggleRowExpandedProps({
								style: {
									// We can even use the row.depth property
									// and paddingLeft to indicate the depth
									// of the row
									marginLeft: `${row.depth * 2}rem`,
								},
							})}
						>
							<span>
								{' '}
								<span className='gold'>{row.isExpanded ? '-' : '+'}</span>{' '}
							</span>
						</div>
					) : null,
			},
			{
				Header: () => null,
				id: 'main', // It needs an ID
				columns: [
					{
						Header: 'Логин',
						accessor: 'fullName',
					},
					{
						Header: 'Дата регистрации',
						accessor: 'regdate',
					},
					{
						Header: 'Уровень менеджера',
						accessor: 'manlvl',
					},
					{
						Header: 'Оборот структуры',
						accessor: 'turn',
					},
					{
						Header: 'Инвестиции',
						accessor: 'investments',
					},
				],
			},
		],
		[]
	);

	const data = [];

	if (isSuccessWalletsTree) {
		walletsTree.data.children.forEach((item, i) => {
			data[i] = {
				fullName: <span className='gold'>{item.user.fullName}</span>,
				regdate: `${
					isSuccessReferrals &&
					referrals.data.content
						.filter(referral => referral.publicId === item.user.publicId)
						.map(
							referral =>
								referral.registerDate.slice(8, 10) +
								'.' +
								referral.registerDate.slice(5, 7) +
								'.' +
								referral.registerDate.slice(0, 4)
						)
				}`,
				manlvl: `M${checkManagerLvl(
					item.leftHistoryPoints + item.rightHistoryPoints
				)}`,
				turn: (
					<div className='gold'>
						{item.leftHistoryPoints + item.rightHistoryPoints}
						<img src={cg} alt='Оборот структуры' />
					</div>
				),
				investments: (
					<div>
						{item.points}
						<img src={cgWhite} alt='Инвестиции' />
					</div>
				),
				subRows: item.children.map(subrow => {
					return {
						fullName: <span className='gold'>{subrow.user.fullName}</span>,
						regdate: `${
							isSuccessReferrals &&
							referrals.data.content
								.filter(referral => referral.publicId === subrow.user.publicId)
								.map(
									referral =>
										referral.registerDate.slice(8, 10) +
										'.' +
										referral.registerDate.slice(5, 7) +
										'.' +
										referral.registerDate.slice(0, 4)
								)
						}`,
						manlvl: `M${checkManagerLvl(
							subrow.leftHistoryPoints + subrow.rightHistoryPoints
						)}`,
						turn: (
							<div className='gold'>
								{subrow.leftHistoryPoints + subrow.rightHistoryPoints}
								<img src={cg} alt='Оборот структуры' />
							</div>
						),
						investments: (
							<div>
								{subrow.points}
								<img src={cgWhite} alt='Инвестиции' />
							</div>
						),
						subRows: subrow.children.map(depth3 => {
							return {
								fullName: <span className='gold'>{depth3.user.fullName}</span>,
								regdate: `${
									isSuccessReferrals &&
									referrals.data.content
										.filter(
											referral => referral.publicId === depth3.user.publicId
										)
										.map(
											referral =>
												referral.registerDate.slice(8, 10) +
												'.' +
												referral.registerDate.slice(5, 7) +
												'.' +
												referral.registerDate.slice(0, 4)
										)
								}`,
								manlvl: `M${checkManagerLvl(
									depth3.leftHistoryPoints + depth3.rightHistoryPoints
								)}`,
								turn: (
									<div className='gold'>
										{depth3.leftHistoryPoints + depth3.rightHistoryPoints}
										<img src={cg} alt='Оборот структуры' />
									</div>
								),
								investments: (
									<div>
										{depth3.points}
										<img src={cgWhite} alt='Инвестиции' />
									</div>
								),
							};
						}),
					};
				}),
			};
		});
	}

	return (
		<div className='cabinet'>
			<Helmet>
				<meta name='viewport' content='width=1660' />
			</Helmet>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabaffpro'>
							<div className='cabaffpro__title'>
								Партнёрская <span className='gold'>программа</span>
							</div>
							<ul className='cabaffpro__stats'>
								<li className='cabaffpro__stats-item'>
									<span>Ваш партнёрский процент</span>
									<span className='gold'>
										{Refbonus(isSuccessUserInfo, userInfo)}%
									</span>
									<img src={procent} alt='Ваш партнёрский процент' />
								</li>
								{/* <li className='cabaffpro__stats-item'>
									<span>Кол-во переходов по реф. ссылке</span>
									<span className='gold'>58</span>
									<img
										src={attachment}
										alt='Кол-во переходов по реф. ссылке'
									/>
								</li> */}
								{isSuccessAdditionStructure && (
									<li className='cabaffpro__stats-item'>
										<span>Заработано реферальных</span>
										<span className='gold'>
											{Math.floor(
												getAdditionStructure.data.content.reduce(
													(acc, item) => acc + item.amount,
													0
												)
											)}
											<img src={cg} alt='Заработано реферальных' />
										</span>
										<img src={earned} alt='Заработано реферальных' />
									</li>
								)}

								<li className='cabaffpro__stats-item'>
									<span>Количество партнёров</span>
									<span>
										{isSuccessWalletsTree && (
											<span className='gold'>
												{walletsTree.data.leftChildrenCount +
													walletsTree.data.rightChildrenCount}
											</span>
										)}
										<ul>
											{/* <li>
												<span>Активных</span>
												<span className='green'>4</span>
											</li>
											<li>
												<span>Неактивных</span>
												<span className='red'>3</span>
											</li> */}
										</ul>
									</span>
									<img src={handStars} alt='Количество партнёров' />
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Личных рефералов</span>
									<span>
										{isSuccessWalletsTree && (
											<span className='gold'>
												{walletsTree.data.children.length}
											</span>
										)}
										<ul>
											{/* <li>
												<span>Активных</span>
												<span className='green'>26</span>
											</li>
											<li>
												<span>Неактивных</span>
												<span className='red'>108</span>
											</li> */}
										</ul>
									</span>
									<img src={diamond} alt='Личных рефералов' />
								</li>
								{isSuccessWalletsTree && walletsTree.data && (
									<li className='cabaffpro__stats-item'>
										<span>Оборот личных рефералов</span>
										<span className='gold'>
											{walletsTree.data.children.reduce(
												(acc, item) => acc + item.points,
												0
											)}
											<img src={cg} alt='Оборот личных рефералов' />
										</span>
										<img src={selfturn} alt='Оборот личных рефералов' />
									</li>
								)}
							</ul>
							{isSuccessWalletsTree && walletsTree.data && (
								<>
									<div className='cabaffpro__yourlvl'>
										<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
											<div className='cabaffpro__yourlvl-title'>
												ВАШ УРОВЕНЬ
											</div>
											<div className='cabaffpro__yourlvl-body'>
												<div className='cabaffpro__yourlvl-body--title gold'>
													МЕНЕДЖЕР{' '}
													{isSuccessWalletsTree && (
														<>{walletsTree.data.rank.replace(/[^0-9]/g, '')}</>
													)}
												</div>
												<div className='cabaffpro__yourlvl-body--subtitle'>
													Оборот структуры:
												</div>
												<ul className='cabaffpro__yourlvl-list'>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree && (
																<>
																	{walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints}
																</>
															)}
														</span>
														<span>Выполнено</span>
														<img src={cg} alt='Выполнено' />
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
														</span>
														<span>Осталось</span>
														<img src={cg} alt='Осталось' />
													</li>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree &&
																checkManagerPoints(
																	isSuccessWalletsTree,
																	walletsTree.data.rank
																)}
														</span>
														<span>Всего нужно</span>
														<img src={cg} alt='Всего нужно' />
													</li>
												</ul>
												<div className='cabaffpro__yourlvl-progress'>
													<span
														style={{
															width: `${
																(615 / 100) *
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
											{/* <div className='cabaffpro__yourlvl-footer'>
												<div className='cabaffpro__yourlvl-footer--title'>
													ПОДАРОК
													<br />
													ЗА СЛЕДУЮЩИЙ УРОВЕНЬ
												</div>
												<div className='cabaffpro__yourlvl-gift'>
													<img src={car} alt='ПОДАРОК ЗА СЛЕДУЮЩИЙ УРОВЕНЬ' />
												</div>
											</div> */}
										</div>
										<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
											<div className='cabaffpro__yourlvl-title'>
												ВАШ РЕФЕРАЛЬНЫЙ УРОВЕНЬ
											</div>
											<div className='cabaffpro__yourlvl-body'>
												{isSuccessUserInfo && (
													<div className='cabaffpro__yourlvl-body--title gold'>
														УРОВЕНЬ {userInfo.data.rank.replace(/[^0-9]/g, '')}
													</div>
												)}
												<div className='cabaffpro__yourlvl-body--subtitle'>
													Оборот структуры:
												</div>
												<ul className='cabaffpro__yourlvl-list'>
													<li>
														{isSuccessUserInfo && (
															<>
																<span className='gold'>
																	{Refbonus(isSuccessUserInfo, userInfo)}%
																</span>
																<span>Реферальный бонус</span>
															</>
														)}
													</li>
													<li>
														{isSuccessWalletsTree && (
															<>
																<span className='gold'>
																	{' '}
																	{walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints}
																</span>
																<span>Оборот</span>
																<img src={cg} alt='Оборот' />
															</>
														)}
													</li>
												</ul>
												<div className='cabaffpro__yourlvl-progress'>
													<span
														style={{
															width: `${
																(615 / 100) *
																(isSuccessWalletsTree &&
																	isSuccessUserInfo &&
																	((walletsTree.data.leftHistoryPoints +
																		walletsTree.data.rightHistoryPoints) /
																		checkManagerPoints(
																			isSuccessUserInfo,
																			userInfo.data.rank
																		)) *
																		100)
															}px`,
														}}
													></span>
												</div>
											</div>
											<div className='cabaffpro__yourlvl-footer'>
												<div className='cabaffpro__yourlvl-footer--title'>
													ПОДАРОК ЗА
													<br />
													СЛЕДУЮЩИЙ УРОВЕНЬ
												</div>
												<div className='cabaffpro__yourlvl-gift'>
													<span className='gold'>
														{isSuccessUserInfo &&
															(Refbonus(isSuccessUserInfo, userInfo) < 18
																? Refbonus(isSuccessUserInfo, userInfo) + 1
																: Refbonus(isSuccessUserInfo, userInfo))}
														%
													</span>
													<img
														src={procentGold}
														alt='ПОДАРОК ЗА СЛЕДУЮЩИЙ УРОВЕНЬ'
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='cabaffpro__reflvl reflvl grey-block-dark-414'>
										<div className='cabaffpro__reflvl-wrapper reflvl__wrapper'>
											<ul className='reflvl__top uppercase text-xl'>
												Реферальный процент на следующий уровень
											</ul>
											<CabinetReflvl />
										</div>
									</div>
									<div className='cabaffpro__inner'>
										<div className='cabaffpro__statsys grey-block-dark-414'>
											<div className='cabaffpro__statsys-title cabinet__title'>
												СИСТЕМА <span className='gold'>СТАТУСОВ</span>
											</div>
											<div className='cabaffpro__statsys-shortdescr gold'>
												В компании работает система статусов для мотивации и
												поощрения лидеров . Принцип её работы достаточно прост:
											</div>
											<div className='cabaffpro__statsys-descr'>
												<p>
													Система автоматически выставляет людей сверху - вниз,
													слева - направо по 2м направлениям. Одно из которых,
													всегда является командным. Таким образом, Ваши
													вышестоящие спонсоры всегда будут наполнять командное
													направление своими людьми.
												</p>
												<p>
													Все что вам останется - пригласить хотя бы одного
													партнера в другое направление, чтобы закрылся цикл и
													Вы получили свой бонус.
												</p>
											</div>
											<table className='cabaffpro__statsys-table'>
												<thead>
													<tr className='gold'>
														<th>Оборот с бинара</th>
														<th>Статус</th>
														<th>подарок</th>
													</tr>
												</thead>
												<tbody>
													<tr>
														<td>
															<div>
																<span className='gold'>-</span>
															</div>
														</td>
														<td>
															<div>Manager 1</div>
														</td>
														<td>
															<div>
																<span className='gold'>-</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>1 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 2</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Бронзовый значок U-KG
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>5 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 3</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Серебряный значок U-KG
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>10 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 4</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Золотой значок U-KG
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>25 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 5</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Золотой значок U-KG с бриллиантом
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>50 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 6</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Золотая монета cg-white
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>100 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 7</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	золотой слиток u-kg
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>250 000</span>
																<img src={cgWhite} alt='Manager 2' />
															</div>
														</td>
														<td>
															<div>Manager 8</div>
														</td>
														<td>
															<div>
																<span className='gold'>Золотые часы</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>500 000</span>
																<img src={cgWhite} alt='Manager 9' />
															</div>
														</td>
														<td>
															<div>Manager 9</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Перстень с бриллиантом
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>1 000 000</span>
																<img src={cgWhite} alt='Manager 10' />
															</div>
														</td>
														<td>
															<div>Manager 10</div>
														</td>
														<td>
															<div>
																<span className='gold'>
																	Автомобиль премиум-класса
																</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>2 500 000</span>
																<img src={cgWhite} alt='Manager 11' />
															</div>
														</td>
														<td>
															<div>Manager 11</div>
														</td>
														<td>
															<div>
																<span className='gold'>Апартаменты у моря</span>
															</div>
														</td>
													</tr>
													<tr>
														<td>
															<div>
																<span>5 000 000</span>
																<img src={cgWhite} alt='Manager 12' />
															</div>
														</td>
														<td>
															<div>Manager 12</div>
														</td>
														<td>
															<div>
																<span className='gold'>Вилла</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className='cabaffpro__turnover grey-block-dark-414'>
											<img src={turnBG} alt='Обороты' />
											<div className='cabaffpro__turnover-top'>
												<div className='cabaffpro__turnover-title cabinet__title'>
													Оборот <span className='gold'>левой ветки</span>
												</div>
												<div className='cabaffpro__turnover-title cabinet__title'>
													Оборот <span className='gold'>правой ветки</span>
												</div>
											</div>
											<div className='cabaffpro__turnover-stats gold'>
												<span>
													{isSuccessWalletsTree && (
														<>
															{walletsTree.data.leftHistoryPoints > 0
																? '+ ' + walletsTree.data.leftHistoryPoints
																: walletsTree.data.leftHistoryPoints}
														</>
													)}
												</span>
												<span className='whitespace-nowrap'>
													{isSuccessUserInfo && userInfo.data.fullName}
												</span>
												<span>
													{isSuccessWalletsTree && walletsTree.data && (
														<>
															{walletsTree.data.rightHistoryPoints > 0
																? '+ ' + walletsTree.data.rightHistoryPoints
																: walletsTree.data.rightHistoryPoints}
														</>
													)}
												</span>
											</div>
											<div className='cabaffpro__turnover-wrapper'>
												<div className='cabaffpro__turnover-main'>
													<div className='cabaffpro__turnover-main--inner'>
														<img
															src={user}
															alt={
																isSuccessUserInfo
																	? userInfo.data.fullName
																	: null
															}
														/>
														<span className='gold'>
															{isSuccessWalletsTree && (
																<>
																	{walletsTree.data.points > 0
																		? '+ ' + walletsTree.data.points
																		: walletsTree.data.points}
																</>
															)}
														</span>
														<span>Ваш оборот</span>
													</div>
												</div>
												<div className='cabaffpro__turnover-left'>
													<img src={turnoverLeft} alt='Левая ветка' />
													<div className='cabaffpro__turnover-left--title gold'>
														Левая ветка
													</div>
													<ul className='cabaffpro__turnover-left--list'>
														{isSuccessWalletsTree &&
															walletsTree.data.children
																.filter(item => item.side === 'LEFT')
																.map((item, idx) => (
																	<Popup
																		trigger={open => (
																			<li>
																				<div>
																					<img
																						src={turnAvatar}
																						alt={item.user.fullName.toString()}
																					/>
																					<span className='gold'>
																						{item.user.fullName}
																					</span>
																				</div>
																			</li>
																		)}
																		position='bottom center'
																		closeOnDocumentClick
																		on={['hover', 'click']}
																		arrow={false}
																		key={`turnover ${idx}`}
																	>
																		<div className='cabaffpro__turnover-hover'>
																			<span className='gold'>
																				{item.user.fullName}
																			</span>
																			<a
																				aria-disabled
																				href={`mailto:${
																					isSuccessReferrals &&
																					referrals.data.content
																						.filter(
																							referral =>
																								referral.publicId ===
																								item.user.publicId
																						)
																						.map(referral => referral.email)
																				}`}
																			>
																				{isSuccessReferrals &&
																					referrals.data.content
																						.filter(
																							referral =>
																								referral.publicId ===
																								item.user.publicId
																						)
																						.map(referral => referral.email)}
																			</a>
																			<div>
																				оборот
																				<span className='gold'>
																					{item.points > 0
																						? '+ ' + item.points
																						: item.points}
																				</span>
																			</div>
																			{/* <div className='cabaffpro__turnover-social social'>
																					<ul>
																						<li>
																							<a href='/'>
																								<img
																									src={youtube}
																									alt='youtube'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={facebook}
																									alt='facebook'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={instagram}
																									alt='instagram'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={telegram}
																									alt='telegram'
																								/>
																							</a>
																						</li>
																					</ul>
																				</div> */}
																		</div>
																	</Popup>
																))}
													</ul>
												</div>
												<div className='cabaffpro__turnover-right'>
													<img src={turnoverRight} alt='Правая ветка' />
													<div className='cabaffpro__turnover-right--title gold'>
														Правая ветка
													</div>
													<ul className='cabaffpro__turnover-right--list'>
														{isSuccessWalletsTree &&
															walletsTree.data.children
																.filter(item => item.side === 'RIGHT')
																.map((item, idx) => (
																	<Popup
																		trigger={open => (
																			<li>
																				<div>
																					<img
																						src={turnAvatar}
																						alt={item.user.fullName}
																					/>
																					<span className='gold'>
																						{item.user.fullName}
																					</span>
																				</div>
																			</li>
																		)}
																		position='bottom center'
																		closeOnDocumentClick
																		on={['hover', 'click']}
																		arrow={false}
																		key={`turnover ${idx}`}
																	>
																		<div className='cabaffpro__turnover-hover'>
																			<span className='gold'>
																				{item.user.fullName}
																			</span>
																			<a
																				aria-disabled
																				href={`mailto:${
																					isSuccessReferrals &&
																					referrals.data.content
																						.filter(
																							referral =>
																								referral.publicId ===
																								item.user.publicId
																						)
																						.map(referral => referral.email)
																				}`}
																			>
																				{isSuccessReferrals &&
																					referrals.data.content
																						.filter(
																							referral =>
																								referral.publicId ===
																								item.user.publicId
																						)
																						.map(referral => referral.email)}
																			</a>
																			<div>
																				оборот
																				<span className='gold'>
																					{item.points > 0
																						? '+ ' + item.points
																						: item.points}
																				</span>
																			</div>
																			{/* <div className='cabaffpro__turnover-social social'>
																					<ul>
																						<li>
																							<a href='/'>
																								<img
																									src={youtube}
																									alt='youtube'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={facebook}
																									alt='facebook'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={instagram}
																									alt='instagram'
																								/>
																							</a>
																						</li>
																						<li>
																							<a href='/'>
																								<img
																									src={telegram}
																									alt='telegram'
																								/>
																							</a>
																						</li>
																					</ul>
																				</div> */}
																		</div>
																	</Popup>
																))}
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className='cabaffpro__partners'>
										<div className='cabaffpro__partners-wrapper'>
											<div className='cabinet__title cabaffpro__partners-title'>
												МОИ <span className='gold'>ПАРТНЁРЫ</span>
											</div>
											<Table columns={columns} data={data} />
										</div>
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

function Table({ columns: userColumns, data }) {
	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		rows,
		prepareRow,
		state: { expanded },
	} = useTable(
		{
			columns: userColumns,
			data,
		},
		useExpanded // Use the useExpanded plugin hook
	);

	return (
		<>
			<table className='cabaffpro__partners-table' {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map((row, i) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}
