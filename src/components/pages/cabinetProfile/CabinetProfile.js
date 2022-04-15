import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './cabinetProfile.scss';

import React from 'react'

export default function CabinetProfile() {
	return (
		<div className='cabinet'>

			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader/>

						<CabinetTopbar/>

						<div data-tabs className="cabprofile">
					<div className="cabprofile__wrapper">
						<div className="cabprofile__top">
							<div className="cabprofile__title cabinet__title_36">
								Мой профиль
							</div>
							<nav data-tabs-titles className="cabprofile__navigation">
								<button type="button" className="cabprofile__title _tab-active">
									Личные данные
								</button>
								<button type="button" className="cabprofile__title">
									Смена пароля
								</button>
								<button type="button" className="cabprofile__title">
									Настройка безопасности
								</button>
							</nav>
						</div>
						<div data-tabs-body className="cabprofile__content">
							<div className="cabprofile__body perdata">
								<form action="#" className="cabprofile__form perdata__form">
									<div className="cabprofile__form-item">
										<label for="name">ФИО:</label>
										<input autoComplete="off" type="text" name="name" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="email">Почта:</label>
										<input autoComplete="off" type="text" name="email" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="login">Логин:</label>
										<input autoComplete="off" type="text" name="login" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="phone">Номер телефона:</label>
										<input autoComplete="off" type="text" name="phone" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="telegram">Телеграм:</label>
										<input autoComplete="off" type="text" name="telegram" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="tron">TRON:</label>
										<input autoComplete="off" type="text" name="tron" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="whatsapp">WHATSAPP:</label>
										<input autoComplete="off" type="text" name="whatsapp" className="cabprofile__form-input" />
									</div>
									<button type="submit" className="cabprofile__form-button button button_gold">
										Сохранить
									</button>
								</form>
							</div>
							<div className="cabprofile__body changepw">
								<form action="#" className="cabprofile__form changepw__form">
									<div className="cabprofile__form-item">
										<label for="old">ВАШ ТЕКУЩИЙ ПАРОЛЬ:</label>
										<input autoComplete="off" type="text" name="old" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="new">НОВЫЙ ПАРОЛЬ:</label>
										<input autoComplete="off" type="password" name="new" className="cabprofile__form-input" />
									</div>
									<div className="cabprofile__form-item">
										<label for="repnew">ПОВТОРИТЕ НОВЫЙ ПАРОЛЬ:</label>
										<input autoComplete="off" type="password" name="repnew" className="cabprofile__form-input" />
									</div>
									<button type="submit" className="cabprofile__form-button button button_gold">
										Сохранить
									</button>
								</form>
							</div>
							<div className="cabprofile__body security">
								<form action="#" className="cabprofile__form security__form">
									<div className="cabprofile__form-item">
										<label for="gmt">ВАШ ЧАСОВОЙ ПОЯС (ОТ GMT): </label>
										<select name="gmt" className="cabprofile__form-select">
											<option value="1" selected>+0:00</option>
											<option value="2">+1:00</option>
											<option value="3">+2:00</option>
											<option value="4">+3:00</option>
										</select>
										<div className="cabprofile__form-checkbox checkbox">
											<input id="notificationemail" className="checkbox__input" type="checkbox" value="1" name="notificationemail" />
											<label for="notificationemail" className="checkbox__label"><span className="checkbox__text">Не получать оповещения на e-mail
												</span></label>
										</div>
									</div>
									<div className="cabprofile__form-item">
										<label for="ip">КОНТРОЛЬ СМЕНЫ IP-АДРЕСЫ: </label>
										<select name="ip" className="cabprofile__form-select">
											<option value="1" selected>по умолчанию</option>
											<option value="2">динамически</option>
										</select>
										<div className="cabprofile__form-checkbox checkbox">
											<input id="ipsession" className="checkbox__input" type="checkbox" value="1" name="ipsession" />
											<label for="ipsession" className="checkbox__label"><span className="checkbox__text">Привязать сессию в IP-адресу
												</span></label>
										</div>
										<div className="cabprofile__form-checkbox checkbox">
											<input id="parsession" className="checkbox__input" type="checkbox" value="1" name="parsession" />
											<label for="parsession" className="checkbox__label"><span className="checkbox__text">Запретить параллельные сессии
												</span></label>
										</div>
									</div>
									<div className="cabprofile__form-item">
										<label for="autoexit">АВТОВЫХОД ЧЕРЕЗ N МИНУТ (0 ПО УМОЛЧАНИЮ):</label>
										<select name="autoexit" className="cabprofile__form-select">
											<option value="1" selected>0- по умолчанию</option>
											<option value="2">10</option>
											<option value="3">30</option>
											<option value="4">60</option>
										</select>
									</div>
									<div className="cabprofile__form-item">
										<label for="google">GOOGLE AUTHENTICATOR: </label>
										<div className="cabprofile__form-subtitle">
											Для активации Google Authenticator используйте ключ:
										</div>
										<input disabled autoComplete="off" type="text" name="google" value="RWX5C2NQW7WIHLKI" className="cabprofile__form-input google-auth" />
									</div>
									<div className="cabprofile__form-item">
										<label for="google_input">ВВЕДИТЕ КОД ИЗ ПРИЛОЖЕНИЯ:
										</label>
										<input autoComplete="off" type="text" name="google_input" className="cabprofile__form-input" />
									</div>
									<button type="submit" className="cabprofile__form-button button button_gold">
										Сохранить
									</button>
								</form>
							</div>
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
