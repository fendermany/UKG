import { useContext } from 'react';
import App from '../components/app/App';
import { AuthContext } from './../contexts/AuthContext';


const AppProvider = () => {
	const { store } = useContext(AuthContext);
	return (
		<AuthContext.Provider value={{ store }}>
			<App />
		</AuthContext.Provider>
	);
};

export default AppProvider;
