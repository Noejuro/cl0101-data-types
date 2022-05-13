
// Create a javascript program that prints in console the message described below (
// terminated with new line character) for each data type available in javascript

console.log(
`The set of types in the JavaScript language consists of primitive values and objects.

    Primitive values:
        *Boolean stores a logical entity and can have two values, examples: true, false
        *Null stores exactly one value, examples: null, let a = null
        *Undefined stores exactly one value used in variables that has not been assigned a value, examples: undefined, let a
        *Number stores double-precision 64-bit binary format IEEE 754 value, examples: 3.5, Infinity, 2, 3.41e5
        *BigInt stores integers with arbitrary precision like large integers even beyond the safe integer limit for Numbers, examples: 9007199254740991n, BigInt("0x1fffffffffffff")
        *NaN is the result of an arithmetic operation cannot be expressed as a number
        *String stores a set of "elements" of 16-bit unsigned integer values to represent textual data, examples: "Hello", "world!", "thisIsA\nValid\tstring even in Espa\u00f1a"
        *Symbol stores a unique and immutable primitive value, examples Symbol('hello');
    
    Objects stores value in memory which is possibly referenced by an identifier, examples {name: "Noé", age: 23}, ["Noé", 23]
`)