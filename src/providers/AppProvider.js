import { useContext, useEffect, useState } from 'react';
import Routes from '../Routes';
import { AuthContext } from './../contexts/AuthContext';
import DataContext from './../contexts/DataContext';
import LangContext from './../contexts/LangContext';

import { useTranslation } from 'react-i18next';

// Styles
import '../style/cabinet.scss';
import '../style/main.scss';
import '../style/select.scss';

const langOptions = [
	{
		value: 'ru',
		label: 'RU',
	},
	{
		value: 'en',
		label: 'EN',
	},
];

const calcOptions = [
	{
		value: 'pool1',
		label: '6 месяцев - 7% прибыли ежемесячно',
		procent: 7,
		months: 6,
		body: 100,
		prize: false
	},
	{
		value: 'pool2',
		label: '9 месяцев - 10% прибыли ежемесячно',
		procent: 10,
		months: 9,
		body: 100,
		prize: false
	},
	{
		value: 'pool3',
		label: '12 месяцев - 12% прибыли ежемесячно',
		procent: 12,
		months: 12,
		body: 100,
		prize: false
	},
	{
		value: 'pool4',
		label: '18 месяцев - 15% прибыли ежемесячно',
		procent: 15,
		months: 18,
		body: 0,
		prize: true
	},
	{
		value: 'pool5',
		label: '12 месяцев - 20% прибыли ежемесячно',
		procent: 20,
		months: 12,
		body: 0,
		prize: true
	},
];


const AppProvider = () => {
	// Подключаем store
	const { store } = useContext(AuthContext);

	// Состояние языков
	const [currentCountry, setCurrentCountry] = useState(
		localStorage.getItem('lang') || 'ru'
	);

	// Переводы
	const { i18n } = useTranslation();

	// Функции для смены языка
	function getValue() {
		return currentCountry
			? langOptions.find(c => c.value === currentCountry)
			: '';
	}

	function onChange(newValue) {
		setCurrentCountry(newValue.value);
		i18n.changeLanguage(newValue.value);
		localStorage.setItem('lang', newValue.value);
	}

	// Проверка авторизации при загрузке
	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, [store]);

	return (
		<AuthContext.Provider value={{ store }}>
			<LangContext.Provider
				value={{
					getValue,
					onChange,
					langOptions,
				}}
			>
				<DataContext.Provider
					value={{
						calcOptions,
					}}
				>
					<Routes />
				</DataContext.Provider>
			</LangContext.Provider>
		</AuthContext.Provider>
	);
};

export default AppProvider;
