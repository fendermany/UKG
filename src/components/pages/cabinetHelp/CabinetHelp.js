import UserServices from './../../../services/UserServices';
import { useQuery, useMutation } from 'react-query';
import { useState } from 'react';

// Формы
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
// Components
import CabinetFooter from '../../cabinetFooter/CabinetFooter';
import CabinetTopbar from '../../cabinetTopbar/CabinetTopbar';
import Aside from '../../aside/Aside';
import CabinetHeader from '../../cabinetHeader/CabinetHeader';
import Alert from './../../ui/alert/Alert';
import Spinner from './../../spinner/Spinner';
// Accordeon
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
// Styles
import './cabinetHelp.scss';
import {Helmet} from "react-helmet";

const Schema = Yup.object().shape({
	text: Yup.string()
		.required('Введите сообщение')
		.min(15, 'Минимум 15 символов')
		.max(2000, 'Максимум 2000 символов'),
});

const Accordion = styled(props => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
	background: 'rgba(255, 255, 255, 0.05)',
	boxShadow: '0px 4px 73px #000000',
	color: '#fff',

	'&:not(:last-child)': {
		borderBottom: 0,
	},
	'&:before': {
		display: 'none',
	},
}));

const expandIcon = {
	background:
		'linear-gradient(92.35deg, #b48a3d 9.32%, #fcecce 50.74%, #ccab6c 95.84%)',
	borderRadius: '50%',
	padding: '1px',
	width: '35px',
	height: '35px',
};

const expandIconSpan = {
	background: '#000',
	borderRadius: '50%',
	fontSize: '15px',
	lineHeight: '23px',
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const AccordionSummary = styled(props => (
	<MuiAccordionSummary
		expandIcon={
			<div style={expandIcon}>
				<span style={expandIconSpan}>
					<span className='gold'>?</span>
				</span>
			</div>
		}
		{...props}
	/>
))(() => ({
	height: '70px',
	padding: '17px 22px',
	flexDirection: 'row-reverse',
	fontWeight: '300',
	'& .MuiAccordionSummary-expandIconWrapper': {
		marginRight: '16px',
	},
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		marginLeft: '0',
		marginRight: '16px',
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CabinetHelp() {
	const [expanded, setExpanded] = useState('panel1');

	const handleChange = panel => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	const {
		data: userChatAll,
		isSuccess: isSuccessUserChatAll,
		refetch: refetchUserChatAll,
	} = useQuery('userChatAll', () => UserServices.userChatAll(), {
		refetchOnWindowFocus: false,
	});

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: 'onChange',
		resolver: yupResolver(Schema),
	});

	const {
		mutate: userChatSend,
		isLoading,
		isError,
		error,
		isSuccess,
	} = useMutation(
		'Send question',
		data => UserServices.userChatSend(data.text),
		{
			onSuccess() {
				reset(
					{
						text: '',
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
				refetchUserChatAll();
			},
		}
	);

	return (
		<div className='cabinet'>
		<Helmet>
				<meta name="viewport" content="width=1660" />
			</Helmet>
			<div className='cabinet__wrapper'>
				<Aside />

				<div className='wrapper'>
					<main className='page'>
						<CabinetHeader />

						<CabinetTopbar />

						<div className='cabhelp'>
							<div className='cabhelp__wrapper'>
								<div className='cabhelp__form'>
									<div className='cabhelp__form-wrapper'>
										<div className='cabhelp__form-title cabinet__title_36'>
											Помощь
										</div>
										{isError && <Alert type='error' text={error.message} />}
										{isSuccess && (
											<Alert type='success' text='Сообщение отправлено.' />
										)}
										{isLoading && <Spinner width='40px' height='40px' />}
										{/* <div className='cabhelp__form-options options'>
											<div className='options__item'>
												<input
													hidden
													id='o_1'
													className='options__input'
													checked
													type='radio'
													value='1'
													name='option'
												/>
												<label htmlFor='o_1' className='options__label'>
													<span className='options__text'>
														Technical questions
													</span>
												</label>
											</div>
											<div className='options__item'>
												<input
													hidden
													id='o_2'
													className='options__input'
													type='radio'
													value='2'
													name='option'
												/>
												<label htmlFor='o_2' className='options__label'>
													<span className='options__text'>
														Financial questions
													</span>
												</label>
											</div>
										</div> */}
										<div className='cabhelp__form-subtitle'>
											Введите сообщение:
										</div>
										<form
											onSubmit={handleSubmit(userChatSend)}
											className='cabhelp__form-form'
										>
											<div className='form__line'>
												<textarea
													className='cabhelp__form-textarea input'
													autoComplete='off'
													type='text'
													name='text'
													{...register('text')}
												></textarea>
												{errors.text && (
													<p className='text-red-600 mt-1 text-xs'>
														{errors.text.message}
													</p>
												)}
											</div>
											<button
												type='submit'
												className='cabhelp__form-button button button_gold'
											>
												Сохранить
											</button>
										</form>
									</div>
								</div>
								<ul className='cabhelp__history grey-block-dark-414'>
									{isSuccessUserChatAll && (
										<>
											{userChatAll.data.map((userChat, idx) => (
												<li
													className='cabhelp__history-item'
													key={`userChat ${idx}`}
												>
													<div className='cabhelp__history-title'>Вопрос</div>
													<div className='cabhelp__history-body'>
														{userChat.text}
													</div>
												</li>
											))}
										</>
									)}
								</ul>
								<div className='cabhelp__faq'>
									<div className='cabhelp__faq-wrapper'>
										<div className='cabhelp__faq-top'>
											<div className='cabhelp__faq-title cabinet__title_36'>
												Общие вопросы
											</div>
											<div className='cabhelp__faq-subtitle'>
												Не нашли ответа на интересующий вопрос?
												<br />
												Напишите нам и мы вам ответим&nbsp;
												<a href='mailto:support@com.ua' className='gold'>
													support@com.ua
												</a>
											</div>
										</div>
										<ul className='cabhelp__faq-list'>
											<Accordion
												expanded={expanded === 'panel1'}
												onChange={handleChange('panel1')}
											>
												<AccordionSummary
													aria-controls='panel1d-content'
													id='panel1d-header'
												>
													<div className='cabhelp__faq-answer'>
														Законна ли деятельность компании?
													</div>
												</AccordionSummary>
												<AccordionDetails>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Suspendisse malesuada lacus ex, sit amet blandit
													leo lobortis eget. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit. Suspendisse malesuada
													lacus ex, sit amet blandit leo lobortis eget.
												</AccordionDetails>
											</Accordion>
											<Accordion
												expanded={expanded === 'panel2'}
												onChange={handleChange('panel2')}
											>
												<AccordionSummary
													aria-controls='panel1d-content'
													id='panel1d-header'
												>
													<div className='cabhelp__faq-answer'>
														Чем занимается UKG?
													</div>
												</AccordionSummary>
												<AccordionDetails>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Suspendisse malesuada lacus ex, sit amet blandit
													leo lobortis eget. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit. Suspendisse malesuada
													lacus ex, sit amet blandit leo lobortis eget.
												</AccordionDetails>
											</Accordion>
											<Accordion
												expanded={expanded === 'panel3'}
												onChange={handleChange('panel3')}
											>
												<AccordionSummary
													aria-controls='panel1d-content'
													id='panel1d-header'
												>
													<div className='cabhelp__faq-answer'>
														Законна ли деятельность компании?
													</div>
												</AccordionSummary>
												<AccordionDetails>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Suspendisse malesuada lacus ex, sit amet blandit
													leo lobortis eget. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit. Suspendisse malesuada
													lacus ex, sit amet blandit leo lobortis eget.
												</AccordionDetails>
											</Accordion>
											<Accordion
												expanded={expanded === 'panel4'}
												onChange={handleChange('panel4')}
											>
												<AccordionSummary
													aria-controls='panel1d-content'
													id='panel1d-header'
												>
													<div className='cabhelp__faq-answer'>
														Чем занимается UKG?
													</div>
												</AccordionSummary>
												<AccordionDetails>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit. Suspendisse malesuada lacus ex, sit amet blandit
													leo lobortis eget. Lorem ipsum dolor sit amet,
													consectetur adipiscing elit. Suspendisse malesuada
													lacus ex, sit amet blandit leo lobortis eget.
												</AccordionDetails>
											</Accordion>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</main>
					<CabinetFooter />
				</div>
			</div>
		</div>
	);
}
