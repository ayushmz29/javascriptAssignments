/* 
Create a function that exhibits the same behaviour as of “new” (constructor) keyword in javascript. 


Given:
const obj = new SampleClass(param1);
console.log(obj.passedParam1); // displays the value of passed parameter


Expected:
const  obj = myNew(SampleClass, param1);
console.log(obj.passedParam1); // displays the value of passed parameter


Where
SampleClass(only for eg.) can be any Class of which we want to construct objects.

*/

class SampleClass{
  constructor(...param){
    this.param = param;
  };
  method1(){
    console.log("Method 1 is called");
  }
}


let obj = new SampleClass("Parameter 1", "Parameter 2");
console.log(`Using built-in 'new' : ${obj.param}`);
// console.log(`Calling method1 using 'new' : ${obj.method1()}`);

// Implementing 'myNew' :-
let myNew = (argClass, ...params) => {
  return new argClass(...params);
}

let obj2 = myNew(SampleClass, "Parameter 1", "Parameter 2");
console.log(`Using 'myNew' : ${obj2.param}`)
// console.log(`Calling method1 using 'myNew' : ${obj2.method1()}`);