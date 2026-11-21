console.log("******************** Authentication Check *******************");

// Store the registered email and password
let registeredEmail = "student@gmail.com";
let registeredPassword = "12345";

// Store the entered email and password
let enteredEmail = "student@gmail.com";
let enteredPassword = "12345";

// Check the login credentials
if (
  enteredEmail === registeredEmail &&
  enteredPassword === registeredPassword
) {
  console.log("Access Granted: Welcome to the Student Portal");
} else {
  console.log("Access Denied: Invalid email or password");
}

console.log(
  "***********************  Number Comparison Logic **********************",
);

// Declare the two scores
let scoreA = 75;
let scoreB = 82;

// Compare the scores
if (scoreA > scoreB) {
  console.log(`Score A (${scoreA}) is greater than Score B (${scoreB})`);
} else if (scoreA < scoreB) {
  console.log(`Score A (${scoreA}) is less than Score B (${scoreB})`);
} else {
  console.log(`Score A (${scoreA}) is equal to Score B (${scoreB})`);
}
