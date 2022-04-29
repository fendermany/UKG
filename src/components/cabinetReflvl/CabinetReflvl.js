import refLvl from '../functions/getRefLvl';
import UserServices from './../../services/UserServices';
import { useQuery } from 'react-query';
// Media
import { cgWhite, okCircle } from '../../img/images';
// Styles
import './cabinetReflvl.scss';

function CabinetReflvl() {
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

	return (
		<div className='reflvl__body'>
			<div className='reflvl__progress'>
				<span
					style={{
						width: `${refLvl(
							isSuccessUserInfo,
							userInfo,
							isSuccessWalletsTree,
							walletsTree
						)}px`,
					}}
				></span>
			</div>
			<div className='reflvl__thead gold'>
				<span>Уровень</span>
				<span>РЕФ. БОНУС</span>
				<span>Оборот</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 2
						? '_active'
						: null
				}`}
			>
				<span>2 уровень</span>
				<span className='gold'>8%</span>
				<span>
					1000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 2 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{1000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 2 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 2 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 3
						? '_active'
						: null
				}`}
			>
				<span>3 уровень</span>
				<span className='gold'>9%</span>
				<span>
					5000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 3 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{5000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 3 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 3 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 4
						? '_active'
						: null
				}`}
			>
				<span>4 уровень</span>
				<span className='gold'>10%</span>
				<span>
					10000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 4 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{10000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 4 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 4 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 5
						? '_active'
						: null
				}`}
			>
				<span>5 уровень</span>
				<span className='gold'>11%</span>
				<span>
					25000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 5 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{25000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 5 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 5 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 6
						? '_active'
						: null
				}`}
			>
				<span>6 уровень</span>
				<span className='gold'>12%</span>
				<span>
					50000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 6 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{50000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 6 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 6 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 7
						? '_active'
						: null
				}`}
			>
				<span>7 уровень</span>
				<span className='gold'>13%</span>
				<span>
					100000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 7 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{100000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 7 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 7 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 8
						? '_active'
						: null
				}`}
			>
				<span>8 уровень</span>
				<span className='gold'>14%</span>
				<span>
					250000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 8 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{250000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 8 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 8 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 9
						? '_active'
						: null
				}`}
			>
				<span>9 уровень</span>
				<span className='gold'>15%</span>
				<span>
					500000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 9 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{500000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 9 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 9 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 10
						? '_active'
						: null
				}`}
			>
				<span>10 уровень</span>
				<span className='gold'>16%</span>
				<span>
					1000000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 10 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{1000000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 10 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 10 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 11
						? '_active'
						: null
				}`}
			>
				<span>11 уровень</span>
				<span className='gold'>17%</span>
				<span>
					2500000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 11 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{2500000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 11 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 11 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
			<div
				className={`reflvl__step ${
					isSuccessUserInfo && +userInfo.data.rank.replace(/[^0-9]/g, '') === 12
						? '_active'
						: null
				}`}
			>
				<span>12 уровень</span>
				<span className='gold'>18%</span>
				<span>
					5000000
					<img src={cgWhite} alt='lvl-1' />
				</span>
				<span>
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') < 12 && (
							<>
								<span>ОСТАЛОСЬ</span>
								<span>
									{5000000 -
										(walletsTree.data.leftTotalPoints +
											walletsTree.data.rightTotalPoints)}
								</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') === 12 && (
							<>
								<span>Текущий</span>
							</>
						)}
					{isSuccessUserInfo &&
						isSuccessWalletsTree &&
						+userInfo.data.rank.replace(/[^0-9]/g, '') > 12 && (
							<>
								<img src={okCircle} alt='done' />
							</>
						)}
				</span>
			</div>
		</div>
	);
}

export default CabinetReflvl;
