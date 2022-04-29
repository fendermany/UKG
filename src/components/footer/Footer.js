import { useContext } from 'react';
import LangContext from '../../contexts/LangContext';
import Select from 'react-select';
import { NavLink } from 'react-router-dom';

import { logo, youtube, facebook, instagram, telegram } from '../../img/images';


import footer from './footer.module.scss';

export default function Footer() {
	const {getValue, onChange, options} = useContext(LangContext);

	return (
		<footer className={footer.cabfooter}>
			<div className={footer.cabfooter__wrapper}>
				<div className={footer.cabfooter__logo}>
					<img src={logo} alt='logo_footer' />
				</div>
				<nav className={footer.cabfooter__menu}>
					<ul>
						<li>
							<NavLink to='/about'>О компании</NavLink>
						</li>
						<li>
							<NavLink to='/partners'>Партнерам</NavLink>
						</li>
						<li>
							<NavLink to='/online'>Online</NavLink>
						</li>
						<li>
							<NavLink to='/investors'>Инвесторам</NavLink>
						</li>
						<li>
							<NavLink to='/production'>Производство</NavLink>
						</li>
						<li>
							<NavLink to='/contacts'>Контакты</NavLink>
						</li>
					</ul>
				</nav>
				<div className={footer.cabfooter__contacts}>
					<div className={footer.cabfooter__title}>Контакты</div>
					<div className={footer['cabfooter__contacts-body']}>
						Венгрией и другими европейскими странами.
					</div>
					<a
						href='mailto:support@u-kg.com'
						className={footer['cabfooter__contacts-email'] + ' gold'}
					>
						support@u-kg.com
					</a>
				</div>
				<div className={footer.cabfooter__feedback}>
					<div className={footer.cabfooter__title}>
						Обратная связь
					</div>
					<div className={footer['cabfooter__feedback-body']}>
						Хочешь узнать о новинках? <br />
						Все события, скидки,
						<br />
						предложения и новости здесь
					</div>
				</div>
				<div className={footer['cabfooter__social'] + ' social'}>
					<div className={footer['cabfooter__social-title'] + ' social__title'}>
						Социальные сети
					</div>
					<ul>
						<li>
							<a href='/'>
								<img src={youtube} alt='youtube' />
							</a>
						</li>
						<li>
							<a href='/'>
								<img src={facebook} alt='facebook' />
							</a>
						</li>
						<li>
							<a href='/'>
								<img src={instagram} alt='instagram' />
							</a>
						</li>
						<li>
							<a href='/'>
								<img src={telegram} alt='telegram' />
							</a>
						</li>
					</ul>
				</div>
				<div className={footer.cabfooter__copyright}>
					<span>“U-KG Holding” LLC 2021 © Все права защищены</span>
					<a href='/' className={footer['cabfooter__terms'] + ' gold'}>
						Правила и соглашения
					</a>
				</div>
				<button className={footer['cabfooter__btn'] + ' button button_transparent'}>
					<div>
						<span>Обратная связь</span>
					</div>
				</button>
				<div className={footer['cabfooter__lang'] + ' lang'}>
					<Select
						classNamePrefix='lang-list'
						onChange={onChange}
						value={getValue()}
						className='lang-list'
						options={options}
					/>
				</div>
			</div>
		</footer>
	);
}
