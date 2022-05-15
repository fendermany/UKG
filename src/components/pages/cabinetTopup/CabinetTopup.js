import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './cabinetTopup.scss';

import React from 'react';
import { qr, topupCopy } from '../../../img/images';

export default function CabinetTopup() {
	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabtopup'>
							<div className='cabtopup__wrapper'>
								<div className='cabtopup__title cabinet__title_36'>
									Пополнение
								</div>
								<div className='cabtopup__inner'>
									<ul className='cabtopup__body'>
										<li className='cabtopup__item'>
											<label htmlFor='status'>Статус</label>
											<div className='cabtopup__input-wrapper'>
												<input
													disabled
													autoComplete='off'
													type='text'
													name='status'
													value='Ожидает подтверждения'
													className='cabtopup__input'
												/>
											</div>
										</li>
										<li className='cabtopup__item'>
											<label htmlFor='status'>Платежная система</label>
											<div className='cabtopup__input-wrapper'>
												<input
													disabled
													autoComplete='off'
													type='text'
													name='status'
													value='Bitcoin'
													className='cabtopup__input'
												/>
											</div>
										</li>
										<li className='cabtopup__item'>
											<label htmlFor='status'>Дата</label>
											<div className='cabtopup__input-wrapper'>
												<input
													disabled
													autoComplete='off'
													type='text'
													name='status'
													value='12.10.2021 14:15:25'
													className='cabtopup__input'
												/>
											</div>
										</li>
										<li className='cabtopup__item'>
											<label htmlFor='status'>Сумма</label>
											<div className='cabtopup__input-wrapper'>
												<input
													disabled
													autoComplete='off'
													type='text'
													name='status'
													value='10 000 BTC'
													className='cabtopup__input'
												/>
											</div>
										</li>
										<li className='cabtopup__item'>
											<label htmlFor='status'>Реквизиты для оплаты</label>
											<div className='cabtopup__input-wrapper'>
												<input
													disabled
													autoComplete='off'
													type='text'
													name='status'
													value='161AEyUD9WzJ3cZnjQqg621ewANyKWuvaQ'
													className='cabtopup__input'
												/>
												<img
													src={topupCopy}
													alt='Реквизиты для оплаты'
												/>
											</div>
										</li>
									</ul>
									<div className='cabtopup__qr'>
										<img src={qr} alt='QR код' />
									</div>
									<div className='cabtopup__footer'>
										<div className='cabtopup__footer-descr'>
											Для пополнения баланса совершите транзакцию по указанным
											реквизитам, либо воскользуйтесь <span>qr-кодом</span>
										</div>
										<button
											type='submit'
											className='cabtopup__footer-button button button_gold'
										>
											ОТМЕНИТЬ
										</button>
									</div>
								</div>
							</div>
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
		</div>
	);
}
