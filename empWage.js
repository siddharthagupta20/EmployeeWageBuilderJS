const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;
let empDailyWageMap = new Map();
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
function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();
while(totalEmpHrs<MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkHours(empCheck);
    totalEmpHrs += empHrs;
    totalWorkingDays++;
    empDailyWageArr.push(calcDailyWage(empHrs));
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

console.log(empDailyWageMap);

function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}

console.log("UC7A - Emp Wage Map total wage: "+Array.from(empDailyWageMap.values()).reduce(totalWages,0));
