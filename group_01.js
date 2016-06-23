var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];
var employeesTotal = employees[];

for(var i = 0; i < employees.length; i++){
  employeesTotal[i] = bonus(employees);
}

function sti(emp, percentage){
  if(emp[3] <= 2){
    return percentage;
  }
  if(emp[3] === 3){
    return percentage += 4;
  }
  if(emp[3] === 4){
    return percentage += 6;
  }
  if(emp[3] === 5){
    return percentage += 10;
  }
}
function bonus(emp){
  int temp = 0;
  if(emp[2] === 4){
    temp = 5;
  }
  sti(emp, temp);
  return temp;
}
