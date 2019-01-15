// a callback is a function for some other function to run.
// a function to be called after by another function

// In JS functions are first-class objects.
// That means... you can do almost antthing with 
// a function that you can do with any object
// - pass them around
// - assign it to a variable
// - overwrite it
function x(){}
console.log(typeof(x))

const myFunction = (n)=>{
    console.log(n);
}

function myOtherFuntion(daffy){
    daffy(5);
}

myOtherFuntion(myFunction);

const functionToRunInGetJSON = function(data){
    // const x = document.getElementById('someId');
    // x.innerHTML = ...
    google.Maps.InfoWindow(data)
}

$.getJSON(url,functionToRunInGetJSON)

// somewhere in the bowls of jquery is this...
window.$ = {};
$.getJSON = function(url,callback){
    // jQuery does something cool with the url (xmlhttprequest)
    // it gets some data back. 
    // it calls the data myData
    function(data){
        // const x = document.getElementById('someId');
        // x.innerHTML = ...
        google.Maps.InfoWindow(data)
    }
}

// const http = {}
// http.createServer = function(callback){
//     // handle the http traffic
//     // do a bunch of networking stuff
//     // now I'm done and I have a req object
//     // and a res Object. Can you give me that
//     // code you wanted me to run now?
//     callback(req, res)
// }

// function n(x){
//     return function(y){
//         console.log(x+y)
//     }
// }
// n(2)(3)