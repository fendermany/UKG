import $api from '../api/axios';

export default class UserServices {
	static async userInfo() {
		return $api.get('/user/users');
	}
}
