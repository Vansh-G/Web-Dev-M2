let numberdiv = document.getElementById("num");


let number = 0;


let plus = document.getElementById("Increment button");
let minus = document.getElementById("Decrement button");
let reset = document.getElementById("Reset button");


plus.addEventListener("click", () => {
    ++number;
    numberdiv.innerHTML = number;
})

minus.addEventListener("click", () => {
    if (number > 0){
        --number;
        numberdiv.innerHTML = number;
    }
    else {
        numberdiv.innerHTML = 0;
    }
})

reset.addEventListener("click", () => {
    number = 0;
    numberdiv.innerHTML = number;
})
