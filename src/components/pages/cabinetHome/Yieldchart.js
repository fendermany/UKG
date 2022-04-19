import { PureComponent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import PropTypes from 'prop-types';
import { AreaChart, Area, XAxis, Tooltip } from 'recharts';
import styled from 'styled-components';

const data = [
	{ date: '14.06.2021', chart: 400 },
	{ date: '14.07.2021', chart: 500 },
	{ date: '14.08.2021', chart: 600 },
	{ date: '14.09.2021', chart: 300 },
];

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

// const Text = styled.text`
// 	font-family: 'Gilroy';
// 	font-weight: 400;
// 	font-size: 12px;
// 	line-height: 17px;
// 	color: rgba(255, 255, 255, 0.83);
// `;

// class CustomizedAxisTick extends PureComponent {
//   render() {
//     const { x, y, payload } = this.props;

//     return (
//       <g transform={`translate(${x},${y})`}>
//         <text x={0} y={0} dy={46} textAnchor="end" fill="#666">
//           {payload.value}
//         </text>
//       </g>
//     );
//   }
// }

function Yieldchart() {
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
						<AreaChart width={818} height={170} data={data}>
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
								tick={{fontSize: '12px', fill: 'rgba(255, 255, 255, 0.83)'}}
							/>
							<Tooltip />
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
						здесь график
					</TabPanel>
					<TabPanel value={value} index={2}>
						здесь график
					</TabPanel>
				</ul>
			</div>
		</div>
	);
}

export default Yieldchart;
