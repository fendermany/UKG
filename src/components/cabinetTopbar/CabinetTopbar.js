import { cg, cgWhite, car, gift, money } from '../../img/images';

import './cabinetTopbar.scss';

export default function CabinetTopbar() {
	return (
		<div className='cabinet__topbar'>
							<div className='cabinet__topbar-wrapper'>
								<div className='cabinet__topbar-balance'>
									<div className='cabinet__topbar-balance--wrapper'>
										<span>Ваш баланс</span>
										<span className='gold'>1046.14</span>
										<img src={cg} alt='balance' />
										<img src={money} alt='balance-money' />
									</div>
								</div>
								<div className='cabinet__topbar-ew grey-block-dark'>
									<div>
										<span>Заработано</span>
										<span>
											391.14
											<img src={cgWhite} alt='earned' />
										</span>
									</div>
									<div>
										<span>Выведено</span>
										<span>
											144.14
											<img src={cgWhite} alt='withdrawn' />
										</span>
									</div>
								</div>
								<div className='cabinet__topbar-actdep grey-block-dark'>
									<div>
										<span>Активные депозиты</span>
										<span>4 </span>
									</div>
									<div>
										<span>На сумму</span>
										<span>
											353.14
											<img src={cgWhite} alt='earned' />
										</span>
									</div>
								</div>
								<div className='cabinet__topbar-reflvl grey-block-dark'>
									<div className='grey-block'>
										<span>Реферальный уровень</span>
										<span>
											<span>Уровень 5 </span>
											<span className='gold'>- 15%</span>
										</span>
									</div>
									<div>
										<span>Уровень менеджера</span>
										<span>М4</span>
									</div>
								</div>
								<div className='cabinet__topbar-partnum grey-block-dark'>
									<div>
										<span>Количество партнеров</span>
										<span>138</span>
									</div>
									<div>
										<span>Акт</span>
										<span className='green'>125</span>
										<span>Неак.</span>
										<span className='red'>54</span>
									</div>
								</div>
								<div className='cabinet__topbar-gift grey-block-dark'>
									<div>
										<img src={gift} alt='topbar-gift' />
										<span>
											ПОДАРОК ЗА СЛЕДУЮЩИЙ
											<br />
											УРОВЕНЬ МЕНЕДЖЕРА
										</span>
									</div>
									<img src={car} alt='topbar-car' />
								</div>
							</div>
						</div>
	)
}
