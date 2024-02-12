const nickname = "Timmy";
const firstname = "Timothy";

if (nickname) {
    console.log(`Good morning, ${nickname}!`);
} else if (firstname) {
    console.log(`Good morning, ${firstname}!`);
} else {
    console.log("Good morning!");
}
//the original code used single quotes to enclose the string which does not allow for string interpolation.
//it required backticks in JS
//the variables wasnt properly interpolated
// so i used the '${}' syntax inside a template literal
//the logical OR Operator was treated as a string literal not as L.O.O
//L.O.O is used for Boolean logic..