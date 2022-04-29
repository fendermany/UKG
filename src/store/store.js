import { makeAutoObservable } from 'mobx';
import UserServices from './../services/UserServices';

export default class Store {
	isAuth = false;
	userInfo = null;

	constructor() {
		makeAutoObservable(this);
	}

	setAuth(bool) {
		this.isAuth = bool;
	}


	logout() {
		try {
			localStorage.removeItem('token');
			this.setAuth(false);
		} catch (e) {
			throw Error;
		}
	}

	async checkAuth() {
		try {
			await UserServices.userInfo();
			this.setAuth(true);
		} catch (e) {
			localStorage.removeItem('token');
			this.setAuth(false);
		}
	}

}
