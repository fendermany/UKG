// Functions
import { useQuery } from 'react-query';
import UserServices from './../../services/UserServices';
// Media
import { cg, gold } from '../../img/images';
// Styles
import './cabinetPools.scss';

function CabinetPools() {
	const { data: pools, isSuccess: isSuccessPools } = useQuery(
		'pool',
		() => UserServices.userPool(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<>
			{isSuccessPools && (
				<ul className='pulls'>
					{pools.data.map((pool, idx) => (
						<li className='pulls__item pull' key={`pull ${idx}`}>
							<div className='pull__header'>
								<img src={gold} alt='pull-header' />
								<div className='pull__name grey-block-dark'>
									<span className='gold'>{pool.name}</span>
								</div>
								<div className='pull__progress'>
									<div className='pull__progress-start'>0%</div>
									<div className='pull__progress-body'>
										<div
											style={{
												width: `${pool.completedPercent}%`,
											}}
											className='pull__progress-body--inner'
										>
											{pool.completedPercent > 2 && (
												<div className='pull__progress-current gold'>
													{pool.completedPercent}%
												</div>
											)}
										</div>
									</div>
									<div className='pull__progress-end'>100%</div>
								</div>
								<div className='pull__profit grey-block-dark'>
									<span>Прибыль</span>
									<span className='gold'></span>
									<img src={cg} alt='pull-profit' />
								</div>
								<div className='pull__more'>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
							<div className='pull__body'>
								<img src={gold} alt='pull-header' />
								<div className='pull__table'>
									<div className='pull__column'>
										<span className='gold'>{pool.name}</span>
										<span>{pool.months} месяцев</span>
									</div>
									<div className='pull__column'>
										<span className='gold'>Дата старта</span>
										<span>{pool.dateCreated.split('T')[0]}</span>
									</div>
									<div className='pull__column'>
										<span className='gold'>Дата окончания</span>
										<span></span>
									</div>
									<div className='pull__column'>
										<span className='gold'>Сумма депозита</span>
										<span>
											({pool.rate}% + тело ) {pool.totalRate}
											<img src={cg} alt='deposit amount' />
										</span>
									</div>
									<div className='pull__column'>
										<span className='gold'>Общая прибыль</span>
										<span>
											<img src={cg} alt='deposit amount' />
										</span>
									</div>
									<div className='pull__column'>
										<span className='gold'>Заработанно</span>
										<span>
											<img src={cg} alt='deposit amount' />
										</span>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	);
}

export default CabinetPools;
