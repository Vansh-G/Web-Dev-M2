// Accessing all elements using IDs
let stringCont = document.getElementById("String");
let intCont = document.getElementById("Int");
let sumFuncAns = document.getElementById("sum_ans");
let DMAns = document.getElementById("Dec_Making_Ans");
let loopAns = document.getElementById("loopAns");


// Defining 2 variables. 1 String another Integer and relaying them back to the html file
let stringVar = "String is: Mid Term 2";
stringCont.innerHTML = stringVar;
let integerVar = 124;
intCont.innerHTML = "Number is: " + integerVar;

// Made a function that adds two numbers which we have already provided
let sumFunc = (num1, num2) => {
  return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(15, 58);

// Made a function that  finds if a number is odd or even
let num = 55;
if (num%2 == 0) {
  DMAns.innerHTML = "Even";
} else {
  DMAns.innerHTML = "Odd";
}

// Made a for loop that gives out the factorial of a number(Here 5)
let fact=1
let a = 5
for (let i = 1; i <= a; i++) {
  fact*=i;
}
loopAns.innerHTML = fact
