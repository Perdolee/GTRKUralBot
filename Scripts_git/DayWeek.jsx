var d = new Date();
var weekday = new Array(7);
weekday[0] =  "Воскресенье";
weekday[1] = "Понедельник";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var test = "alert ('hel";
var test2 = "lo')";
eval(test+test2);

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}
alert (daysInMonth(3,2017));

var n = weekday[d.getDay()];
alert (n);