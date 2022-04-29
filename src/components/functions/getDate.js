const getDate = (success, path) => {
	if (success) {
		let year = path.slice(0, 4);
		let month = path.slice(5, 7);
		let day = path.slice(8, 10);
		let hour = path.slice(11, 13);
		let minute = path.slice(14, 16);
		let second = path.slice(17, 19);

		let date = {
			year: year,
			month: month,
			day: day,
			hour: hour,
			minute: minute,
			second: second,
		};

		return `${date.day}.${date.month}.${date.year} ${date.hour}:${date.minute}`;
	}
};

export default getDate;


