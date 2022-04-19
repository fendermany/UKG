import { Suspense, useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './../../contexts/AuthContext';
import { observer } from 'mobx-react-lite';
import { routes } from './dataRoutes';
import { useTranslation } from 'react-i18next';
import LangContext from './context';

import Spinner from '../spinner/Spinner';

import '../../style/main.scss';
import '../../style/select.scss';

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

function App() {
	// Состояние языков
	const [currentCountry, setCurrentCountry] = useState(localStorage.getItem('lang') || 'ru');
	// Подключаем store
	const { store } = useContext(AuthContext);
	// Переводы
	const { i18n } = useTranslation();

	// Функции для смены языка
	function getValue() {
		return currentCountry ? options.find(c => c.value === currentCountry) : '';
	}

	function onChange(newValue) {
		setCurrentCountry(newValue.value);
		i18n.changeLanguage(newValue.value);
		localStorage.setItem('lang', newValue.value)
	}

	// Проверка авторизации при загрузке
	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth();
		}
	}, []);

	return (
		<LangContext.Provider
			value={{
				getValue,
				onChange,
				options,
			}}
		>
			<Router>
				<Suspense fallback={<Spinner />}>
					<Routes>
						{routes.map(route => {
							if (
								(route.auth && !store.isAuth) ||
								(route.auth && store.authHide)
							) {
								return false;
							}

							return (
								<Route
									path={route.path}
									key={`route ${route.path}`}
									element={<route.component />}
								/>
							);
						})}
					</Routes>
				</Suspense>
			</Router>
		</LangContext.Provider>
	);
}

export default observer(App);
