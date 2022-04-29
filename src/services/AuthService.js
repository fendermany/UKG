import $api from "../api/axios"

export default class AuthService {
	static async login(email, password, rememberMe = true) {
		return $api.post('/login', {email, password, rememberMe})
	}

	static async registration(fullName, email, phone, refToken, registerTag = 'AUTO') {
		return $api.post('/pub/users/register', {fullName, email, phone, refToken, registerTag})
	}

	static async recovery(email) {
		return $api.post('/auth/forgot-password', {email})
	}

	static async setPassword(token, password, confirmPassword) {
		return $api.put('/auth/set-password', {token, password, confirmPassword})
	}

	static async setPasswordVerify(token) {
		return $api.get(`/auth/verify-change-request-token/${token}`)
	}

}