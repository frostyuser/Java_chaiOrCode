//Primitive data types
//strings, boolean, number,BigInt,null,undefined,symbol
//these are those who are not directly accessed rather, their copy is made to which change is made

//js is dynamically typed language.it means, we don't have to specify the data type of a variable explicitly(c++ is static)
//also, the type checks take place during the runtime and not at the compile type, i.e in the compiler,before running the code
//changes can be made to the variable type 

//Non-primitive data types(reference data types)
//arrays,objects, functions
//change made directly at the original location

//=== unlike == checks the dataType before checking the value
//typeOf null is object 
//typeOf undefined is undefined only
//typeOf an array is returned as object 

let a = [1,2,3,4]
console.log(typeof a);//object

let myObj ={
    name:"a",
    class:23,
}
console.log(typeof myObj);//object
