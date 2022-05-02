import { useState } from 'react';
import PropTypes from 'prop-types';
// Components
import { Tab, Tabs } from '@mui/material';
// Graphics
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';
// Media
import { cg } from '../../../img/images';
// Hooks
import useAdditions from './../../../hooks/useAdditions';
import useAdditionsMonth from './../../../hooks/useAdditionsMonth';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<li
			role='tabpanel'
			hidden={value !== index}
			id={`yieldchart-tabpanel-${index}`}
			aria-labelledby={`yieldchart-tab-${index}`}
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
		id: `yieldchart-tab-${index}`,
		'aria-controls': `yieldchart-tabpanel-${index}`,
	};
}

const CustomTooltip = ({ active, payload, label }) => {
	if (active && payload && payload.length) {
		return (
			<div className='custom-tooltip'>
				<div className='custom-tooltip__wrapper'>
					<p className='label'>{label}</p>
					<p className='desc gold'>
						{payload[0].value} <img src={cg} alt='pull-profit' />
					</p>
				</div>
			</div>
		);
	}

	return null;
};

function Yieldchart() {
	const { getAddition, isSuccessAddition } = useAdditions();

	const { getAdditionMonth, isSuccessAdditionMonth } = useAdditionsMonth();

	let dataYears = [];
	let dataMonths = [];
	let dataDates = [];

	let date = new Date();
	let currentDay = date.getDate();
	let currentYear = date.getFullYear();
	let currentMonth = date.getMonth();

	if (isSuccessAddition) {
		dataYears.push(
			{
				date: currentYear - 1,
				chart: Math.floor(
					+getAddition.data.content
						.filter(item => +item.time.slice(0, 4) === currentYear - 1)
						.reduce((acc, item) => acc + item.amount, 0)
				),
			},
			{
				date: currentYear,
				chart: Math.floor(
					+getAddition.data.content
						.filter(item => +item.time.slice(0, 4) === currentYear)
						.reduce((acc, item) => acc + item.amount, 0)
				),
			}
		);
	}

	if (isSuccessAddition) {
		let dataMonthsArray = [
			{
				date: `${currentDay}.01.${currentYear}`,
				chart: +getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '01' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '02' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.02.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '02' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '03' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.03.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '03' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '04' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.04.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '04' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '05' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.05.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '05' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '06' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.06.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '06' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '07' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.07.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '07' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '08' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.08.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '08' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '09' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.09.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '09' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '10' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.10.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '10' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '11' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.11.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '11' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAddition.data.content.filter(
				item =>
					item.time.slice(5, 7) === '12' &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `${currentDay}.12.${currentYear}`,
				chart: Math.floor(+getAddition.data.content
					.filter(
						item =>
							item.time.slice(5, 7) === '12' &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
		];

		dataMonths = dataMonthsArray.filter(item => item !== false);
	}

	if (isSuccessAdditionMonth) {
		let dataDatesArray = [
			{
				date: `01.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '01' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '02' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `02.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '02' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '03' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `03.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '03' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '04' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `04.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '04' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '05' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `05.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '05' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '06' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `06.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '06' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '07' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `07.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '07' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '08' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `08.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '08' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '09' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `09.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '09' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '10' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `10.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '10' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '11' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `11.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '11' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '12' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `12.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '12' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '13' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `13.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '13' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '14' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `14.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '14' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '15' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `15.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '15' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '16' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `16.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '16' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '17' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `17.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '17' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '18' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `18.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '18' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '19' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `19.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '19' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '20' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `20.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '20' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '21' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `21.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '21' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '22' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `22.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '22' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '23' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `23.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '23' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '24' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `24.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '24' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '25' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `25.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '25' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '26' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `26.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '26' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '27' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `27.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '27' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '28' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `28.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '28' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '29' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `29.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '29' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '30' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `30.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '30' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
			+getAdditionMonth.data.content.filter(
				item =>
					item.time.slice(8, 10) === '31' &&
					+item.time.slice(5, 7) === currentMonth + 1 &&
					+item.time.slice(0, 4) === currentYear
			).length > 0 && {
				date: `31.${currentMonth + 1}.${currentYear}`,
				chart: Math.floor(+getAdditionMonth.data.content
					.filter(
						item =>
							item.time.slice(8, 10) === '31' &&
							+item.time.slice(5, 7) === currentMonth + 1 &&
							+item.time.slice(0, 4) === currentYear
					)
					.reduce((acc, item) => acc + item.amount, 0)),
			},
		];

		dataDates = dataDatesArray.filter(item => item !== false);
	}

	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className='cabhome__yieldchart'>
			<div className='cabhome__yieldchart--wrapper'>
				<div className='cabhome__yieldchart-top'>
					<div className='cabhome__yieldchart-title cabinet__title'>
						ГРАФИК <span className='gold'>ДОХОДНОСТИ</span>
					</div>
					<Tabs
						className='cabhome__yieldchart-tabstitles'
						value={value}
						onChange={handleChange}
						aria-label='yieldchart-tabstitles'
					>
						<Tab label='По дням' {...a11yProps(0)} />
						<Tab label='По месяцам' {...a11yProps(1)} />
						<Tab label='По годам' {...a11yProps(2)} />
					</Tabs>
				</div>
				<ul className='cabhome__yieldchart-tabsbodies'>
					<TabPanel value={value} index={0}>
						<AreaChart width={800} height={170} data={dataDates}>
							<defs>
								<linearGradient id='chart' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='8%' stopColor='#FFE38D1A' stopOpacity={1} />
									<stop offset='100%' stopColor='#FFE38D1A' stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis
								dataKey='date'
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: '12px', fill: 'rgba(255, 255, 255, 0.83)' }}
							/>
							<Tooltip content={<CustomTooltip />} />
							<Area
								type='monotone'
								dataKey='chart'
								stroke='#372C19'
								fillOpacity={1}
								fill='url(#chart)'
								dot={{ fill: '#7B602E', fillWidth: 4 }}
							/>
						</AreaChart>
					</TabPanel>
					<TabPanel value={value} index={1}>
						<AreaChart width={800} height={170} data={dataMonths}>
							<defs>
								<linearGradient id='chart' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='8%' stopColor='#FFE38D1A' stopOpacity={1} />
									<stop offset='100%' stopColor='#FFE38D1A' stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis
								dataKey='date'
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: '12px', fill: 'rgba(255, 255, 255, 0.83)' }}
							/>
							<Tooltip content={<CustomTooltip />} />
							<Area
								type='monotone'
								dataKey='chart'
								stroke='#372C19'
								fillOpacity={1}
								fill='url(#chart)'
								dot={{ fill: '#7B602E', fillWidth: 4 }}
							/>
						</AreaChart>
					</TabPanel>
					<TabPanel value={value} index={2}>
						<AreaChart width={800} height={170} data={dataYears}>
							<defs>
								<linearGradient id='chart' x1='0' y1='0' x2='0' y2='1'>
									<stop offset='8%' stopColor='#FFE38D1A' stopOpacity={1} />
									<stop offset='100%' stopColor='#FFE38D1A' stopOpacity={0} />
								</linearGradient>
							</defs>
							<XAxis
								dataKey='date'
								axisLine={false}
								tickLine={false}
								tick={{ fontSize: '12px', fill: 'rgba(255, 255, 255, 0.83)' }}
							/>
							<Tooltip content={<CustomTooltip />} />
							<Area
								type='monotone'
								dataKey='chart'
								stroke='#372C19'
								fillOpacity={1}
								fill='url(#chart)'
								dot={{ fill: '#7B602E', fillWidth: 4 }}
							/>
						</AreaChart>
					</TabPanel>
				</ul>
			</div>
		</div>
	);
}

export default Yieldchart;
