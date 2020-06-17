//Get todays date and assign it to variable today
const today = new Date();


document.getElementById("today").innerHTML = today;


var startDate = new Date("03/26/2020");
document.getElementById("startDay").innerHTML = startDate;

const oneDay = 1000 * 60 * 60 *24;

const difference = Math.abs(today - startDate);
var answer = Math.round(difference / oneDay);

document.getElementById("counter").innerHTML = answer;

