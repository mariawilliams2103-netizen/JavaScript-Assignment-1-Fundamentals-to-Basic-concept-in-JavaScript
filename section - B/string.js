// Strings, Indexing, Methods & Template Literals
console.log("******************** String Indexing & Abbreviations *********************");
let name1 = "Maria Williams";
let name2 = "Gladys Metzger";
let name3 = "Leonard Coker";

let name = "Maria Williams";
console.log(name1[0]);
let abbr1 = name1[0] + name1[9] + name1[6];
let abbr2 = name2[0] + name2[9] + name2[5];
let abbr3 = name3[0] + name3[9] + name3[4];

console.log(abbr1);
console.log(abbr2);
console.log(abbr3);



console.log("******************** String Methods, Method Chaining & Formatting *******************");

// Declare the email
let rawEmail = "Student.DICT@Limkokwing.EDU.SL";

// Convert to lowercase and check for Limkokwing
console.log(rawEmail.toLowerCase().includes("limkokwing"));

// Display the total number of characters
console.log(rawEmail.length);

// Display the formatted receipt
console.log("Faculty:\tDICT\nCampus:\tFreetown");


console.log("********************** Concatenation vs Template Literals ********************");

// Declare course information
let courseName = "JavaScript Fundamentals";
let lecturerName = "Mr. John";
let creditHours = 3;
let semester = "Semester 2";

// Print course information using concatenation
console.log("The course is " + courseName +
", taught by " + lecturerName +
", worth " + creditHours +
" credit hours in " + semester + ".");

// Declare test scores
let score1 = 68;
let score2 = 74;
let score3 = 89;

// Calculate average
let average = (score1 + score2 + score3) / 3;

// Print average using template literals
console.log(`The average test score is ${average}`);
