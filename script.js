/*For Dark-Mode */
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}


/* Condition-1 */
// function myFunction1() {
// let i = prompt("Check the number is divisible by 3 or not.");
// let i = number % 3 == 0;
// if (i % 3 == 0) {
//     // document.getElementById("demo1").innerHTML = "divisible by 3";
// } 
// else {
//     document.getElementById("demo1").innerHTML = "divisible not by 3";
// } 

// }
/* End Condition-1*/

/* Condition-2 */
function myFunction2(){
let number = prompt("Check the number is an event number or an odd number?.", "...");
if (number % 2 === 0) {
        document.getElementById("demo2").innerHTML = "Even";
} 
else {
     document.getElementById("demo2").innerHTML = "Odd";
}
}

/* End Condition-2*/

/* Condition-3*/
function myFunction3() {
let age = prompt("What is your age?");
if( age>18 ){
    document.getElementById("demo3").innerHTML = "Old Enough";
} 
else if(age==18){
    document.getElementById("demo3").innerHTML = "You Are Selected";
}
else{
    document.getElementById("demo3").innerHTML = "Too Young";    
}
}
/* End-Condition-3*/


/* Condition-4*/
function myFunction4() {
let name = prompt('What is your name?', '...');
if( name == 'anum' ){
    document.getElementById("demo4").innerHTML = "Happy Brithday in Advance" + " " + "Asra";
}
else{
    document.getElementById("demo4").innerHTML = null;
}
}
/* EndCondition-4*/





























