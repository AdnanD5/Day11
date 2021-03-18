//Create a temps array here
var monday = [31, 32, 19, 37];
var tuesday = [29, 27, 55, 36];
var wednesday = [17, 27, 42, 46]
var thursday = [29, 52, 21, 64];
var friday = [91, 27, 31, 61];

var temps = [];
temps.push(monday, tuesday, wednesday, thursday, friday);
//End of temps array
function myArrayFunction(arr){
    var newTemps = [...arr];
    var averageDayTemp = [];
//Only change code below this line 
var subSum = 0;
for(i=4) {
    subSum =+nums[monday][i]
    i--
}
averageDayTemp.push(subSum/nums[monday].length;)
//Only change code below this line
return averageDayTemp
}
console.log(myArrayFunction(temps)); //Change this line
module.exports = myArrayFunction;
