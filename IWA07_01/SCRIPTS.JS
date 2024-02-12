const value = "3";
console.log(Number(value) + 4 + Number(value));
//The reaon why '343'is logged instead of  '10'
//is when youre using '+'operator its going to causes 
// concatenation
