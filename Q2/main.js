// Setup
let stringCont = document.getElementById("String");
let intCont = document.getElementById("Int");
let sumFuncAns = document.getElementById("sum_ans");
let DMAns = document.getElementById("Dec_Making_Ans");
let loopAns = document.getElementById("loopAns");


// Variables
let stringVar = "String is: Mid Term 2";
stringCont.innerHTML = stringVar;
let integerVar = 124;
intCont.innerHTML = "Number is: " + integerVar;

// Sum function
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(15, 58);

// Decision making
let num = 55;
if (num%2 == 0) {
  DMAns.innerHTML = "Even";
} else {
  DMAns.innerHTML = "Odd";
}

// Loops
let fact=1
let a = 5
for (let i = 1; i <= a; i++) {
  fact*=i;
}
loopAns.innerHTML = fact