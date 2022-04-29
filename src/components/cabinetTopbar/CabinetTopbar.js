// Функции
import { useQuery } from 'react-query';
import UserServices from './../../services/UserServices';
import Refbonus from '../functions/getRefBonus';

// Медиа
import { cg, cgWhite, car, gift, money } from '../../img/images';
// Стили
import './cabinetTopbar.scss';

function CabinetTopbar() {
	const { data: userInfo, isSuccess: isSuccessUserInfo } = useQuery(
		'user',
		() => UserServices.userInfo(),
		{
			refetchOnWindowFocus: false,
		}
	);

	const { data: walletsTree, isSuccess: isSuccessWalletsTree } = useQuery(
		'wallet',
		() => UserServices.walletsTree(),
		{
			refetchOnWindowFocus: false,
		}
	);

	const { data: getAddition, isSuccess: isSuccessAddition } = useQuery(
		'addition',
		() => UserServices.userTransactionAddition(),
		{
			refetchOnWindowFocus: false,
		}
	);

	const { data: getWithdrawalAll, isSuccess: isSuccessWithdrawalAll } =
		useQuery('withdrawal', () => UserServices.userWithdrawalAll(), {
			refetchOnWindowFocus: false,
		});

	return (
		<div className='cabinet__topbar'>
			<div className='cabinet__topbar-wrapper'>
				<div className='cabinet__topbar-balance'>
					<div className='cabinet__topbar-balance--wrapper'>
						<span>Ваш баланс</span>
						{isSuccessUserInfo && (
							<span className='gold'>{userInfo.data.balance.amount}</span>
						)}
						<img src={cg} alt='balance' />
						<img src={money} alt='balance-money' />
					</div>
				</div>
				<div className='cabinet__topbar-ew grey-block-dark'>
					<div>
						<span>Заработано</span>
						<span>
							{isSuccessAddition && (
								<>
									{getAddition.data.content.reduce(
										(acc, item) => acc + item.amount,
										0
									)}
								</>
							)}
							<img src={cgWhite} alt='earned' />
						</span>
					</div>
					<div>
						<span>Выведено</span>
						<span>
							{isSuccessWithdrawalAll && (
								<>
									{getWithdrawalAll.data.content.reduce(
										(acc, item) => acc + item.amount,
										0
									)}
								</>
							)}
							<img src={cgWhite} alt='withdrawn' />
						</span>
					</div>
				</div>
				<div className='cabinet__topbar-actdep grey-block-dark'>
					<div>
						<span>Активные депозиты</span>
						{isSuccessUserInfo && <span>{userInfo.data.pools.length}</span>}
					</div>
					<div>
						<span>На сумму</span>
						<span>
							{isSuccessUserInfo && (
								<>
									{userInfo.data.pools.reduce(
										(acc, item) => acc + item.amount,
										0
									)}
								</>
							)}
							<img src={cgWhite} alt='earned' />
						</span>
					</div>
				</div>
				<div className='cabinet__topbar-reflvl grey-block-dark'>
					<div className='grey-block'>
						<span>Реферальный уровень</span>
						{isSuccessUserInfo && (
							<span>
								<span>Уровень {userInfo.data.rank.replace(/[^0-9]/g, '')}</span>
								<span className='gold'>
									- {Refbonus(isSuccessUserInfo, userInfo)}
								</span>
							</span>
						)}
					</div>
					<div>
						{isSuccessWalletsTree && walletsTree.data && (
							<>
								<span>Уровень менеджера</span>
								{isSuccessWalletsTree && (
									<span>М{walletsTree.data.rank.replace(/[^0-9]/g, '')}</span>
								)}
							</>
						)}
					</div>
				</div>
				{isSuccessWalletsTree && walletsTree.data && (
					<div className='cabinet__topbar-partnum grey-block-dark'>
						<div>
							<span>Количество партнеров</span>
							{isSuccessWalletsTree && (
								<span>{walletsTree.data.children.length}</span>
							)}
						</div>
						<div>
							{/* {isSuccessWalletsTree && walletsTree.data.children.length > 0 ? (
							<>
								<span>Акт</span>
								<span className='green'>125</span>
								<span>Неак.</span>
								<span className='red'>54</span>
							</>
						) : null} */}
						</div>
					</div>
				)}

				{/* <div className='cabinet__topbar-gift grey-block-dark'>
					<div>
						<img src={gift} alt='topbar-gift' />
						<span>
							ПОДАРОК ЗА СЛЕДУЮЩИЙ
							<br />
							УРОВЕНЬ МЕНЕДЖЕРА
						</span>
					</div>
					<img src={car} alt='topbar-car' />
				</div> */}
			</div>
		</div>
	);
}

export default CabinetTopbar;
