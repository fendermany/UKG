import { useContext, useState } from 'react';
import LangContext from './../../contexts/LangContext';
import Popup from 'reactjs-popup';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
// Hooks
import { useOutsideAlerter } from '../../hooks/useOutsideAlerter';
// Components
import Select from 'react-select';
// Media
import { Link, NavLink } from 'react-router-dom';
import { logo, youtube, facebook, instagram, telegram } from '../../img/images';
import {
	headerBgLeft,
	hamburgerStateClose,
	hamburgerStateOpen,
	enter,
} from '../../img/images';
// Styles
import './header.scss';

const scrollOptions = {
	reserveScrollBarGap: true,
};

const socialOptions = [
	{
		value: 'youtube',
		label: (
			<svg
				width='13'
				height='14'
				viewBox='0 0 13 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.06494 1.33594V4.41385C8.06494 4.67967 8.08719 4.87488 8.13184 4.99981C8.20434 5.1927 8.36903 5.28888 8.62563 5.28888C8.90451 5.28888 9.19195 5.1278 9.48767 4.8046V5.23425H10.2495V1.33594H9.48783V4.31233C9.32037 4.53662 9.1615 4.6483 9.01068 4.6483C8.91028 4.6483 8.85162 4.59122 8.83497 4.47647C8.82937 4.46616 8.82657 4.37479 8.82657 4.20311V1.33594H8.06494Z'
					fill='white'
				/>
				<path
					d='M6.32432 5.28893C6.70934 5.28893 7.00505 5.15616 7.21157 4.89064C7.36782 4.69802 7.44595 4.39053 7.44595 3.96872V2.60158C7.44595 2.185 7.36782 1.88042 7.21157 1.68765C7.00505 1.42183 6.70937 1.28906 6.32432 1.28906C5.95035 1.28906 5.65744 1.42183 5.44532 1.68765C5.28907 1.88057 5.21094 2.18515 5.21094 2.60158V3.96872C5.21094 4.38561 5.28907 4.69297 5.44532 4.89064C5.65728 5.15616 5.95032 5.28893 6.32432 5.28893ZM5.96433 2.46084C5.96433 2.10162 6.08434 1.92197 6.3243 1.92197C6.56412 1.92197 6.68427 2.10164 6.68427 2.46084V4.10149C6.68427 4.46624 6.56412 4.64838 6.3243 4.64838C6.08431 4.64838 5.96433 4.46624 5.96433 4.10149V2.46084Z'
					fill='white'
				/>
				<path
					d='M4.1897 5.23437V3.11728L5.20252 0H4.34873L3.77961 2.05477L3.18509 0H2.29785C2.45411 0.437674 2.63541 0.924716 2.84193 1.46082C3.10416 2.17985 3.27426 2.73179 3.35255 3.11731V5.23424H4.18967V5.23437H4.1897Z'
					fill='white'
				/>
				<path
					d='M12.0034 6.46099C11.755 6.25286 11.469 6.13055 11.1455 6.0938C10.1187 5.98981 8.57013 5.9375 6.49997 5.9375C4.42964 5.9375 2.88392 5.98966 1.86269 6.0938C1.53337 6.13042 1.24609 6.25286 1.0005 6.46099C0.754907 6.66975 0.593074 6.92727 0.514945 7.23461C0.369729 7.83886 0.297363 8.75003 0.297363 9.96901C0.297363 11.2086 0.36989 12.1199 0.514945 12.7034C0.587445 13.0105 0.747824 13.2683 0.996216 13.4767C1.24445 13.6852 1.53041 13.8049 1.8541 13.8363C2.88079 13.9455 4.42929 14.0001 6.4998 14.0001C8.57013 14.0001 10.1187 13.9455 11.1453 13.8363C11.4689 13.8049 11.7535 13.6852 11.9991 13.4767C12.2445 13.2683 12.4064 13.0105 12.4847 12.7034C12.6297 12.0991 12.7022 11.1877 12.7022 9.96901C12.7022 8.72942 12.6297 7.8181 12.4847 7.23461C12.412 6.92727 12.2516 6.66975 12.0034 6.46099ZM3.83806 8.02349H2.94241V12.4688H2.10543V8.02349H1.22662V7.28923H3.83824V8.02349H3.83806ZM6.09795 12.4688H5.35294V12.0467C5.05163 12.3644 4.76701 12.5234 4.49915 12.5234C4.24236 12.5234 4.08066 12.427 4.0136 12.2344C3.96892 12.1093 3.94667 11.9195 3.94667 11.664V8.60929H4.69169V11.4532C4.69169 11.6198 4.69449 11.7111 4.70009 11.7266C4.71689 11.8358 4.77542 11.8904 4.87595 11.8904C5.02661 11.8904 5.18567 11.7812 5.35313 11.5623V8.60929H6.09812V12.4688H6.09795ZM8.94394 11.3126C8.94394 11.6929 8.91887 11.9532 8.86861 12.0938C8.77368 12.3801 8.5757 12.5234 8.27426 12.5234C8.00645 12.5234 7.74699 12.3801 7.49582 12.0938V12.4688H6.75081V7.28923H7.49582V8.98447C7.73562 8.7034 7.99522 8.56266 8.27426 8.56266C8.57557 8.56266 8.77368 8.7085 8.86861 9.00001C8.91887 9.13554 8.94394 9.39334 8.94394 9.77363V11.3126ZM11.7731 10.672H10.2749V11.3517C10.2749 11.7112 10.4031 11.8906 10.6599 11.8906C10.844 11.8906 10.9556 11.7969 10.9947 11.6095C11.0057 11.5574 11.0115 11.3986 11.0115 11.1328H11.7731V11.2345C11.7731 11.4898 11.7675 11.6406 11.7563 11.6876C11.7395 11.8284 11.681 11.9687 11.5806 12.1094C11.3797 12.3853 11.0784 12.5236 10.6766 12.5236C10.2916 12.5236 9.99008 12.3908 9.77253 12.125C9.61067 11.9324 9.52973 11.6306 9.52973 11.2189V9.86731C9.52973 9.45598 9.60786 9.15384 9.76412 8.96092C9.98168 8.69541 10.2802 8.56264 10.6598 8.56264C11.0336 8.56264 11.3294 8.69538 11.547 8.96092C11.6976 9.15384 11.773 9.45596 11.773 9.86731V10.672H11.7731Z'
					fill='white'
				/>
				<path
					d='M10.6515 9.19507C10.4003 9.19507 10.2749 9.3723 10.2749 9.72643V10.0859H11.0283V9.72643C11.0281 9.37243 10.9027 9.19507 10.6515 9.19507Z'
					fill='white'
				/>
				<path
					d='M7.87271 9.19507C7.7443 9.19507 7.61871 9.25245 7.49609 9.36723V11.7186C7.61874 11.8333 7.74432 11.8904 7.87271 11.8904C8.09026 11.8904 8.19923 11.7161 8.19923 11.3671V9.71876C8.19904 9.36966 8.09026 9.19507 7.87271 9.19507Z'
					fill='white'
				/>
			</svg>
		),
	},
	{
		value: 'facebook',
		label: (
			<svg
				width='7'
				height='14'
				viewBox='0 0 7 14'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M6.80859 5.00053H4.42805V3.75086C4.42805 3.75086 4.29473 2.56246 5.06628 2.56246C5.93826 2.56246 6.6345 2.56246 6.6345 2.56246V7.19459e-07H3.96445C3.96445 7.19459e-07 1.73009 -0.0102215 1.73009 2.40623C1.73009 2.92533 1.72787 3.8704 1.72451 5.00053H0.191406V7.0637H1.72057C1.71165 10.3441 1.70105 14 1.70105 14H4.42802V7.0637H6.22778L6.80859 5.00053Z'
					fill='white'
				/>
			</svg>
		),
	},
	{
		value: 'instagram',
		label: (
			<svg
				width='14'
				height='15'
				viewBox='0 0 14 15'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M11.0694 2.77588C10.882 2.77588 10.7295 2.93927 10.7295 3.14004C10.7295 3.34081 10.882 3.5042 11.0694 3.5042C11.2568 3.5042 11.4093 3.34084 11.4093 3.14004C11.4093 2.93924 11.2568 2.77588 11.0694 2.77588Z'
					fill='white'
				/>
				<path
					d='M6.99998 4.27148C5.33852 4.27148 3.98682 5.71974 3.98682 7.49988C3.98682 9.28001 5.33852 10.7283 6.99998 10.7283C8.66147 10.7283 10.0132 9.28004 10.0132 7.49991C10.0132 5.71977 8.66147 4.27148 6.99998 4.27148Z'
					fill='white'
				/>
				<path
					d='M10.1621 0H3.83789C1.72167 0 0 1.84465 0 4.11205V10.888C0 13.1554 1.72167 15 3.83789 15H10.1621C12.2784 15 14 13.1554 14 10.888V4.11205C14 1.84465 12.2784 0 10.1621 0ZM7 11.6142C4.88264 11.6142 3.16009 9.7686 3.16009 7.5C3.16009 5.2314 4.88266 3.38584 7 3.38584C9.11734 3.38584 10.8399 5.23143 10.8399 7.5C10.8399 9.76857 9.11734 11.6142 7 11.6142ZM11.0696 4.38973C10.4263 4.38973 9.90295 3.82898 9.90295 3.13975C9.90295 2.45051 10.4263 1.88974 11.0696 1.88974C11.7129 1.88974 12.2362 2.45048 12.2362 3.13972C12.2362 3.82895 11.7129 4.38973 11.0696 4.38973Z'
					fill='white'
				/>
			</svg>
		),
	},
	{
		value: 'telegram',
		label: (
			<svg
				width='15'
				height='13'
				viewBox='0 0 15 13'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.88574 8.48813L5.63761 11.9781C5.99261 11.9781 6.14636 11.8256 6.33074 11.6425L7.99511 10.0519L11.4439 12.5775C12.0764 12.93 12.522 12.7444 12.6926 11.9956L14.9564 1.38813L14.957 1.38751C15.1576 0.452509 14.6189 0.0868844 14.0026 0.316259L0.696361 5.41063C-0.211764 5.76313 -0.198014 6.26938 0.541986 6.49876L3.94386 7.55688L11.8457 2.61251C12.2176 2.36626 12.5557 2.50251 12.2776 2.74876L5.88574 8.48813Z'
					fill='white'
				/>
			</svg>
		),
	},
];

const Header = () => {
	const { getValue, onChange, langOptions } = useContext(LangContext);

	const [currentSocial, setCurrentSocial] = useState('youtube');

	function getValueSocial() {
		return currentSocial
			? socialOptions.find(c => c.value === currentSocial)
			: '';
	}

	function onChangeSocial(newValue) {
		setCurrentSocial(newValue.value);

		switch (newValue.value) {
			case 'youtube':
				window.open('https://youtube.com');
				break;
			case 'facebook':
				window.open('https://facebook.com');
				break;
			case 'instagram':
				window.open('https://instagram.com');
				break;
			case 'telegram':
				window.open('https://telegram.com');
				break;
			default:
				alert('Нет таких значений');
		}
	}

	const { isComponentVisible, setIsComponentVisible } =
		useOutsideAlerter(false);

	isComponentVisible
		? disableBodyScroll(document, scrollOptions)
		: enableBodyScroll(document, scrollOptions);

	return (
		<header className='header'>
			<img src={headerBgLeft} alt='header-bg' className='header_bg' />
			<div className='header__container'>
				<div className='header__body'>
					<div className='header__logo logo'>
						<Link to='/'>
							<img src={logo} alt='logo' />
						</Link>
					</div>
					<div className='header__menu menu'>
						<button
							type='button'
							onClick={() => setIsComponentVisible(!isComponentVisible)}
							className='menu__icon icon-menu'
						>
							<img
								src={
									isComponentVisible ? hamburgerStateOpen : hamburgerStateClose
								}
								alt='state-open'
							/>
						</button>
						<nav
							className={`menu__body ${isComponentVisible ? '_active' : ''}`}
						>
							<ul className='menu__list'>
								<li className='menu__item'>
									<Popup
										trigger={open => (
											<button className='menu__link'>
												О КОМПАНИИ
												<svg
													className='menu__link-arrow'
													width='6'
													height='3'
													viewBox='0 0 8 5'
													fill='none'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path d='M1 1L4 4L7 1' stroke='white' />
												</svg>
											</button>
										)}
										position='bottom center'
										closeOnDocumentClick
										on={['hover', 'click']}
										arrow={false}
									>
										<div className='menu__list-sub'>
											<ul className='menu__list-sub--wrapper'>
												<li className='menu__item-sub'>
													<NavLink to='/about' className='menu__link-sub'>
														U-KG HOLDING
													</NavLink>
												</li>
												<li className='menu__item-sub'>
													<NavLink to='/documents' className='menu__link-sub'>
														Документы
													</NavLink>
												</li>
												<li className='menu__item-sub'>
													<NavLink to='/companies' className='menu__link-sub'>
														Компании
													</NavLink>
												</li>
											</ul>
										</div>
									</Popup>
								</li>
								<li className='menu__item'>
									<NavLink to='/investors' className='menu__link'>
										{' '}
										ИНВЕСТОРАМ{' '}
									</NavLink>
								</li>
								<li className='menu__item'>
									<NavLink to='/partners' className='menu__link'>
										{' '}
										ПАРТНЕРАМ{' '}
									</NavLink>
								</li>
								<li className='menu__item'>
									<NavLink to='/production' className='menu__link'>
										Производство
									</NavLink>
								</li>
								<li className='menu__item'>
									<NavLink to='/cgtoken' className='menu__link'>
										CG TOKEN
									</NavLink>
								</li>
								<li className='menu__item'>
									<NavLink to='/contacts' className='menu__link'>
										КОНТАКТЫ
									</NavLink>
								</li>
							</ul>
							<div className='header__lang lang'>
								<Select
									classNamePrefix='lang-list-top-promo'
									onChange={onChange}
									value={getValue()}
									className='lang-list'
									options={langOptions}
									isSearchable={false}
								/>
							</div>
							<ul className='menu__social'>
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
						</nav>
					</div>
					<div className='header__lang lang'>
						<Select
							isSearchable={false}
							classNamePrefix='lang-list-top-promo'
							onChange={onChange}
							value={getValue()}
							className='lang-list'
							options={langOptions}
						/>
					</div>
					<div className='header__social social'>
						<Select
							isSearchable={false}
							classNamePrefix='lang-list-top-promo'
							onChange={onChangeSocial}
							value={getValueSocial()}
							className='social-list'
							options={socialOptions}
						/>
					</div>
					<Link to='/login' className='header__auth auth'>
						<img src={enter} alt='enter' />
						Вход
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
