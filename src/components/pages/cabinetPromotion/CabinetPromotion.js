import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './cabinetPromotion.scss';

import React from 'react'

export default function CabinetPromotion() {
	return (
		<div className='cabinet'>

			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader/>

						<CabinetTopbar/>

						<div className="cabpromo">
					<div className="cabpromo__title">
						Рекламные <span className="gold">материалы</span>
					</div>
					<div className="cabpromo__link">
						<div className="cabpromo__link-wrapper">
							<label htmlFor="reflink">ВАША РЕФЕРАЛЬНАЯ ССЫЛКА: </label>
							<input disabled autoComplete="off" type="text" name="reflink" value="https://demo.chyip.com/ethnicfinance2/?reg=zzzzz" className="input" />
							<button type="submit" className="cabpromo__link-button button button_gold">
								Скопировать
							</button>
						</div>
					</div>
					<div data-tabs className="cabpromo__tabs">
						<nav data-tabs-titles className="cabpromo__tabs-navigation">
							<button type="button" className="cabpromo__tabs-title _tab-active">
								ВИДЕОПРЕЗЕНТАЦИЯ
							</button>
							<button type="button" className="cabpromo__tabs-title">
								PDF презентация
							</button>
							<button type="button" className="cabpromo__tabs-title">
								Интро
							</button>
							<button type="button" className="cabpromo__tabs-title">
								Аутро
							</button>
							<button type="button" className="cabpromo__tabs-title">
								Логотипы
							</button>
							<button type="button" className="cabpromo__tabs-title">
								Brand wall
							</button>
							<button type="button" className="cabpromo__tabs-title">
								Фирменные обои
							</button>
						</nav>
						<div data-tabs-body className="cabpromo__tabs-content">
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
							<div className="cabpromo__tabs-body"></div>
						</div>
					</div>
				</div>
					</main>
					<Footer />
				</div>
			</div>
		</div>
	)
}
