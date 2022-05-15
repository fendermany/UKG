import { useContext, useState } from 'react';
import DataContext from './../../../contexts/DataContext';
import Select from 'react-select';
// Media
// Media
import { calcGold } from '../../../img/images';

const CabinetInvestmentsCalc = () => {
	const { calcOptions } = useContext(DataContext);
	const [currentCalc, setCurrentCalc] = useState('pool5');
	const [calcSum, setCalcSum] = useState(10000);
	const [calcMonth, setCalcMonth] = useState({
		value:
			(+calcSum / 100) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent),
		procent: +calcOptions
			.filter(c => c.value === currentCalc)
			.map(c => c.procent),
	});
	const [calcAll, setCalcAll] = useState({
		value:
			(+calcSum / 100) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.months),
		procent:
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.months) +
			+calcOptions.filter(c => c.value === currentCalc).map(c => c.body),
	});
	const [calcPrize, setCalcPrize] = useState(
		calcOptions.filter(c => c.value === currentCalc).map(c => c.prize)
	);

	const getValue = () => {
		return currentCalc ? calcOptions.find(c => c.value === currentCalc) : '';
	};

	function onChange(newValue) {
		setCurrentCalc(newValue.value);
		setCalcPrize(newValue.prize);
		setCalcMonth({
			value: (+calcSum / 100) * newValue.procent,
			procent: newValue.procent,
		});
		setCalcAll({
			value: (+calcSum / 100) * +newValue.procent * +newValue.months,
			procent: +newValue.procent * +newValue.months + +newValue.body,
		});
	}

	const handleChange = event => {
		setCalcSum(event.target.value);
		setCalcMonth({
			value:
				(+event.target.value / 100) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent),
			procent: +calcOptions
				.filter(c => c.value === currentCalc)
				.map(c => c.procent),
		});
		setCalcAll({
			value:
				(+event.target.value / 100) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.months),
			procent:
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.procent) *
					+calcOptions.filter(c => c.value === currentCalc).map(c => c.months) +
				+calcOptions.filter(c => c.value === currentCalc).map(c => c.body),
		});
	};

	return (
		<div className='cabinvest__calc'>
			<div className='cabinvest__calc-inputs'>
				<div className='cabinvest__calc-inputs--wrapper'>
					<div className='cabinvest__calc-title cabinet__title_36'>
						Калькулятор доходности
					</div>
					<div className='cabinvest__calc-list'>
						<div className='cabinvest__calc-item'>
							<div className='cabinvest__calc-subtitle'>Инвестиционный пул</div>
							<Select
								classNamePrefix='calc-list-cabinet'
								onChange={onChange}
								value={getValue()}
								className='cabinvest__calc-select'
								options={calcOptions}
							/>
						</div>
						<div className='cabinvest__calc-item'>
							<div className='cabinvest__calc-subtitle'>Сумма инвестиций</div>
							<div className='cabinvest__calc-select'>
								<input
									autoComplete='off'
									type='text'
									name='sum'
									value={calcSum}
									onChange={handleChange}
									placeholder='10 000'
									className='input'
									maxLength='7'
								/>
								<span>$</span>
							</div>
						</div>
					</div>
					<button className='cabinvest__calc-button button button_gold'>
						Инвестировать
					</button>
				</div>
			</div>
			<div className='cabinvest__calc-result'>
				<div className='cabinvest__calc-result--wrapper'>
					<div className='cabinvest__calc-result--item'>
						<div className='cabinvest__calc-result--title'>
							Ваш ежемесячный доход
						</div>
						<div className='cabinvest__calc-result--body'>
							<span>{Math.round(calcMonth.value)}$</span>
							<span>{calcMonth.procent}%</span>
						</div>
					</div>
					<div className='cabinvest__calc-result--item'>
						<div className='cabinvest__calc-result--title'>Ваш общий доход</div>
						<div className='cabinvest__calc-result--body'>
							<span>
								<span className='gold'>{Math.round(calcAll.value)}$</span>
							</span>
							<span>{calcAll.procent}%</span>
						</div>
					</div>
					{calcPrize && (
						<div className='cabinvest__calc-result--footer'>
							<div>
								<span>
									<img src={calcGold} alt='Калькулятор доходности' />
								</span>
							</div>
							<span className='gold'>Золотой слиток U-KG HOLDING</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CabinetInvestmentsCalc;
