import { useContext } from 'react';
import LangContext from '../app/context';
import Select from 'react-select';
import Clock from './Clock';

import { settingsIcon, exitIcon, youtube, facebook, instagram, telegram } from '../../img/images';

import './cabinetHeader.scss';

export default function CabinetHeader() {
	const {getValue, onChange, options} = useContext(LangContext);
	

	return (
		<div className='cabinet__header'>
			<div className='cabinet__header-btns'>
				<a href='/' className='cabinet__header-btns--settings gold'>
					<img src={settingsIcon} alt='settings' />
					<span>Настройки</span>
				</a>
				<a href='/' className='cabinet__header-btns--exit gold'>
					<img src={exitIcon} alt='exit' />
					<span>Выход</span>
				</a>
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
						classNamePrefix='lang-list'
						onChange={onChange}
						value={getValue()}
						className='lang__list'
						options={options}
					/>
				</div>
				<div className='cabinet__header-time'>
					<Clock/>
				</div>
			</div>
		</div>
	);
}
