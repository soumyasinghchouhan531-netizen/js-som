/*1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object  */


       // stack and heap

       // stack use in primitive data typs 

       // heap used in non primitive data types 



       // stack example 
       let a = 10;

       let b = a;


       b = 20;

console.log(a); // 10
console.log(b); // 20


//heap example
let obj1 = { age: 20 };
let obj2 = obj1;

obj2.age = 25;

console.log(obj1.age); // 25

