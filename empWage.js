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
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Total days: "+totalWorkingDays+" Total hours: "+totalEmpHrs+" Emp Wage: "+empWage);

// UC 7a
let totalWage = 0;
empDailyWageArr.forEach((dailyWage) => {totalWage += dailyWage});
console.log("UC 7A, Total Emp Wage: "+totalWage);
function totalWages(totalWage,dailyWage){
    return totalWage+dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+empDailyWageArr.reduce(totalWages,0));
//UC 7B
let dailyCntr =0;
function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr+" = "+ dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map");
console.log(mapDayWithWageArr);

//UC 7C
function fulltimeWage(dailyWage) {
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log(fullDayWageArr);

//UC7D
console.log("First time Fulltime wage was earned on: "+mapDayWithWageArr.find(fulltimeWage));

//UC7E
console.log("Check all element have full time wage "+ mapDayWithWageArr.every(fulltimeWage));

//UC7f 
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
console.log("Check if any part time wage: "+mapDayWithWageArr.some(isAnyPartTimeWage));

//UC7G
function totalDaysWorked(numOfDays,dailyWage) {
    if(dailyWage>0)return numOfDays+1;
    return numOfDays;
}
console.log("Number of Days emp worked: "+ empDailyWageArr.reduce(totalDaysWorked,0));