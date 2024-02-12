const leoName = 'Leo';
const leoSurname = 'Musvaire     ';
const leoBalance = '-9394';

const sarahName = 'Sarah    ';
const sarahSurname = 'Kleinhans';
const sarahBalance = '-4582.2';

const divider = '----------------------------------';

// Only change below this line

// Convert leoBalance and sarahBalance to numbers using parseFloat
const leoBalanceNumber = parseFloat(leoBalance);
const sarahBalanceNumber = parseFloat(sarahBalance);

// Calculate the total owed amount
const totalOwed = Math.abs(leoBalanceNumber) + Math.abs(sarahBalanceNumber);

// Format the total owed amount to have 2 decimal places and include thousand separators
const formattedTotalOwed = totalOwed.toLocaleString('en-ZA', { style: 'currency', currency: 'ZAR' });

// Create the strings for Leo and Sarah's owed amounts
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${Math.abs(leoBalanceNumber).toFixed(2)})`;
const sarah = `${sarahName} ${sarahSurname.trim()} (Owed: R ${Math.abs(sarahBalanceNumber).toFixed(2)})`;

// Create the final output
const result = `\n${leo}\n${sarah}\n${divider}\n${divider}\n  Total amount owed: ${formattedTotalOwed}\n${divider}`;

console.log(result);
//i used 'Math.abs()' around 'leoBalanceNumber and 'sarhaBalanceNumber'
//when constructing the strings for leo and sarah's owed amounts
//this ensures that the displayed amounts are positive..