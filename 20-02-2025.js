/*the function which does not have function keyword and function name and denoted by => is know as arrow function
* arrow functions are introduced in ES6, to increase the readability of anonymous functions.
* arrow functions are shorthand property of anonymous functions.
* in arrow functions this keyword behaviour is different compared to anonymous functions.
* syntax:
*  variable refvar= (parameters) =>{         
  *  // statements;
  *   return value;
  * }
  *  refvar(arguments);
*/ 
/* traditional syntax:
  * variable refvar = function(){
     // statements;
     return value;
     }
     refvar();
 */



 var add = (a,b) => b+a;
   console.log(add(12, 16));

var square= n => n*n;
  console.log(square(5));


/**
 * How does the syntax change for an arrow function when it takes exactly one parameter?
Explain why parentheses might be omitted in this case.

 */
// with parantheses
var funOne= ()=>{
  console.log("hello world");
}
funOne();
// without parantheses
var demo= a=> {
  console.log("hello world !")
}
demo();


/**
 * In JavaScript, when an arrow function has exactly one parameter, the parentheses are optional. This is because the language syntax allows for implicit interpretation of the single parameter without the need for parentheses. The function can be written more concisely, making the code easier to read and less cluttered.
 */



/**
 * Concise body: The concise body is more compact and useful when the function has only a single expression to return. It does not require curly braces or the return keyword.
 */
var cube = num=> num **3;
console.log(cube(3));

/**
 * Block body: The block body allows for more complex operations inside the function, including multiple statements. It requires the use of curly braces and the explicit return keyword.
 */
var cubeNum = (num) =>{
  return num**3;
}
console.log(cubeNum(10));



var sub = (a,b) => b-a;
console.log(sub(12, 16));



var demo = () => "Hello world!"
console.log(demo());