import { Suspense, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { observer } from 'mobx-react-lite';
import { routes } from './dataRoutes';
// Hooks
import useWalletsTree from './hooks/useWalletsTree';
// Components
import Spinner from './components/spinner/Spinner';


function App() {
	// Подключаем store
	const { store } = useContext(AuthContext);
const { walletsTree, isSuccessWalletsTree } = useWalletsTree();

	return (
		<Router>
			<Suspense fallback={<Spinner width='200px' height='200px' />}>
				<Routes>
					{routes.map(route => {
						if (
							(!store.isAuth && route.auth) ||
							(store.isAuth && route.authHide) ||
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
