// Temporal dead zone
console.log(a);

let a = 20;

// ReferenceError: Cannot access 'a' before initialization


{
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    // This is the temporal dead zone for the age variable!
    let age = 25; // Whew, we got there! No more TDZ
    console.log(age);
}