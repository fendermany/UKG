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
						Header: '??????????',
						accessor: 'fullName',
					},
					{
						Header: '???????? ??????????????????????',
						accessor: 'regdate',
					},
					{
						Header: '?????????????? ??????????????????',
						accessor: 'manlvl',
					},
					{
						Header: '???????????? ??????????????????',
						accessor: 'turn',
					},
					{
						Header: '????????????????????',
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
						<img src={cg} alt='???????????? ??????????????????' />
					</div>
				),
				investments: (
					<div>
						{item.points}
						<img src={cgWhite} alt='????????????????????' />
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
								<img src={cg} alt='???????????? ??????????????????' />
							</div>
						),
						investments: (
							<div>
								{subrow.points}
								<img src={cgWhite} alt='????????????????????' />
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
										<img src={cg} alt='???????????? ??????????????????' />
									</div>
								),
								investments: (
									<div>
										{depth3.points}
										<img src={cgWhite} alt='????????????????????' />
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
								?????????????????????? <span className='gold'>??????????????????</span>
							</div>
							<ul className='cabaffpro__stats'>
								<li className='cabaffpro__stats-item'>
									<span>?????? ?????????????????????? ??????????????</span>
									<span className='gold'>
										{Refbonus(isSuccessUserInfo, userInfo)}%
									</span>
									<img src={procent} alt='?????? ?????????????????????? ??????????????' />
								</li>
								{/* <li className='cabaffpro__stats-item'>
									<span>??????-???? ?????????????????? ???? ??????. ????????????</span>
									<span className='gold'>58</span>
									<img
										src={attachment}
										alt='??????-???? ?????????????????? ???? ??????. ????????????'
									/>
								</li> */}
								{isSuccessAdditionStructure && (
									<li className='cabaffpro__stats-item'>
										<span>???????????????????? ??????????????????????</span>
										<span className='gold'>
											{Math.floor(
												getAdditionStructure.data.content.reduce(
													(acc, item) => acc + item.amount,
													0
												)
											)}
											<img src={cg} alt='???????????????????? ??????????????????????' />
										</span>
										<img src={earned} alt='???????????????????? ??????????????????????' />
									</li>
								)}

								<li className='cabaffpro__stats-item'>
									<span>???????????????????? ??????????????????</span>
									<span>
										{isSuccessWalletsTree && (
											<span className='gold'>
												{walletsTree.data.leftChildrenCount +
													walletsTree.data.rightChildrenCount}
											</span>
										)}
										<ul>
											{/* <li>
												<span>????????????????</span>
												<span className='green'>4</span>
											</li>
											<li>
												<span>????????????????????</span>
												<span className='red'>3</span>
											</li> */}
										</ul>
									</span>
									<img src={handStars} alt='???????????????????? ??????????????????' />
								</li>
								<li className='cabaffpro__stats-item'>
									<span>???????????? ??????????????????</span>
									<span>
										{isSuccessWalletsTree && (
											<span className='gold'>
												{walletsTree.data.children.length}
											</span>
										)}
										<ul>
											{/* <li>
												<span>????????????????</span>
												<span className='green'>26</span>
											</li>
											<li>
												<span>????????????????????</span>
												<span className='red'>108</span>
											</li> */}
										</ul>
									</span>
									<img src={diamond} alt='???????????? ??????????????????' />
								</li>
								{isSuccessWalletsTree && walletsTree.data && (
									<li className='cabaffpro__stats-item'>
										<span>???????????? ???????????? ??????????????????</span>
										<span className='gold'>
											{walletsTree.data.children.reduce(
												(acc, item) => acc + item.points,
												0
											)}
											<img src={cg} alt='???????????? ???????????? ??????????????????' />
										</span>
										<img src={selfturn} alt='???????????? ???????????? ??????????????????' />
									</li>
								)}
							</ul>
							{isSuccessWalletsTree && walletsTree.data && (
								<>
									<div className='cabaffpro__yourlvl'>
										<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
											<div className='cabaffpro__yourlvl-title'>
												?????? ??????????????
											</div>
											<div className='cabaffpro__yourlvl-body'>
												<div className='cabaffpro__yourlvl-body--title gold'>
													????????????????{' '}
													{isSuccessWalletsTree && (
														<>{walletsTree.data.rank.replace(/[^0-9]/g, '')}</>
													)}
												</div>
												<div className='cabaffpro__yourlvl-body--subtitle'>
													???????????? ??????????????????:
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
														<span>??????????????????</span>
														<img src={cg} alt='??????????????????' />
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
														<span>????????????????</span>
														<img src={cg} alt='????????????????' />
													</li>
													<li>
														<span className='gold'>
															{isSuccessWalletsTree &&
																checkManagerPoints(
																	isSuccessWalletsTree,
																	walletsTree.data.rank
																)}
														</span>
														<span>?????????? ??????????</span>
														<img src={cg} alt='?????????? ??????????' />
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
													??????????????
													<br />
													???? ?????????????????? ??????????????
												</div>
												<div className='cabaffpro__yourlvl-gift'>
													<img src={car} alt='?????????????? ???? ?????????????????? ??????????????' />
												</div>
											</div> */}
										</div>
										<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
											<div className='cabaffpro__yourlvl-title'>
												?????? ?????????????????????? ??????????????
											</div>
											<div className='cabaffpro__yourlvl-body'>
												{isSuccessUserInfo && (
													<div className='cabaffpro__yourlvl-body--title gold'>
														?????????????? {userInfo.data.rank.replace(/[^0-9]/g, '')}
													</div>
												)}
												<div className='cabaffpro__yourlvl-body--subtitle'>
													???????????? ??????????????????:
												</div>
												<ul className='cabaffpro__yourlvl-list'>
													<li>
														{isSuccessUserInfo && (
															<>
																<span className='gold'>
																	{Refbonus(isSuccessUserInfo, userInfo)}%
																</span>
																<span>?????????????????????? ??????????</span>
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
																<span>????????????</span>
																<img src={cg} alt='????????????' />
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
													?????????????? ????
													<br />
													?????????????????? ??????????????
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
														alt='?????????????? ???? ?????????????????? ??????????????'
													/>
												</div>
											</div>
										</div>
									</div>
									<div className='cabaffpro__reflvl reflvl grey-block-dark-414'>
										<div className='cabaffpro__reflvl-wrapper reflvl__wrapper'>
											<ul className='reflvl__top uppercase text-xl'>
												?????????????????????? ?????????????? ???? ?????????????????? ??????????????
											</ul>
											<CabinetReflvl />
										</div>
									</div>
									<div className='cabaffpro__inner'>
										<div className='cabaffpro__statsys grey-block-dark-414'>
											<div className='cabaffpro__statsys-title cabinet__title'>
												?????????????? <span className='gold'>????????????????</span>
											</div>
											<div className='cabaffpro__statsys-shortdescr gold'>
												?? ???????????????? ???????????????? ?????????????? ???????????????? ?????? ?????????????????? ??
												?????????????????? ?????????????? . ?????????????? ???? ???????????? ???????????????????? ??????????:
											</div>
											<div className='cabaffpro__statsys-descr'>
												<p>
													?????????????? ?????????????????????????? ???????????????????? ?????????? ???????????? - ????????,
													?????????? - ?????????????? ???? 2?? ????????????????????????. ???????? ???? ??????????????,
													???????????? ???????????????? ??????????????????. ?????????? ??????????????, ????????
													?????????????????????? ???????????????? ???????????? ?????????? ?????????????????? ??????????????????
													?????????????????????? ???????????? ????????????.
												</p>
												<p>
													?????? ?????? ?????? ?????????????????? - ???????????????????? ???????? ???? ????????????
													???????????????? ?? ???????????? ??????????????????????, ?????????? ???????????????? ???????? ??
													???? ???????????????? ???????? ??????????.
												</p>
											</div>
											<table className='cabaffpro__statsys-table'>
												<thead>
													<tr className='gold'>
														<th>???????????? ?? ????????????</th>
														<th>????????????</th>
														<th>??????????????</th>
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
																	?????????????????? ???????????? U-KG
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
																	???????????????????? ???????????? U-KG
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
																	?????????????? ???????????? U-KG
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
																	?????????????? ???????????? U-KG ?? ??????????????????????
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
																	?????????????? ???????????? cg-white
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
																	?????????????? ???????????? u-kg
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
																<span className='gold'>?????????????? ????????</span>
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
																	???????????????? ?? ??????????????????????
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
																	???????????????????? ??????????????-????????????
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
																<span className='gold'>?????????????????????? ?? ????????</span>
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
																<span className='gold'>??????????</span>
															</div>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
										<div className='cabaffpro__turnover grey-block-dark-414'>
											<img src={turnBG} alt='??????????????' />
											<div className='cabaffpro__turnover-top'>
												<div className='cabaffpro__turnover-title cabinet__title'>
													???????????? <span className='gold'>?????????? ??????????</span>
												</div>
												<div className='cabaffpro__turnover-title cabinet__title'>
													???????????? <span className='gold'>???????????? ??????????</span>
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
														<span>?????? ????????????</span>
													</div>
												</div>
												<div className='cabaffpro__turnover-left'>
													<img src={turnoverLeft} alt='?????????? ??????????' />
													<div className='cabaffpro__turnover-left--title gold'>
														?????????? ??????????
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
																				????????????
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
													<img src={turnoverRight} alt='???????????? ??????????' />
													<div className='cabaffpro__turnover-right--title gold'>
														???????????? ??????????
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
																				????????????
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
												?????? <span className='gold'>????????????????</span>
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
