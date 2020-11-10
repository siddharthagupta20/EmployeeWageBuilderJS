const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
function getWorkHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;
    default:
        return 0;
}
}
let empHrs = 0;
let day = 0;
while(empHrs<MAX_HOURS_IN_MONTH && day < NUM_OF_WORKING_DAYS){
    empCheck = Math.floor(Math.random()*10)%3;
    empHrs += getWorkHours(empCheck);
    day++;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Total days: "+day+" Total hours: "+empHrs+" Emp Wage: "+empWage);
© 2020 GitHub, Inc.