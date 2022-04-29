/**
 * Получить конфигурацию форматирования даты по умолчанию
 */
function getDefaultDateFormatConfig() {
    var defaultFormatConfig = {
        /** Разделитель года, месяца и дня */
        separator: "-",
        /** Отображать ли миллисекунды */
        showMillisecond: false,
        /** Следует ли заполнять 0 */
        isFillZero: true,
    }
    return defaultFormatConfig;
}

/**
   * Заполнить 0 
 * @param {number} num 
 */
function fillZero(num) {
    return (num > 10 ? "" : "0") + num;
}
/**
   * Простая реализация наследования
   * @param {object} obj унаследованный объект
   * @param {object} extendObj унаследованный объект
 */

function extend(obj, extendObj) {
    for (let key in extendObj) {
        if (extendObj.hasOwnProperty(key)) {
            obj[key] = extendObj[key];
        }
    }
    return obj;
}

/**
   * Форматируйте объект даты в виде строки, например: 1992-1-5 00:00:00
   * @param {Date} дата объект даты
   * @param {object} объект конфигурации config, параметры поддержки относятся к defaultFormatConfig
 */
function formatDate(date, config) {
    var defaultConfig = this.defaultConfig;
    var config = extend(defaultConfig, config);

    var separator = config.separator;
    var showMillisecond = config.showMillisecond;
    var isFillZero = config.isFillZero;

    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var millisecond = date.getMilliseconds();

    if (isFillZero) {
        month = fillZero(month);
        date = fillZero(day);
        hour = fillZero(hour);
        minute = fillZero(minute);
        second = fillZero(second);
    }
		// var formatStr = year + separator + month + separator + day + " " + hour + ":" + minute + ":" + second;
    var formatStr = year + separator + month + separator + day;

    if (showMillisecond) {
        formatStr += "." + millisecond;
    }
    return formatStr;
}

/**
   * Получить объект даты, чьи значения часа, минуты, секунды и миллисекунды равны 00
   * @param {number} fullYear год, например 2018
   * @param {number} месяц месяц начинается с 0
   * @param {number} день
 */
function getDateWithFillHMSSZero(fullYear, month, day) {
    var date = new Date();
    if (fullYear) {
        date.setFullYear(fullYear);
    }
    if (month) {
        date.setMonth(month);
    }
    if (day) {
        date.setDate(day);
    }
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

module.exports = {
    formatDate: formatDate,
    defaultConfig: getDefaultDateFormatConfig(),
    /**
           * Получить текущую дату
     */
    getNowDate: function () {
        var date = new Date();
        return date;
    },
    /**
         * Получите дату начала вчера
    */
    getYesterdayBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() - 1);
        return date;
    },
    /**
           * Получить вчерашнюю дату окончания
     */
    getYesterdayEnd: function () {
        return this.getTodayBegin();
    },
    /**
           * Получить сегодняшнюю дату начала
     */
    getTodayBegin: function () {
        var date = getDateWithFillHMSSZero();
        return date;
    },
    /**
           * Получить сегодняшнюю дату окончания
     */
    getTodayEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() + 1);
        return date;
    },
    /**
         * Получить дату начала завтра
    */
    getTomorrowBegin: function () {
        return this.getTodayEnd();
    },
    /**
           * Получите дату окончания завтра
     */
    getTomorrowEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() + 2);
        return date;
    },
    /**
           * Получить дату начала предыдущей недели
           * @param {boolean} isStartByMonday, нужно ли выгравировать 00:00:00 в понедельник этой недели в качестве даты начала, по умолчанию - true, если false, то 00:00:00 в воскресенье на этой неделе в качестве даты начала.
     */
    getLastWeekBegin: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        // Сейчас обычная практика (также международная практика) - считать воскресенье началом недели, а субботу - выходными.
        // Здесь день означает день, а неделя означает dayOfWeek
        var day = date.getDate();
        var dayOfWeek = date.getDay();// Значение воскресенья 0

        var dayValue = 0;
        if (isStartByMonday) {
            // Если начать с понедельника, то в воскресенье должно быть 7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day - dayOfWeek + 1 - 7;
        } else {
            dayValue = day - dayOfWeek - 7;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
           * Получить дату окончания предыдущей недели
           * @param {boolean} isStartByMonday Если 00:00:00 понедельника следующей недели выгравировано в качестве даты начала, значение по умолчанию - истина, если - ложь, - 00:00:00 воскресенья следующей недели выгравировано как дата начала
     */
    getLastWeekEnd: function (isStartByMonday) {
        return this.getThisWeekBegin(isStartByMonday);
    },
    /**
           * Получить дату начала этой недели
           * @param {boolean} isStartByMonday, нужно ли выгравировать 00:00:00 в понедельник этой недели в качестве даты начала, по умолчанию - true, если false, то 00:00:00 в воскресенье на этой неделе в качестве даты начала.
     */
    getThisWeekBegin: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        // Сейчас обычная практика (также международная практика) - считать воскресенье началом недели, а субботу - выходными.
        // Здесь день означает день, а неделя означает dayOfWeek
        var day = date.getDate();
        var dayOfWeek = date.getDay();// Значение воскресенья 0

        var dayValue = 0;
        if (isStartByMonday) {
            // Если начать в понедельник, то в воскресенье должно быть 7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day - dayOfWeek + 1;
        } else {
            dayValue = day - dayOfWeek;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
           * Получить дату окончания недели
           * @param {boolean} isStartByMonday Если 00:00:00 понедельника следующей недели выгравировано в качестве даты начала, значение по умолчанию - истина, если - ложь, - 00:00:00 воскресенья следующей недели выгравировано как дата начала
     */
    getThisWeekEnd: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        // Сейчас обычная практика (также международная практика) - считать воскресенье началом недели, а субботу - выходными.
        // Здесь день означает день, а неделя означает dayOfWeek
        var day = date.getDate();
        var dayOfWeek = date.getDay();// Значение воскресенья 0
        var dayValue = 0;
        if (isStartByMonday) {
            // Если начать с понедельника, то в воскресенье должно быть 7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day + (7 - dayOfWeek) + 1;
        } else {
            dayValue = day + (7 - dayOfWeek);
        }
        date.setDate(dayValue);
        return date;
    },
    /**
           * Получите дату начала следующей недели
           * @param {boolean} isStartByMonday, следует ли выгравировать 00:00:00 в понедельник этой недели в качестве даты начала, по умолчанию - true, если false, то 00:00:00 в воскресенье на этой неделе в качестве даты начала
     */
    getNextWeekBegin: function (isStartByMonday) {
        return this.getThisWeekEnd(isStartByMonday);
    },
    /**
           * Получите дату окончания следующей недели
           * @param {boolean} isStartByMonday Если 00:00:00 понедельника следующей недели выгравировано в качестве даты начала, по умолчанию установлено значение true, если значение false, 00:00:00 в воскресенье следующей недели выгравируется в качестве даты начала
     */
    getNextWeekEnd: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        // Сейчас обычная практика (также международная практика) - считать воскресенье началом недели, а субботу - выходными.
        // Здесь день означает день, а неделя означает dayOfWeek
        var day = date.getDate();
        var dayOfWeek = date.getDay();// Значение воскресенья 0
        var dayValue = 0;
        if (isStartByMonday) {
            // Если начать с понедельника, то в воскресенье должно быть 7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day + (7 - dayOfWeek) + 1 + 7;
        } else {
            dayValue = day + (7 - dayOfWeek) + 7;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
           * Получить дату начала предыдущего месяца
     */
    getLastMonthBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() - 1);
        date.setDate(1)// Устанавливаем день на 1
        return date;
    },
    /**
           * Получить дату окончания предыдущего месяца
     */
    getLastMonthEnd: function () {
        return this.getThisMonthBegin();
    },
    /**
   * Получить дату начала месяца
 */
    getThisMonthBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(1)// Устанавливаем день на 1
        return date;
    },
    /**
           * Получить дату окончания месяца
     */
    getThisMonthEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() + 1);
        date.setDate(1)// Устанавливаем день на 1
        return date;
    },
    /**
           * Получить дату начала следующего месяца
     */
    getNextMonthBegin: function () {
        return this.getThisMonthEnd();
    },
    /**
           * Получить дату окончания следующего месяца
     */
    getNextMonthEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() + 2);
        date.setDate(1)// Устанавливаем день на 1
        return date;
    },
    /**
           * Получить дату начала прошлого года
     */
    getLastYearBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() - 1);
        date.setMonth(0);// Месяц отсчитывается от 0
        date.setDate(1);
        return date;
    },
    /**
           * Получите дату окончания прошлого года
     */
    getLastYearEnd: function () {
        return this.getThisYearBegin();
    },
    /**
           * Получите дату начала этого года
     */
    getThisYearBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(0);// Месяц отсчитывается от 0
        date.setDate(1);
        return date;
    },
    /**
           * Получить дату окончания года
     */
    getThisYearEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() + 1);
        date.setMonth(0);// Месяц отсчитывается от 0
        date.setDate(1);
        return date;
    },
    /**
           * Получите дату начала следующего года
     */
    getNextYearBegin: function () {
        return this.getThisYearEnd();
    },
    /**
           * Получить дату окончания следующего года
     */
    getNextYearEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() + 2);
        date.setMonth(0);// Месяц отсчитывается от 0
        date.setDate(1);
        return date;
    }
}


