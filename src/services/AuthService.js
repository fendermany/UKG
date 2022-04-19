import $api from "../api/axios"

export default class AuthService {
	static async login(email, password, rememberMe) {
		return $api.post('/login', {email, password, rememberMe})
	}

	static async registration(fullName, email, phone, registerTag) {
		return $api.post('/pub/users/register', {fullName, email, phone, registerTag})
	}

	static async recovery(email) {
		return $api.post('/auth/forgot-password', {email})
	}

}