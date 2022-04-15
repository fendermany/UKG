import Footer from '../../footer/Footer';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';

import './cabinetHelp.scss';

import React from 'react';

export default function CabinetHelp() {
	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabhelp'>
							<div className='cabhelp__wrapper'>
								<div className='cabhelp__form'>
									<div className='cabhelp__form-wrapper'>
										<div className='cabhelp__form-title cabinet__title_36'>
											Помощь
										</div>
										<div className='cabhelp__form-options options'>
											<div className='options__item'>
												<input
													hidden
													id='o_1'
													className='options__input'
													checked
													type='radio'
													value='1'
													name='option'
												/>
												<label for='o_1' className='options__label'>
													<span className='options__text'>Technical questions</span>
												</label>
											</div>
											<div className='options__item'>
												<input
													hidden
													id='o_2'
													className='options__input'
													type='radio'
													value='2'
													name='option'
												/>
												<label for='o_2' className='options__label'>
													<span className='options__text'>Financial questions</span>
												</label>
											</div>
										</div>
										<div className='cabhelp__form-subtitle'>Введите сообщение:</div>
										<form action='#' className='cabhelp__form-form'>
											<div className='form__line'>
												<textarea
													className='cabhelp__form-textarea input'
													autocomplete='off'
													type='text'
													name='help'
												></textarea>
											</div>
											<button
												type='submit'
												className='cabhelp__form-button button button_gold'
											>
												Сохранить
											</button>
										</form>
									</div>
								</div>
								<ul className='cabhelp__history grey-block-dark-414'>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
									<li className='cabhelp__history-item'>
										<div className='cabhelp__history-title'>Вопрос</div>
										<div className='cabhelp__history-body'>
											Я сделал звонок в клиентскую поддержку, но не получил
											консультацию. Что я делаю не так?
										</div>
									</li>
								</ul>
								<div className='cabhelp__faq'>
									<div className='cabhelp__faq-wrapper'>
										<div className='cabhelp__faq-top'>
											<div className='cabhelp__faq-title cabinet__title_36'>
												Общие вопросы
											</div>
											<div className='cabhelp__faq-subtitle'>
												Не нашли ответа на интересующий вопрос?
												<br />
												Напишите нам и мы вам ответим
												<span className='gold'>support@com.ua</span>
											</div>
										</div>
										<ul className='cabhelp__faq-list'>
											<li className='cabhelp__faq-item'>
												<div className='cabhelp__faq-question'>
													<div>
														<span>
															<span className='gold'>?</span>
														</span>
													</div>
													<span>Чем занимается UKG?</span>
												</div>
												<div className='cabhelp__faq-answer'></div>
											</li>
											<li className='cabhelp__faq-item'>
												<div className='cabhelp__faq-question'>
													<div>
														<span>
															<span className='gold'>?</span>
														</span>
													</div>
													<span>Законна ли деятельность компании?</span>
												</div>
												<div className='cabhelp__faq-answer'></div>
											</li>
											<li className='cabhelp__faq-item'>
												<div className='cabhelp__faq-question'>
													<div>
														<span>
															<span className='gold'>?</span>
														</span>
													</div>
													<span>Чем занимается UKG?</span>
												</div>
												<div className='cabhelp__faq-answer'></div>
											</li>
											<li className='cabhelp__faq-item'>
												<div className='cabhelp__faq-question'>
													<div>
														<span>
															<span className='gold'>?</span>
														</span>
													</div>
													<span>Законна ли деятельность компании?</span>
												</div>
												<div className='cabhelp__faq-answer'></div>
											</li>
										</ul>
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
