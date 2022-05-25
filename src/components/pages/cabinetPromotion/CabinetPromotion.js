import { useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import { Snackbar } from '@mui/material';
// Styles
import './cabinetPromotion.scss';
import RefLink from './../../functions/RefLink';
import {Helmet} from "react-helmet";

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<li
			role='tabpanel'
			hidden={value !== index}
			id={`cabpromo-tabpanel-${index}`}
			aria-labelledby={`cabpromo-tab-${index}`}
			{...other}
		>
			{value === index && <>{children}</>}
		</li>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
};

function a11yProps(index) {
	return {
		id: `cabpromo-tab-${index}`,
		'aria-controls': `cabpromo-tabpanel-${index}`,
	};
}

export default function CabinetPromotion() {
	const [value, setValue] = useState(0);
	const [open, setOpen] = useState(false);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	const handleClick = e => {
		e.stopPropagation();
		setOpen(true);
		navigator.clipboard.writeText(e.currentTarget.previousElementSibling.innerText);
	};

	return (
		<div className='cabinet'>
		<Helmet>
				<meta name="viewport" content="width=1660" />
			</Helmet>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabpromo'>
							<div className='cabpromo__title'>
								Рекламные <span className='gold'>материалы</span>
							</div>
							<div className='cabpromo__link'>
								<div className='cabpromo__link-wrapper'>
									<label htmlFor='reflink'>ВАША РЕФЕРАЛЬНАЯ ССЫЛКА: </label>

									<span className='cabpromo__link-input'>
										<span><RefLink /></span>
									</span>
									<button
										onClick={handleClick}
										className='cabpromo__link-button button button_gold'
									>
										Скопировать
									</button>
									<Snackbar
										message='Скопировано в буфер обмена'
										anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
										autoHideDuration={2000}
										onClose={() => setOpen(false)}
										open={open}
									/>
								</div>
							</div>
							<div className='cabpromo__tabs'>
								<Tabs
									className='cabpromo__tabs-navigation'
									value={value}
									onChange={handleChange}
									aria-label='cabpromo-tabstitles'
								>
									<Tab label='ВИДЕОПРЕЗЕНТАЦИЯ' {...a11yProps(0)} />
									<Tab label='PDF презентация' {...a11yProps(1)} />
									<Tab label='Интро' {...a11yProps(2)} />
									<Tab label='Аутро' {...a11yProps(3)} />
									<Tab label='Логотипы' {...a11yProps(4)} />
									<Tab label='Brand wall' {...a11yProps(5)} />
									<Tab label='Фирменные обои' {...a11yProps(6)} />
								</Tabs>
								<ul data-tabs-body className='cabpromo__tabs-content'>
									<TabPanel value={value} index={0}></TabPanel>
									<TabPanel value={value} index={1}></TabPanel>
									<TabPanel value={value} index={2}></TabPanel>
									<TabPanel value={value} index={3}></TabPanel>
									<TabPanel value={value} index={4}></TabPanel>
									<TabPanel value={value} index={5}></TabPanel>
									<TabPanel value={value} index={6}></TabPanel>
								</ul>
							</div>
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
		</div>
	);
}
