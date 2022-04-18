import { useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import App from '../components/app/App';
import axios from 'axios';
import { API_URL } from '../api/axios';

const AppProvider = () => {
	const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

	const checkAuth = async () => {
		try {
			const response = await axios.get(`${API_URL}/refresh`);
			localStorage.setItem('token', response.data.accessToken);
			setIsAuth(true);
		} catch (error) {
			console.log(error.response.data.message);
		}
	};

	useEffect(() => {
		if(localStorage.getItem('token')) {
			checkAuth();
		}
	}, [])

	return (
		<AuthContext.Provider value={{ isAuth, setIsAuth }}>
			<App />
		</AuthContext.Provider>
	);
};

export default AppProvider;
