//Challlenge 1
var marks = ('marks');
if (marks >= 90) {
  alert('A');
} else if (marks >= 80) {
  alert('B');
} else if (marks >= 70) {
  alert('C');
} else if (marks >= 60) {
  alert('D');
} else if (marks >= 50) {
  alert('E');
} else {
  alert('F');
}

//Challenge 2
var speed = 'speed';
if (speed < 70) {
  alert('Ok');
} else {
  var demerit = Math.floor((speed - 70) / 5);
  alert('Demerit points: ' + demerit);
}

// Challenge 3
var basicSalary = prompt('Enter basic salary:');
var benefits = prompt('Enter benefits:');
var grossSalary = parseInt(basicSalary) + parseInt(benefits);
var payee = grossSalary * 0.1;
var NHIFDeductions = grossSalary * 0.01;
var NSSFDeductions = grossSalary * 0.05;
var netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;
alert('Net salary: ' + netSalary);
