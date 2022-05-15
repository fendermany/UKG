import { useState, Fragment } from 'react';
import { useMutation } from 'react-query';
import UserServices from './../../../services/UserServices';
import { Swiper, SwiperSlide } from 'swiper/react';
// Hooks
import usePools from './../../../hooks/usePools';
import useUserInfo from './../../../hooks/useUserInfo';
// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import Modals from './../../ui/modals/Modals';
import Spinner from './../../spinner/Spinner';
import Alert from './../../ui/alert/Alert';

// Media
import { cg, gold, poucheGold, gold1 } from '../../../img/images';
// Styles
import './cabinetInvestments.scss';
import '../../cabinetPools/cabinetPools.scss';
import CabinetInvestmentsCalc from './CabinetInvestmentsCalc';

const Schema = Yup.object().shape({
	amount: Yup.string()
		.required('Введите сумму')
		.min(2, 'Минимум 2 цифры')
		.max(25, 'Максимум 25 цифр'),
});

export default function CabinetInvestments() {
	const { pools, isSuccessPools } = usePools();
	const { userInfo, isSuccessUserInfo } = useUserInfo();

	const [modalAmount, setModalAmount] = useState(false);
	const [modalBuy, setModalBuy] = useState(false);
	const [modalComplete, setModalComplete] = useState(false);
	const [amount, setAmount] = useState(null);
	const [id, setId] = useState(null);

	const handleId = e => {
		setModalAmount(true);
		setId(e.currentTarget.previousElementSibling.defaultValue);
	};

	const handleAmount = data => {
		setModalAmount(false);
		setModalBuy(true);
		setAmount(data.amount);
	};

	const {
		register,
		handleSubmit,
		reset: resetAmount,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const {
		mutate: buy,
		isLoading,
		isError,
		error,
	} = useMutation(
		'balance buy',
		data => UserServices.balanceBuy(id, data.amount),
		{
			onSuccess() {
				resetAmount(
					{
						amount: '',
					},
					{
						keepErrors: true,
						keepDirty: true,
						keepIsSubmitted: false,
						keepTouched: false,
						keepIsValid: false,
						keepSubmitCount: false,
					}
				);
				setModalBuy(false);
				setModalComplete(true);
			},
		}
	);

	// Active pools

	let activePools = [];

	if (isSuccessPools) {
		pools.data.map(item => {
			if (item.status === 'ACTIVE') {
				activePools.push(item.publicId);
			}
		});
	}

	return (
		<div className='cabinet'>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<div className='cabinvest'>
							<Swiper
								className='cabinvest__slider'
								spaceBetween={22}
								slidesPerView={'auto'}
								wrapperTag='ul'
							>
								{isSuccessPools &&
									pools.data.map((pool, idx) => (
										<SwiperSlide
											key={`slide ${idx}`}
											className={pool.rate > 12 ? 'slide-gold' : 'slide-silver'}
											tag='li'
										>
											<div className='cabinvest__slider-top'>
												<span>Срок инвестиции</span>
												<span>{pool.months} мес</span>
											</div>
											<div className='cabinvest__slider-second justify-between'>
												<span className='whitespace-nowrap'>
													мин. инвестиция{' '}
													<span>
														от {pool.minAmount}
														<img className='ml-1' src={cg} alt='pool' />
													</span>
												</span>
												<img src={poucheGold} alt='мин. инвестиция  от 50$' />
											</div>
											<div className='cabinvest__slider-third'>
												<span>Ежемесячная доходность</span>
												<span>{pool.rate}%</span>
											</div>
											<div className='cabinvest__slider-fourth'>
												<span>Общая доходность</span>
												<span>{pool.totalRate}%</span>
											</div>
											<div className='cabinvest__slider-fifth'>
												<span className='flex items-center'>
													{pool.rate > 12 && (
														<>
															<img src={gold1} alt='В подарок золотой слиток' />
															+ 1 слиток
														</>
													)}
												</span>
												<input hidden defaultValue={pool.publicId}></input>
												{pool.status === 'INACTIVE' ? (
													<button onClick={handleId}>Инвестировать</button>
												) : (
													<button>ACTIVE</button>
												)}
											</div>
										</SwiperSlide>
									))}
							</Swiper>
							<CabinetInvestmentsCalc />
							{activePools.length > 0 ? (
								<div className='cabinvest__pulls'>
									<div className='cabinvest__pulls-title cabinet__title_36'>
										Ваши активные пулы
									</div>
									{isSuccessUserInfo && (
										<ul className='pulls'>
											{userInfo.data.pools.map((pool, idx) => {
												if (activePools.includes(pool.publicId)) {
													return (
														<li
															className='pulls__item pull'
															key={`pool ${idx}`}
														>
															<div className='pull__header'>
																<img src={gold} alt='pull-header' />
																<div className='pull__name grey-block-dark'>
																	<span className='gold'>
																		{isSuccessPools &&
																			pools.data
																				.filter(
																					item =>
																						item.publicId === pool.publicId
																				)
																				.map(item => item.name)[0]}
																	</span>
																</div>
																<div className='pull__progress'>
																	<div className='pull__progress-start'>
																		0дн
																	</div>
																	<div className='pull__progress-body'>
																		<div
																			style={{
																				width: `${
																					isSuccessPools &&
																					pools.data
																						.filter(
																							item =>
																								item.publicId === pool.publicId
																						)
																						.map(
																							item =>
																								(913 / 100) *
																								(((item.days - item.daysLeft) /
																									item.days) *
																									100)
																						)[0]
																				}px`,
																			}}
																			className='pull__progress-body--inner'
																		>
																			{isSuccessPools &&
																				pools.data
																					.filter(
																						item =>
																							item.publicId === pool.publicId
																					)
																					.map(
																						item =>
																							item.days - item.daysLeft >
																								10 && (
																								<div className='pull__progress-current gold'>
																									{item.days - item.daysLeft}
																									дн
																								</div>
																							)
																					)[0]}
																		</div>
																	</div>
																	<div className='pull__progress-end'>
																		{isSuccessPools &&
																			pools.data
																				.filter(
																					item =>
																						item.publicId === pool.publicId
																				)
																				.map(item => item.days)[0]}
																		дн
																	</div>
																</div>
																<div className='pull__profit grey-block-dark'>
																	<span>Прибыль</span>
																	<span className='gold'>
																		{Math.floor(pool.accruedAmount)}
																	</span>
																	<img src={cg} alt='pull-profit' />
																</div>
																{/* <div className='pull__more'>
														<span></span>
														<span></span>
														<span></span>
													</div> */}
															</div>
															<div className='pull__body'>
																<img src={gold} alt='pull-header' />
																<div className='pull__table'>
																	<div className='pull__column'>
																		<span className='gold'>
																			{isSuccessPools &&
																				pools.data
																					.filter(
																						item =>
																							item.publicId === pool.publicId
																					)
																					.map(item => item.name)[0]}
																		</span>
																		<span>
																			{isSuccessPools &&
																				pools.data
																					.filter(
																						item =>
																							item.publicId === pool.publicId
																					)
																					.map(item => item.months)[0]}{' '}
																			месяцев
																		</span>
																	</div>
																	<div className='pull__column'>
																		<span className='gold'>Дата старта</span>
																		<span></span>
																	</div>
																	<div className='pull__column'>
																		<span className='gold'>Дата окончания</span>
																		<span></span>
																	</div>
																	<div className='pull__column'>
																		<span className='gold'>Сумма депозита</span>
																		<span>
																			{pool.amount}
																			<img src={cg} alt='deposit amount' />
																		</span>
																	</div>
																	<div className='pull__column'>
																		<span className='gold'>% дохода</span>
																		<span>
																			{(pool.accruedAmount / pool.amount) * 100}
																			%
																		</span>
																	</div>
																	<div className='pull__column'>
																		<span className='gold'>Итоговая сумма</span>
																		<span>
																			{isSuccessPools &&
																				pools.data
																					.filter(
																						item =>
																							item.publicId === pool.publicId
																					)
																					.map(item =>
																						Math.floor(
																							pool.amount *
																								(item.totalRate / 100)
																						)
																					)[0]}
																			<img src={cg} alt='deposit amount' />
																		</span>
																	</div>
																</div>
															</div>
														</li>
													);
												}
											})}
										</ul>
									)}
								</div>
							) : (
								<div className='cabinvest__pulls'>
									У Вас нет ни одного активного пула.
								</div>
							)}
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
			<Modals active={modalAmount} setActive={setModalAmount}>
				<form onSubmit={handleSubmit(handleAmount)}>
					<div className='cabprofile__form-item'>
						<label htmlFor='name'>Введите сумму, которую хотите внести:</label>
						<input
							autoComplete='off'
							type='text'
							name='amount'
							{...register('amount')}
							className='cabprofile__form-input'
						/>
						{errors.amount && (
							<p className='text-red-600 mt-1 text-xs'>
								{errors.amount.message}
							</p>
						)}
					</div>
					<div className='flex items-center mt-4 justify-end'>
						<button
							className='bg-lime-500 rounded-xl text-white py-2.5 px-5'
							type='submit'
						>
							Да
						</button>
						<button
							type='button'
							onClick={() => {
								setModalAmount(false);
								resetAmount(
									{
										amount: '',
									},
									{
										keepErrors: true,
										keepDirty: true,
										keepIsSubmitted: false,
										keepTouched: false,
										keepIsValid: false,
										keepSubmitCount: false,
									}
								);
							}}
							className='bg-red-500 rounded-xl text-white py-2.5 px-5 ml-1'
						>
							Нет
						</button>
					</div>
				</form>
			</Modals>
			<Modals active={modalBuy} setActive={setModalBuy}>
				<form onSubmit={handleSubmit(buy)}>
					<div className='mb-3 text-black text-lg'>
						Вы уверены, что хотите купить этот пакет?
					</div>
					{isError && <Alert type='error' text={error.message} />}

					{isLoading && <Spinner width='80px' height='80px' />}
					<ul className='mb-5 text-black text-xs'>
						{isSuccessPools &&
							pools.data
								.filter(pool => pool.publicId === +id)
								.map((pool, idx) => (
									<Fragment key={`pool ${idx}`}>
										<li>Ваш пакет: {pool.totalRate}%</li>
									</Fragment>
								))[0]}
						<li>Ваша сумма: {amount}</li>
					</ul>
					<div className='flex items-center mt-4 justify-end'>
						<button
							className='bg-lime-500 rounded-xl text-white py-2.5 px-5'
							type='submit'
						>
							Да, купить
						</button>
						<button
							type='button'
							onClick={() => {
								setModalBuy(false);
								resetAmount(
									{
										amount: '',
									},
									{
										keepErrors: true,
										keepDirty: true,
										keepIsSubmitted: false,
										keepTouched: false,
										keepIsValid: false,
										keepSubmitCount: false,
									}
								);
							}}
							className='bg-red-500 rounded-xl text-white py-2.5 px-5 ml-1'
						>
							Нет, отменить
						</button>
					</div>
				</form>
			</Modals>
			<Modals active={modalComplete} setActive={setModalComplete}>
				<div className='flex items-center'>
					<span>
						Вы успешно инвестировали в{' '}
						{isSuccessPools &&
							pools.data
								.filter(pool => pool.publicId === +id)
								.map((pool, idx) => (
									<span className='font-bold' key={`pool ${idx}`}>
										{pool.name}
									</span>
								))[0]}{' '}
						сумму {amount}
					</span>{' '}
					<img className='ml-2' src={cg} alt='succes buy' />
				</div>

				<button
					className='bg-orange-500 rounded-xl text-white py-2.5 px-5 mt-5'
					type='button'
					onClick={() => {
						setModalComplete(false);
						resetAmount(
							{
								amount: '',
							},
							{
								keepErrors: true,
								keepDirty: true,
								keepIsSubmitted: false,
								keepTouched: false,
								keepIsValid: false,
								keepSubmitCount: false,
							}
						);
					}}
				>
					Закрыть
				</button>
			</Modals>
		</div>
	);
}
