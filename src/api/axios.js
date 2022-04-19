import axios from 'axios';

export const API_URL = `https://ukgholding.com/api/v1`;


const $api = axios.create({
	headers: {
		'Content-Type': 'application/json',
	},
	baseURL: API_URL,
});



$api.interceptors.request.use(config => {
	config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	return config;
});

export default $api;
