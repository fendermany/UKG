import { useMutation } from 'react-query';
import UserServices from './../../services/UserServices';
import { useState, Fragment } from 'react';
// Hooks
import usePools from './../../hooks/usePools';
import useUserInfo from './../../hooks/useUserInfo';
import useAdditions from './../../hooks/useAdditions';
import useAdditionsWeek from './../../hooks/useAdditionsWeek';

// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Components
import Modals from './../ui/modals/Modals';
import Spinner from './../spinner/Spinner';
import Alert from './../ui/alert/Alert';
// Media
import { cg, gold } from '../../img/images';
// Styles
import './cabinetPools.scss';

const Schema = Yup.object().shape({
	amount: Yup.string()
		.required('Введите сумму')
		.min(2, 'Минимум 2 цифры')
		.max(25, 'Максимум 25 цифр'),
});

function CabinetPools() {
	const { pools, isSuccessPools, refetchPools } = usePools();
	const { userInfo, isSuccessUserInfo, refetchUserInfo } = useUserInfo();
	const { refetchAddition } = useAdditions();
	const {refetchAdditionWeek} = useAdditionsWeek();

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
				refetchPools();
				refetchUserInfo();
				refetchAddition();
				refetchAdditionWeek();
			},
		}
	);

	// Inctive pools

	let inactivePools = [];

	if (isSuccessPools) {
		pools.data.map(item => {
			if (item.status === 'INACTIVE') {
				inactivePools.push(item.publicId);
			}
		});
	}

	return (
		<>
			{isSuccessPools && (
				<ul className='pulls'>
					{pools.data.map((pool, idx) => {
						if (inactivePools.includes(pool.publicId)) {
							return (
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
															{Math.floor(pool.completedPercent)}%
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
										<input hidden defaultValue={pool.publicId}></input>
										<button onClick={handleId} className='pull__more'>
											<span></span>
											<span></span>
											<span></span>
										</button>
									</div>
									<div className='pull__body'>
										<img src={gold} alt='pull-header' />
										<div className='pull__table'>
											<div className='pull__column'>
												<span className='gold'>{pool.name}</span>
												<span>{pool.months} месяцев</span>
											</div>
											<div className='pull__column'>
												<span className='gold'>Сумма депозита</span>
												<span>
													{isSuccessUserInfo &&
													userInfo.data.pools.filter(
														item => item.publicId === pool.publicId
													).length > 0
														? isSuccessUserInfo &&
														  userInfo.data.pools
																.filter(item => item.publicId === pool.publicId)
																.map(item => item.amount)
														: 0}
													<img src={cg} alt='deposit amount' />
												</span>
											</div>
											<div className='pull__column'>
												<span className='gold'>Ставка</span>
												<span>{pool.rate}%</span>
											</div>
											<div className='pull__column'>
												<span className='gold'>Общая прибыль</span>
												<span>{pool.totalRate}%</span>
											</div>
											<div className='pull__column'>
												<span className='gold'>Минимальная сумма</span>
												<span>
													{pool.minAmount}
													<img src={cg} alt='minimun amount' />
												</span>
											</div>
											<div className='pull__column'>
												<span className='gold'>Максимальная сумма</span>
												<span>
													{pool.maxAmount}
													<img src={cg} alt='deposit amount' />
												</span>
											</div>
										</div>
									</div>
								</li>
							);
						}
					})}
					<Modals active={modalAmount} setActive={setModalAmount}>
						<form onSubmit={handleSubmit(handleAmount)}>
							<div className='cabprofile__form-item'>
								<label htmlFor='name'>
									Введите сумму, которую хотите внести:
								</label>
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
				</ul>
			)}
		</>
	);
}

export default CabinetPools;
