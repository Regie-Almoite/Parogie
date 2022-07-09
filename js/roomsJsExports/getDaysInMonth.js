function getDaysInMonth(month) {
    let currentMonth = Number(month) + 1;
    let currentYear = new Date().getFullYear(); // get the current year
    return new Date(currentYear, currentMonth, 0).getDate(); //return the days in a month
}

export { getDaysInMonth };
