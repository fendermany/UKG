import { lazy, Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LangContext from './context';
import { useAuth } from '../../hooks/useAuth';

import Spinner from '../spinner/Spinner';

import '../../style/main.scss';
import '../../style/select.scss';

const Page404 = lazy(() => import('../pages/page404/Page404'));
const CabinetHome = lazy(() => import('../pages/cabinetHome/CabinetHome'));
const CabinetAffiliate = lazy(() =>
	import('../pages/cabinetAffiliate/CabinetAffiliate')
);
const CabinetHelp = lazy(() => import('../pages/cabinetHelp/CabinetHelp'));
const CabinetInvestments = lazy(() =>
	import('../pages/cabinetInvestments/CabinetInvestments')
);
const CabinetProfile = lazy(() =>
	import('../pages/cabinetProfile/CabinetProfile')
);
const CabinetPromotion = lazy(() =>
	import('../pages/cabinetPromotion/CabinetPromotion')
);
const CabinetToken = lazy(() => import('../pages/cabinetToken/CabinetToken'));
const CabinetTopup = lazy(() => import('../pages/cabinetTopup/CabinetTopup'));
const CabinetSignin = lazy(() => import('../pages/cabinetForms/CabinetSignin'));
const CabinetRegistration = lazy(() =>
	import('../pages/cabinetForms/CabinetRegistration')
);
const CabinetRecovery = lazy(() =>
	import('../pages/cabinetForms/CabinetRecovery')
);

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
	const [currentCountry, setCurrentCountry] = useState('ru');

	function getValue() {
		return currentCountry ? options.find(c => c.value === currentCountry) : '';
	}

	function onChange(newValue) {
		setCurrentCountry(newValue.value);
	}

	const {isAuth} = useAuth();

	return (
		<LangContext.Provider
			value={{
				getValue,
				onChange,
				options,
			}}
		>
			{isAuth ? (
				<Router>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<CabinetHome />} />
							<Route path='/help' element={<CabinetHelp />} />
							<Route path='/investments' element={<CabinetInvestments />} />
							<Route path='/profile' element={<CabinetProfile />} />
							<Route path='/promotion' element={<CabinetPromotion />} />
							<Route path='/token' element={<CabinetToken />} />
							<Route path='/topup' element={<CabinetTopup />} />
							<Route path='/partnership' element={<CabinetAffiliate />} />
							<Route path='*' element={<Page404 />} />
						</Routes>
					</Suspense>
				</Router>
			) : (
				<Router>
					<Suspense fallback={<Spinner />}>
						<Routes>
							<Route path='/' element={<CabinetSignin />} />
							<Route path='/registration' element={<CabinetRegistration />} />
							<Route path='/recovery' element={<CabinetRecovery />} />
							<Route path='*' element={<CabinetSignin />} />
						</Routes>
					</Suspense>
				</Router>
			)}
		</LangContext.Provider>
	);
}

export default App;
