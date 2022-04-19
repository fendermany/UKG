import { makeAutoObservable } from 'mobx';
import AuthService from './../services/AuthService';
import UserServices from './../services/UserServices';

export default class Store {
	user = {};
	isAuth = false;
	isLoading = false;
	isError = false;
	isSuccess = false;
	errorMessage = '';
	successMessage = '';

	constructor() {
		makeAutoObservable(this);
	}

	setAuth(bool) {
		this.isAuth = bool;
	}

	setUser(user) {
		this.user = user;
	}

	setLoading(bool) {
		this.isLoading = bool;
	}

	setError(bool, message) {
		this.isError = bool;
		this.errorMessage = message;
	}

	setSuccess(bool, message) {
		this.isSuccess = bool;
		this.successMessage = message;
	}

	async login(email, password, rememberMe) {
		this.setLoading(true);
		try {
			const response = await AuthService.login(email, password, rememberMe);
			localStorage.setItem('token', response.headers.authorization);
			this.setAuth(true);
			this.setUser(response.data.id);
			this.setError(false, '');
		} catch (e) {
			this.setError(true, e.message);
			this.setSuccess(false, '');
		} finally {
			this.setLoading(false);
		}
	}

	async registration(fullName, email, phone, registerTag) {
		this.setLoading(true);
		try {
			const response = await AuthService.registration(
				fullName,
				email,
				phone,
				registerTag
			);
			this.setError(false, '');
			this.setSuccess(
				true,
				'Регистрация прошла успешно. Проверьте почту для подтверждения.'
			);
		} catch (e) {
			this.setError(true, e.message);
			this.setSuccess(false, '');
		} finally {
			this.setLoading(false);
		}
	}

	async recovery(email) {
		this.setLoading(true);
		try {
			const response = await AuthService.recovery(email);
			this.setError(false, '');
			this.setSuccess(
				true,
				'Ссылка для восстановления отправлена на Вашу почту.'
			);
		} catch (e) {
			this.setError(true, e.message);
			this.setSuccess(false, '');
		} finally {
			this.setLoading(false);
		}
	}

	logout() {
		try {
			localStorage.removeItem('token');
			this.setAuth(false);
			this.setUser({});
			this.setError(false, '');
			this.setSuccess(false, '');
		} catch (e) {
			throw Error;
		}
	}

	async checkAuth() {
		this.setLoading(true);
		try {
			const response = await UserServices.userInfo();
			this.setAuth(true);
			this.setUser(response.data.publicId);
		} catch (e) {
			localStorage.removeItem('token');
			this.setAuth(false);
			this.setUser({});
			this.setSuccess(false, '');
			this.setError(true, 'Время жизни токена истекло. Войдите снова');
		} finally {
			this.setLoading(false);
		}
	}

	clearError() {
		this.setError(false, '');
	}
}
