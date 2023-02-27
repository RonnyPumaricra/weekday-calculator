export class Calendar {
  static monthsList = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  static monthsDays = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  static weekdaysList = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  static monthsCode = [
    6,
    2,
    2,
    5,
    0,
    3,
    5,
    1,
    4,
    6,
    2,
    4,
  ];

  static isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  static getWeekday({ date, month, year }) {
    const centuryCode = Math.floor((year % 400) / 100) * 5 % 7;
    const twoDigitsYear = year % 100;
    const leapYearCode = Math.floor(twoDigitsYear / 4) * 5 % 7;
    const yearCode = twoDigitsYear % 4;
    let monthCode = this.monthsCode[month - 1];
    if (this.isLeapYear(year) && month <= 2) {
      monthCode--;
    }
    const dateCode = date % 7;
    const weekdayCode = (centuryCode + leapYearCode + yearCode + monthCode + dateCode) % 7;

    return weekdayCode;
  }
}
