export function getTime(time) {
    return (new Date(time)).getHours() + ":" + (new Date(time)).getMinutes()
}

export function getDate(time) {
    const monthes = {
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December"
    };
    return monthes[(new Date(time)).toString().split(" ")[1]] + " " + (new Date(time)).getDate()
}

export function getWeekDate(time) {
    const monthes = {
        "Jan": "January",
        "Feb": "February",
        "Mar": "March",
        "Apr": "April",
        "May": "May",
        "Jun": "June",
        "Jul": "July",
        "Aug": "August",
        "Sep": "September",
        "Oct": "October",
        "Nov": "November",
        "Dec": "December"
    };

    const weekDays = {
        "Mon": "Monday",
        "Tue": "Tuesday",
        "Wed": "Wednesday",
        "Thu": "Thursday",
        "Fri": "Friday",
        "Sun": "Sunday"
    };

    return weekDays[(new Date(time)).toString().split(" ")[0]] + ", " +
        monthes[(new Date(time)).toString().split(" ")[1]] + " " +
        (new Date(time)).getDate();
}

export function getDateGig(time) {
    return (new Date(time)).toString().split(" ")[1] +" "+ (new Date(time)).toString().split(" ")[2] + ", " + (new Date(time)).toString().split(" ")[3];
}