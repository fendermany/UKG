import { useContext } from 'react';
import LangContext from '../../contexts/LangContext';
import Select from 'react-select';
import { Link, NavLink } from 'react-router-dom';

import { logo, youtube, facebook, instagram, telegram } from '../../img/images';

import './footer.scss';

const Footer = () => {
	const { getValue, onChange, langOptions } = useContext(LangContext);

	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__wrapper'>
					<div className='footer__logo'>
						<img src={logo} alt='logo_footer' />
					</div>
					<nav className='footer__menu'>
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
					<div className='footer__contacts'>
						<div className='footer__contacts-title footer__title'>Контакты</div>
						<div className='footer__contacts-body'>
							Венгрией и другими европейскими странами.
						</div>
						<a
							href='mailto:support@u-kg.com'
							className='footer__contacts-email gold'
						>
							support@u-kg.com
						</a>
					</div>
					<div className='footer__feedback'>
						<div className='footer__feedback-title footer__title'>
							Обратная связь
						</div>
						<div className='footer__feedback-body'>
							Хочешь узнать о новинках? <br />
							Все события, скидки,
							<br />
							предложения и новости здесь
						</div>
					</div>
					<div className='footer__social social'>
						<div className='footer__social-title social__title'>
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
					<div className='footer__copyright'>
						<span>“U-KG Holding” LLC 2022 © Все права защищены</span>
						<a href='/' className='footer__terms gold'>
							Правила и соглашения
						</a>
					</div>
					<Link
						to='/contacts'
						className='footer__btn button button_transparent'
					>
						<div>
							<span>Обратная связь</span>
						</div>
					</Link>
					<div className='footer__lang lang'>
						<Select
							classNamePrefix='lang-list'
							onChange={onChange}
							value={getValue()}
							className='lang-list'
							options={langOptions}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
