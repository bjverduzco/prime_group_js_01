//prime_group_01_js Brian, Kyle, Hillary

var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var atticusFinal = [];
var jemFinal = [];
var booFinal = [];
var scoutFinal = [];

var employees = [atticus, jem, boo, scout];
var employeesTotal = [atticusFinal, jemFinal, booFinal, scoutFinal];

for(var i = 0; i < employees.length; i++){
  employeesTotal[i][0] = employees[i][0];
  employeesTotal[i][1] = sti(employees[i], employeesTotal[i]);
  bonusTotal(employees[i], employeesTotal[i]);
  employeesTotal[i][1] += "%";
  employeesTotal[i][2] = "$" + employeesTotal[i][2];
  employeesTotal[i][3] = "$" + employeesTotal[i][3];
  console.log("The original array of employees is:");
  console.log(employees[i]);
  console.log("The final version of the array of employees is:");
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

function sti(emp, empTotal){
  var temp = 0;
  if(emp[1].length === 4){
    temp = 5;
  }
  temp = empRating(emp, temp);
  if(parseInt(emp[2]) >= 65000){
    temp -= 1;
    if(temp < 0){
      temp = 0;
    }
  }
  if(temp > 13){
    temp = 13;
  }
  empTotal[1] = temp;
  return temp;
}

function bonusTotal(emp, empTotal){
    for(var j = 0; j < emp.length; i++){
      var actualSti = parseInt(empTotal[1]) * (0.01 * parseInt(emp[2]));
      empTotal[2] = parseInt(emp[2]) + actualSti;
      empTotal[3] = Math.round(actualSti);
      return empTotal;
    }
}
