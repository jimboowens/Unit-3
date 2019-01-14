// a callback is afunction for some other functiona function to be called by another function

// in JSm, f(n)'s are first calss objects.
// this means you can do almost anything with a fn that you can with an object.
// pass around, assign to a variable, overwrite it

function x () {}
console.log(typeof(x))
const myFunction = function(n){
    console.log (n)
}
console.log(myFunction)

function myOtherFunction (callback) {
    callback(5)
}

myOtherFunction(myFunction)