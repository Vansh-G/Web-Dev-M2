//Getting container for number
let numberdiv = document.getElementById("num");

//Assigning initial value to the variable number
let number = 0;

// Getting access to the buttons using IDs
let plus = document.getElementById("Increment button");
let minus = document.getElementById("Decrement button");
let reset = document.getElementById("Reset button");


// Adding the increment Action to increment button
plus.addEventListener("click", () => {
    ++number;
    numberdiv.innerHTML = number;
})

// Adding the decrement action to decrement button
minus.addEventListener("click", () => {
    if (number > 0){
        --number;
        numberdiv.innerHTML = number;
    }
    else {
        numberdiv.innerHTML = 0;
    }
})

// Adding the reset acion to reset button
reset.addEventListener("click", () => {
    number = 0;
    numberdiv.innerHTML = number;
})
