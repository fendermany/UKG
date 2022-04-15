import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import {youtube, facebook, instagram, telegram, cg, cgWhite, car, okCircle, user, procent, attachment, handStars, earned, turnBG, turnAvatar, procentGold, turnoverLeft, turnoverRight, diamond, selfturn} from '../../../img/images';

import './cabinetAffiliate.scss';

export default function CabinetAffiliate() {
	return (
		<div className='cabinet'>

			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader/>

						<CabinetTopbar/>

						<div className='cabaffpro'>
							<div className='cabaffpro__title'>
								Партнёрская <span className='gold'>программа</span>
							</div>
							<ul className='cabaffpro__stats'>
								<li className='cabaffpro__stats-item'>
									<span>Ваш партнёрский процент</span>
									<span className='gold'>15%</span>
									<img
										src={procent}
										alt='Ваш партнёрский процент'
									/>
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Кол-во переходов по реф. ссылке</span>
									<span className='gold'>58</span>
									<img
										src={attachment}
										alt='Кол-во переходов по реф. ссылке'
									/>
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Заработано реферальных</span>
									<span className='gold'>
										1644.69
										<img
											src={cg}
											alt='Заработано реферальных'
										/>
									</span>
									<img
										src={earned}
										alt='Заработано реферальных'
									/>
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Количество партнёров</span>
									<span>
										<span className='gold'>7</span>
										<ul>
											<li>
												<span>Активных</span>
												<span className='green'>4</span>
											</li>
											<li>
												<span>Неактивных</span>
												<span className='red'>3</span>
											</li>
										</ul>
									</span>
									<img
										src={handStars}
										alt='Количество партнёров'
									/>
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Личных рефералов</span>
									<span>
										<span className='gold'>134</span>
										<ul>
											<li>
												<span>Активных</span>
												<span className='green'>26</span>
											</li>
											<li>
												<span>Неактивных</span>
												<span className='red'>108</span>
											</li>
										</ul>
									</span>
									<img src={diamond} alt='Личных рефералов' />
								</li>
								<li className='cabaffpro__stats-item'>
									<span>Оборот личных рефералов</span>
									<span className='gold'>
										58
										<img
											src={cg}
											alt='Оборот личных рефералов'
										/>
									</span>
									<img
										src={selfturn}
										alt='Оборот личных рефералов'
									/>
								</li>
							</ul>
							<div className='cabaffpro__yourlvl'>
								<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
									<div className='cabaffpro__yourlvl-title'>ВАШ УРОВЕНЬ</div>
									<div className='cabaffpro__yourlvl-body'>
										<div className='cabaffpro__yourlvl-body--title gold'>
											МЕНЕДЖЕР 4
										</div>
										<div className='cabaffpro__yourlvl-body--subtitle'>
											Оборот структуры:
										</div>
										<ul className='cabaffpro__yourlvl-list'>
											<li>
												<span className='gold'>12040</span>
												<span>Выполнено</span>
												<img src={cg} alt='Выполнено' />
											</li>
											<li>
												<span className='gold'>12960</span>
												<span>Осталось</span>
												<img src={cg} alt='Осталось' />
											</li>
											<li>
												<span className='gold'>25000</span>
												<span>Всего нужно</span>
												<img src={cg} alt='Всего нужно' />
											</li>
										</ul>
										<div className='cabaffpro__yourlvl-progress'>
											<span style={{'width': '50%'}}></span>
										</div>
									</div>
									<div className='cabaffpro__yourlvl-footer'>
										<div className='cabaffpro__yourlvl-footer--title'>
											ПОДАРОК
											<br />
											ЗА СЛЕДУЮЩИЙ УРОВЕНЬ
										</div>
										<div className='cabaffpro__yourlvl-gift'>
											<img
												src={car}
												alt='ПОДАРОК ЗА СЛЕДУЮЩИЙ УРОВЕНЬ'
											/>
										</div>
									</div>
								</div>
								<div className='cabaffpro__yourlvl-item grey-block-dark-414'>
									<div className='cabaffpro__yourlvl-title'>
										ВАШ РЕФЕРАЛЬНЫЙ УРОВЕНЬ
									</div>
									<div className='cabaffpro__yourlvl-body'>
										<div className='cabaffpro__yourlvl-body--title gold'>
											УРОВЕНЬ 6
										</div>
										<div className='cabaffpro__yourlvl-body--subtitle'>
											Оборот структуры:
										</div>
										<ul className='cabaffpro__yourlvl-list'>
											<li>
												<span className='gold'>15%</span>
												<span>Реферальный бонус</span>
											</li>
											<li>
												<span className='gold'>7000</span>
												<span>Оборот</span>
												<img src={cg} alt='Оборот' />
											</li>
										</ul>
										<div className='cabaffpro__yourlvl-progress'>
											<span style={{'width': '50%'}}></span>
										</div>
									</div>
									<div className='cabaffpro__yourlvl-footer'>
										<div className='cabaffpro__yourlvl-footer--title'>
											ПОДАРОК ЗА
											<br />
											СЛЕДУЮЩИЙ УРОВЕНЬ
										</div>
										<div className='cabaffpro__yourlvl-gift'>
											<span className='gold'>15%</span>
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
									<ul className='reflvl__top'>
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
											<span style={{'width': '794px'}}></span>
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
											всегда является командным. Таким образом, Ваши вышестоящие
											спонсоры всегда будут наполнять командное направление
											своими людьми.
										</p>
										<p>
											Все что вам останется - пригласить хотя бы одного партнера
											в другое направление, чтобы закрылся цикл и Вы получили
											свой бонус.
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
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
													</div>
												</td>
												<td>
													<div>Manager 2</div>
												</td>
												<td>
													<div>
														<span className='gold'>Бронзовый значок U-KG</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>5 000</span>
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
													</div>
												</td>
												<td>
													<div>Manager 3</div>
												</td>
												<td>
													<div>
														<span className='gold'>Серебряный значок U-KG</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>10 000</span>
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
													</div>
												</td>
												<td>
													<div>Manager 4</div>
												</td>
												<td>
													<div>
														<span className='gold'>Золотой значок U-KG</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>25 000</span>
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
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
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
													</div>
												</td>
												<td>
													<div>Manager 6</div>
												</td>
												<td>
													<div>
														<span className='gold'>Золотая монета cg-white</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>100 000</span>
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
													</div>
												</td>
												<td>
													<div>Manager 7</div>
												</td>
												<td>
													<div>
														<span className='gold'>золотой слиток u-kg</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>250 000</span>
														<img
															src={cgWhite}
															alt='Manager 2'
														/>
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
														<img
															src={cgWhite}
															alt='Manager 9'
														/>
													</div>
												</td>
												<td>
													<div>Manager 9</div>
												</td>
												<td>
													<div>
														<span className='gold'>Перстень с бриллиантом</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>1 000 000</span>
														<img
															src={cgWhite}
															alt='Manager 10'
														/>
													</div>
												</td>
												<td>
													<div>Manager 10</div>
												</td>
												<td>
													<div>
														<span className='gold'>Автомобиль премиум-класса</span>
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>2 500 000</span>
														<img
															src={cgWhite}
															alt='Manager 11'
														/>
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
														<img
															src={cgWhite}
															alt='Manager 12'
														/>
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
										<span>+ 10 000</span>
										<span>Artem</span>
										<span>0</span>
									</div>
									<div className='cabaffpro__turnover-wrapper'>
										<div className='cabaffpro__turnover-main'>
											<div className='cabaffpro__turnover-main--inner'>
												<img src={user} alt='Artem' />
												<span className='gold'>+ 10 000</span>
												<span>Ваш оборот</span>
											</div>
										</div>
										<div className='cabaffpro__turnover-left'>
											<img
												src={turnoverLeft}
												alt='Левая ветка'
											/>
											<div className='cabaffpro__turnover-left--title gold'>
												Левая ветка
											</div>
											<ul className='cabaffpro__turnover-left--list'>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
											</ul>
										</div>
										<div className='cabaffpro__turnover-right'>
											<img
												src={turnoverRight}
												alt='Правая ветка'
											/>
											<div className='cabaffpro__turnover-right--title gold'>
												Правая ветка
											</div>
											<ul className='cabaffpro__turnover-right--list'>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
												<li>
													<div>
														<img
															src={turnAvatar}
															alt='Vitaly Dmitriev'
														/>
														<span className='gold'>Vitaly Dmitriev</span>
														<div className='cabaffpro__turnover-hover'>
															<span className='gold'>Vitaliy27</span>
															<a href='mailto:customer@gmail.com'>
																customer@gmail.com
															</a>
															<div>
																оборот<span className='gold'>+ 10 000</span>
															</div>
															<div className='cabaffpro__turnover-social social'>
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
															</div>
														</div>
													</div>
												</li>
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
									<table className='cabaffpro__partners-table'>
										<thead>
											<tr>
												<th>Логин</th>
												<th>Дата регистрации</th>
												<th>Линия</th>
												<th>Уровень менеджера</th>
												<th>Оборот структуры</th>
												<th>Инвестиции</th>
												<th>Реферальные</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<div>
														<span>
															{' '}
															<span className='gold'>+</span>{' '}
														</span>
													</div>
													<span className='gold'>Андрей Васильев</span>
												</td>
												<td>14.06.2021</td>
												<td>1</td>
												<td>М1</td>
												<td>
													<div className='gold'>
														350.14
														<img
															src={cg}
															alt='Оборот структуры'
														/>
													</div>
												</td>
												<td>
													<div>
														350.14
														<img
															src={cgWhite}
															alt='Инвестиции'
														/>
													</div>
												</td>
												<td>
													<div className='gold'>
														350.14
														<img src={cg} alt='Реферальные' />
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															{' '}
															<span className='gold'>+</span>{' '}
														</span>
													</div>
													<span className='gold'>Андрей Васильев</span>
												</td>
												<td>14.06.2021</td>
												<td>1</td>
												<td>М1</td>
												<td>
													<div className='gold'>
														350.14
														<img
															src={cg}
															alt='Оборот структуры'
														/>
													</div>
												</td>
												<td>
													<div>
														350.14
														<img
															src={cgWhite}
															alt='Инвестиции'
														/>
													</div>
												</td>
												<td>
													<div className='gold'>
														350.14
														<img src={cg} alt='Реферальные' />
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															{' '}
															<span className='gold'>+</span>{' '}
														</span>
													</div>
													<span className='gold'>Андрей Васильев</span>
												</td>
												<td>14.06.2021</td>
												<td>1</td>
												<td>М1</td>
												<td>
													<div className='gold'>
														350.14
														<img
															src={cg}
															alt='Оборот структуры'
														/>
													</div>
												</td>
												<td>
													<div>
														350.14
														<img
															src={cgWhite}
															alt='Инвестиции'
														/>
													</div>
												</td>
												<td>
													<div className='gold'>
														350.14
														<img src={cg} alt='Реферальные' />
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															{' '}
															<span className='gold'>+</span>{' '}
														</span>
													</div>
													<span className='gold'>Андрей Васильев</span>
												</td>
												<td>14.06.2021</td>
												<td>1</td>
												<td>М1</td>
												<td>
													<div className='gold'>
														350.14
														<img
															src={cg}
															alt='Оборот структуры'
														/>
													</div>
												</td>
												<td>
													<div>
														350.14
														<img
															src={cgWhite}
															alt='Инвестиции'
														/>
													</div>
												</td>
												<td>
													<div className='gold'>
														350.14
														<img src={cg} alt='Реферальные' />
													</div>
												</td>
											</tr>
											<tr>
												<td>
													<div>
														<span>
															{' '}
															<span className='gold'>+</span>{' '}
														</span>
													</div>
													<span className='gold'>Андрей Васильев</span>
												</td>
												<td>14.06.2021</td>
												<td>1</td>
												<td>М1</td>
												<td>
													<div className='gold'>
														350.14
														<img
															src={cg}
															alt='Оборот структуры'
														/>
													</div>
												</td>
												<td>
													<div>
														350.14
														<img
															src={cgWhite}
															alt='Инвестиции'
														/>
													</div>
												</td>
												<td>
													<div className='gold'>
														350.14
														<img src={cg} alt='Реферальные' />
													</div>
												</td>
											</tr>
										</tbody>
									</table>
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
