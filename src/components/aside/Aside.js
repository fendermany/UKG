import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Snackbar } from '@mui/material';
import { copyIcon, logo } from '../../img/images';


import './aside.scss';

export default function Aside() {
	const [open, setOpen] = useState(false);

	const handleClick = e => {
		e.stopPropagation()
		setOpen(true);
		navigator.clipboard.writeText(e.currentTarget.firstElementChild.innerText);
	};

	return (
		<aside className='cabinet__aside'>
			<div className='cabinet__aside-logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='cabinet__aside-welcome grey-block'>
				<span>Добро пожаловать</span>
				<div className='cabinet__aside-welcome--name gold'>Artem</div>
				<span>Ваша реферальная ссылка</span>
				<button className='gold' onClick={handleClick}>
					<span>https://google.com/awdawdawdawdawda</span>
					<img src={copyIcon} alt='copy' />
				</button>
				<Snackbar
					message='Скопировано в буфер обмена'
					anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					autoHideDuration={2000}
					onClose={() => setOpen(false)}
					open={open}
				/>
			</div>
			<nav className='cabinet__aside-menu'>
				<ul>
					<li>
						<NavLink to='/'>Главная страница</NavLink>
					</li>
					<li>
						<NavLink to='/investments'>Ивестиции</NavLink>
					</li>
					<li>
						<NavLink to='/token'>Токен</NavLink>
					</li>
					<li>
						<NavLink to='/partnership'>Партнерская программа</NavLink>
					</li>
					<li>
						<NavLink to='/profile'>Мой профиль</NavLink>
					</li>
					<li>
						<NavLink to='/promotion'>Рекламные материалы</NavLink>
					</li>
					<li>
						<NavLink to='/help'>Помощь</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}
