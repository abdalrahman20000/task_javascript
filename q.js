//---------------- Q1 -----------------------------
let x = 5;


console.log(5 * 3);
console.log("JavaScript" + 50);
console.log(17 % 5);
console.log(5 % 17);
console.log(4 === "4");
console.log(4 != 5);
console.log(7 <= 8);
console.log("Hello" + 5);
console.log(Math.ceil(x) - Math.floor(x));
console.log(Math.pow(x, 2));

//---------------- Q1 -----------------------------

//---------------- Q2 -----------------------------

let q2 = prompt("Q2- Enter a number");
alert(q2);

//---------------- Q2 -----------------------------


//---------------- Q3 -----------------------------

let q2_num1 = Number(prompt("Q3- Enter first number"));
let q2_num2 = Number(prompt("Q3- Enter second number"));

if (q2_num1 < q2_num2) {
    alert(q2_num1 + " ," + q2_num2);
}
else {
    alert(q2_num2 + " ," + q2_num1);
}

//---------------- Q3 -----------------------------

//-------------------------------------------------------------------------------------------------------

//---------------- Q4 -----------------------------

let q3_num1 = Number(prompt("Q4- Enter first number"));
let q3_num2 = Number(prompt("Q4- Enter second number"));

if (q3_num1 > q3_num2) {
    alert(q3_num1 + " is a larger number");
}
else {
    alert(q3_num2 + " is a larger number");
}

//---------------- Q4 -----------------------------

let q5_num1 = Number(prompt("Q5- Enter first number"));
let q5_num2 = Number(prompt("Q5- Enter second number"));

alert("the sum of " + q5_num1 + " and " + q5_num2 + " is : " + (q5_num1 + q5_num2));
//---------------- Q5 -----------------------------

let q6_num = prompt("Q6- Enter a number");
let q6_message;

switch (Number(q6_num)) {
    case 1:
        q6_message = "one";
        break;
    case 2:
        q6_message = "two";
        break;
    case 3:
        q6_message = "three";
        break;
    case 4:
        q6_message = "four";
        break;
    case 5:
        q6_message = "five";
        break;
    case 6:
        q6_message = "six";
        break;
    case 7:
        q6_message = "seven";
        break;
    case 8:
        q6_message = "eight";
        break;
    case 9:
        q6_message = "nine";
        break;
    default:
        q6_message = "PLEASE TRY AGAIN";
        break;
}

alert(q6_message.toUpperCase());
//---------------- Q6 -----------------------------