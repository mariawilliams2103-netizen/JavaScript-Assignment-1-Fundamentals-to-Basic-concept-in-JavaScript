// JAVASCRIPT ARRAYS
console.log("************** ARRAY CREATION AND POSITIONAL CREATION");

let courses = ["JavaScript", "Networking", "Database", "Web Design"];

//  lecturers array using new Array()
let lecturers = new Array("Amadu", "Salu", "Foday");

console.log(courses[0]);
console.log(courses[2]);


console.log("*************** MIXED DATA TYPES AND NESTED ARRAY/OBJECT ACCESS");

let studentProfile = {
  name: "Foday",
  age: 34,
};

let records = [
  "DICT Department",
  2026,
  true,
  null,
  { name: "Samuel", age: 67 },
  studentProfile,
  ["Cassava", "Plantain", "Mango"],
];

// Log name of object at index 4
console.log(records[4].name);

// Log age of studentProfile inside records
console.log(records[5].age);

// Log Plantain from nested array
console.log(records[6][1]);

console.log("***************** ARRAY MANIPULATION ********************");

let marketBasket = [];

// Add items to the end
marketBasket.push("Rice", "Palm Oil", "Onions");

// Remove the last item
marketBasket.pop();

// Add Pepper to the beginning
marketBasket.unshift("Pepper");

// Add Salt to the beginning
marketBasket.unshift("Salt");

// Remove the first item
marketBasket.shift();

console.log(marketBasket);

console.log("******************** BUILDING AN ARRAY OF OBJECTS *****************");

let lecturersDb = [];

// Insert first lecturer
lecturersDb.push({
    id: 1,
    fullName: "Amadu Kamara",
    department: "DICT",
    phoneNumber: "076123456"
});

// Insert second lecturer
lecturersDb.push({
    id: 2,
    fullName: "Samuel Amkam",
    department: "Computer Science",
    phoneNumber: "077234567"
});

// Insert third lecturer
lecturersDb.push({
    id: 3,
    fullName: "Foday Conteh",
    department: "Networking",
    phoneNumber: "078345678"
});

console.log(lecturersDb);

// Access second lecturer's name and phone number
console.log(`Lecturer Name: ${lecturersDb[1].fullName}
Phone Number: ${lecturersDb[1].phoneNumber}`);
