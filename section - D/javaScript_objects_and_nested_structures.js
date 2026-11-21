// JavaScript Objects & Nested Structures

console.log(
  "********************** Object Manipulation (Read, Update, Add) ***************************",
);
// Create course object
let course = {
  code: "BSEM2104",
  title: "Web Development",
  lecturer: "Amadu Kamara",
  credits: 3,
  isCore: true,
};

console.log(course.title);

// Update lecturer
course.lecturer = "Samuel Amkam";

// Add a new property
course.room = "Lab 4";

// Log updated object
console.log(course);


console.log(
  "**************** Nested Objects, Arrays & Template Literal Formatting ***************",
);

// Create hotelRoom object
let hotelRoom = {
    location: "Aberdeen",
    pricePerNight: 500,
    guestName: "Maria Williams",
    nights: 3,

    amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],

    bathroom: {
        count: 2,
        hasJacuzzi: true
    }
};

// Log the amenities array
console.log(hotelRoom.amenities);

// Log only hasJacuzzi
console.log(hotelRoom.bathroom.hasJacuzzi);

// Calculate total bill
let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;

// Print booking summary
console.log(`
----- BOOKING SUMMARY -----
Guest Name: ${hotelRoom.guestName}
Location: ${hotelRoom.location}
Number of Nights: ${hotelRoom.nights}
Total Bill: NLe ${totalBill}
---------------------------
`);