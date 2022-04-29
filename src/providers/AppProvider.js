import { useContext, useEffect, useState } from 'react';
import Routes from '../Routes';
import { AuthContext } from './../contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import LangContext from './../contexts/LangContext';

// Styles
import '../style/main.scss';
import '../style/select.scss';

const options = [
	{
		value: 'ru',
		label: 'RU',
	},
	{
		value: 'en',
		label: 'EN',
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
		return currentCountry ? options.find(c => c.value === currentCountry) : '';
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
	}, []);

	return (
		<AuthContext.Provider value={{ store }}>
			<LangContext.Provider
				value={{
					getValue,
					onChange,
					options,
				}}
			>
				<Routes />
			</LangContext.Provider>
		</AuthContext.Provider>
	);
};

export default AppProvider;
