import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import { NavLink } from 'react-router-dom';

import './cabinetToken.scss';

import React from 'react';
import { cgWhite, tokenTG } from '../../../img/images';

export default function CabinetToken() {
	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabtoken'>
							<div className='cabtoken__purchase'>
								<div className='cabtoken__title cabinet__title_36'>
									Как приобрести CG Token
								</div>
								<div className='cabtoken__purchase-wrapper'>
									<div className='cabtoken__purchase-inner'>
										<div className='cabtoken__purchase-descr'>
											Все операции на платформе ukgholding.com происходят с
											помощью цифрового активна
											<span className='gold'>CRYPTO GOLD TOKEN</span>. Стать
											владельцем <span className='gold'>CG ТОКЕНА</span>
											<br />
											вы можете одним из 2-х способов:
										</div>
										<ul className='cabtoken__purchase-list'>
											<li>
												<div>
													- купить токен на криптобирже -
													<span className='gold'>BTC-ALPHA</span>
												</div>
												<a href='#'>
													<div>
														<span>
															<span className='gold'>BTC</span>
														</span>
													</div>
													<div>
														<span>
															<span className='gold'>ALPHA</span>
														</span>
													</div>
													<span className='gold'>Криптобиржа BTC-ALPHA</span>
												</a>
											</li>
											<li>
												<div>
													- воспользоваться телеграм-ботом наших партнеров.{' '}
													<br />
													которые предоставляют услуги по продаже
													<span className='gold'>CG TOKEN</span>
												</div>
												<a href='#'>
													<div>
														<span>
															<img
																src={tokenTG}
																alt='Вот обменник в telegram'
															/>
														</span>
													</div>
													<span className='gold'>Вот обменник в telegram</span>
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className='cabtoken__topup'>
								<div className='cabtoken__topup-title cabtoken__title cabinet__title_36'>
									Пополнить токены
								</div>
								<div className='cabtoken__topup-wrapper'>
									<div className='cabtoken__topup-inner'>
										<div className='cabtoken__topup-subtitle'>
											Введите сумму пополнения
										</div>
										<div className='cabtoken__topup-line'>
											<input
												autoComplete='off'
												type='text'
												name='topup'
												className='cabtoken__topup-input'
											/>
											<img
												src={cgWhite}
												alt='Пополнить токены'
											/>
										</div>
										<NavLink
											to='/topup'
											className='cabtoken__topup-button button button_gold'
										>
											Пополнить баланс
										</NavLink>
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
