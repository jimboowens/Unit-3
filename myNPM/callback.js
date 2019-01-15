// a callback is afunction for some other functiona function to be called by another function

// in JSm, f(n)'s are first calss objects.
// this means you can do almost anything with a fn that you can with an object.
// pass around, assign to a variable, overwrite it

// function x () {}
// console.log(typeof(x))
// const myFunction = function(n){
//     console.log (n)
// }
// console.log(myFunction)

// function myOtherFunction (callback) {
//     callback(5)
// }

// myOtherFunction(myFunction)

// const http = {}
// http.createServer = function(callback){
//     callback(req, res)
// }

// function exerciseFunction (callback){
//     let n = "string"
//     callback (n)
//     }
    
// function getTypeOf(parameter){
//     let kind =  typeof parameter
//     console.log(typeof parameter)
//     return kind 
// }

// exerciseFunction(getTypeOf)

let array = [1,3,5,8,9,10]
let array2 = [1,3,5,9]

function findElem(arr, callback){
    console.log (arr)
    return callback(arr)
}
function findValue(array){
    let counter = 0
    return array.map((item)=>{
        if (item%2===0){
            console.log (`item is `,item)
            counter++
            return item
        }
        if(counter===0){
            return false
        }
    })
}
let x = findElem(array,findValue)
let y = findElem(array2, findValue)

console.log(x)
console.log(y)

function squareIt(number, callback){
    // doStuff...
    //  console.log(callback(x,y)**2);
    let square = number ** 2;
    return callback(square)
  }
  
  function triple(something){
    return something * 3;
  }
  
  function multiplyEm(a,b){
     return a*b;
  }
  
  let num = multiplyEm(3, 5);
  let result = squareIt(num, triple);
  console.log(result);