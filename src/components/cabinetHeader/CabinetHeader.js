// Functions
import { useContext } from 'react';
import LangContext from './../../contexts/LangContext';
import { Link } from 'react-router-dom';

import Select from 'react-select';
import Clock from './Clock';
import { AuthContext } from './../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';
// Media
import {
	settingsIcon,
	exitIcon,
	youtube,
	facebook,
	instagram,
	telegram,
} from '../../img/images';
// Styles
import './cabinetHeader.scss';

function CabinetHeader() {
	const { getValue, onChange, langOptions } = useContext(LangContext);
	const { store } = useContext(AuthContext);

	const handleLogout = () => {
		store.logout();
	};

	return (
		<div className='cabinet__header'>
			<div className='cabinet__header-btns'>
				<Link to='/profile' className='cabinet__header-btns--settings gold'>
					<img src={settingsIcon} alt='settings' />
					<span>Настройки</span>
				</Link>
				<button
					onClick={handleLogout}
					className='cabinet__header-btns--exit gold'
				>
					<img src={exitIcon} alt='exit' />
					<span>Выход</span>
				</button>
			</div>
			<div className='cabinet__header-rightside'>
				<div className='cabinet__header-social social'>
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
				<div className='cabinet__header-lang lang'>
					<Select
						classNamePrefix='lang-list-top'
						onChange={onChange}
						value={getValue()}
						className='lang-list'
						options={langOptions}
						isSearchable={false}
					/>
				</div>
				<div className='cabinet__header-time'>
					<Clock />
				</div>
			</div>
		</div>
	);
}

export default observer(CabinetHeader);
