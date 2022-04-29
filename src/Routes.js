import { Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { observer } from 'mobx-react-lite';
import { routes } from './dataRoutes';
import UserServices from './services/UserServices';
import { useQuery } from 'react-query';

import Spinner from './components/spinner/Spinner';

function App() {
	// Подключаем store
	const { store } = useContext(AuthContext);

	const { data: walletsTree, isSuccess: isSuccessWalletsTree } = useQuery(
		'wallet',
		() => UserServices.walletsTree(),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<Router>
			<Suspense fallback={<Spinner width='200px' height='200px' />}>
				<Routes>
					{routes.map(route => {
						if (
							(route.auth && !store.isAuth) ||
							(route.auth && route.authHide) ||
							(isSuccessWalletsTree &&
								walletsTree.status === 204 &&
								route.emptyHide)
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
	);
}

export default observer(App);
