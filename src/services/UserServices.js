import $api from '../api/axios';
import Dates from '../components/functions/dates';

let weekStart = Dates.getThisWeekBegin(true);
let weekEnd = Dates.getThisWeekEnd(true);
let monthStart = Dates.getThisMonthBegin(true);
let monthEnd = Dates.getThisMonthEnd(true);

export default class UserServices {
	// Пользователь
	static async userInfo() {
		return $api.get('/user/users');
	}
	static async userProfile(fullName, phone) {
		return $api.put('/user/users', {
			fullName,
			phone,
		});
	}
	static async userChangePassword(newPassword) {
		return $api.post('/user/users/change-password', newPassword);
	}
	// Бинар
	static async walletsTree() {
		return $api.get('/user/wallet/wallets-tree');
	}
	// Пулы
	static async userPool() {
		return $api.get('/user/pool');
	}
	// Транзакции
	static async userTransactionAddition() {
		return $api.get('/user/transaction?page=0&size=1000&type=ADDITION');
	}
	static async userTransactionAdditionWeek() {
		return $api.get(
			`/user/transaction?page=0&size=1000&type=ADDITION&start=${Dates.formatDate(
				weekStart
			)}T00%3A00%3A00&end=${Dates.formatDate(weekEnd)}T00%3A00%3A00`
		);
	}
	static async userTransactionAdditionMonth() {
		return $api.get(
			`/user/transaction?page=0&size=1000&type=ADDITION&start=${Dates.formatDate(
				monthStart
			)}T00%3A00%3A00&end=${Dates.formatDate(monthEnd)}T00%3A00%3A00`
		);
	}
	// Чат
	static async userChatAll() {
		return $api.get('/user/chat');
	}
	static async userChatSend(text) {
		return $api.post('/user/chat', { text });
	}
	// Рефералы
	static async userReferralsAll() {
		return $api.get('/user/users/referrals?page=0&size=1000');
	}
	static async userReferralsNotUsedInviteBonus() {
		return $api.get(
			'/user/users/referrals?page=0&size=1000&notUsedInviteBonus=true'
		);
	}
	static async userReferralsLast() {
		return $api.get('/user/users/referrals?page=0&size=1000&order=DESC');
	}
	// Вывод средств
	static async userWithdrawalAll() {
		return $api.get('/user/withdrawal?page=0&size=1000');
	}
	// Реферальная ссылка
	static async userRefLink() {
		return $api.get('/user/ref-links');
	}
	static async userRefLinkCheck(token) {
		return $api.get(`/pub/users/user/${token}`);
	}
}
