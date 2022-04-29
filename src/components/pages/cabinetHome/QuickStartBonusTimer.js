import { useTimer } from 'react-timer-hook';


// Media
import { calendar, clock } from '../../../img/images';

const QuickStartBonusTimer = ({ expiryTimestamp }) => {

	const { seconds, minutes, hours, days } = useTimer({
		expiryTimestamp,
	});

	return (
		<div className='cabhome__qsb-body--row'>
			<div className='cabhome__qsb-body--title'>сколько осталось</div>
			<div className='cabhome__qsb-body--item grey-block-dark'>
				<img src={calendar} alt='quick-start-bonus-calendar' />
				<span>Дата</span>
				<span className='gold'>
					{days} {days > 5 ? ' дней' : days < 5 && days > 1 ? ' дня' : ' день'}
				</span>
			</div>
			<div className='cabhome__qsb-body--item grey-block-dark'>
				<img src={clock} alt='quick-start-bonus-clock' />
				<span>Время</span>
				<span className='gold'>
					{hours}:{minutes}:{seconds}
				</span>
			</div>
		</div>
	);
};

export default QuickStartBonusTimer;
