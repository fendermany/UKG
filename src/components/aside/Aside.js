// Functions
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserServices from './../../services/UserServices';
import { useQuery } from 'react-query';
import { Snackbar } from '@mui/material';
import RefLink from '../functions/RefLink';

// Media
import { copyIcon, logo } from '../../img/images';
// Styles
import './aside.scss';

function Aside() {
	const [open, setOpen] = useState(false);

	const handleClick = e => {
		e.stopPropagation();
		setOpen(true);
		navigator.clipboard.writeText(e.currentTarget.firstElementChild.innerText);
	};

	const { data, isSuccess } = useQuery('user', () => UserServices.userInfo(), {
		refetchOnWindowFocus: false,
	});

	const { data: walletsTree, isSuccess: isSuccessWalletsTree } = useQuery(
		'wallet',
		() => UserServices.walletsTree(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<aside className='cabinet__aside'>
			<div className='cabinet__aside-logo'>
				<img src={logo} alt='logo' />
			</div>
			<div className='cabinet__aside-welcome grey-block'>
				<span>Добро пожаловать</span>

				{isSuccess && (
					<div className='cabinet__aside-welcome--name gold'>
						{data.data.fullName}
					</div>
				)}
				<span>Ваша реферальная ссылка</span>
				<button className='gold' onClick={handleClick}>
					<span>
						<RefLink />
					</span>
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
					{isSuccessWalletsTree && walletsTree.status === 200 && (
						<li>
							<NavLink to='/partnership'>Партнерская программа</NavLink>
						</li>
					)}

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

export default Aside;
