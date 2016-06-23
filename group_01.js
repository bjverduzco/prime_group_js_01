var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var employeesTotal = employees;

for(var i = 0; i < employees.length; i++){
  employeesTotal[i][1] = sti(employees[i]);
  console.log(employeesTotal[i]);

}

function empRating(emp2, percentage){
  if(emp2[3] <= 2){
    return percentage;
  }
  if(emp2[3] === 3){
    return percentage += 4;
  }
  if(emp2[3] === 4){
    return percentage += 6;
  }
  if(emp2[3] === 5){
    return percentage += 10;
  }
  return percentage;
}
function sti(emp){
  var temp = 0;
  if(emp[1].length === 4){
    temp = 5;
  }
  temp = empRating(emp, temp);
  if(emp[2] >= 65000){
    temp -= 1;
    if(temp < 0){
      temp = 0;
    }
  }
  if(temp > 13){
    temp = 13;
  }

  return;
}
