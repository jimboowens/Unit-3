// JS is an async language, and is single-threaded, so it will not wait 
// on a certain line of code to load before moving on -- 
// console.log('1');setTimeout(()=>{console.log('2')},0);console.log('3')

const request = require('request')
const apiBaseUrl = 'http://api.themoviedb.org/3'
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`

let movieData = ``

// things to do: get movies now playing
// from that data, maybe we want to get the cast data.
// from that, get an individual actor
// from that, get their highest grossing movie

// a promise is a constructor, or class. it's built into JS, and takes 1 arg:
// a callback that takes 2 args:
    // resolve
    // reject
// start it by using "new" method.

// const moviePromise = new Promise((resolve, reject)=>{
//     return new Promise((resolve, reject)=>{
//         request.get(nowPlayingUrl, (err, response, body)=>{
//             if(err) {
//                 reject(err)
//             };
//             // when we call resolve, the promise is done to the outside world. 
//             // when we call reject, we let the world know our promise failed.
//             let parsedBody = JSON.parse(body)
//             resolve(parsedBody)
//         })
//     })
// })
// console.log(moviePromise)

const moviePromise = new Promise((resolve,reject)=>{
    request.get(nowPlayingUrl,(err,response,body)=>{
        if(err){
            reject(err);
        }
        // when we call reject, the outside world will know our promise has failed
        const parsedBody = JSON.parse(body)
        // console.log(parsedBody);

        // when we call resolve, the outside world, will know the promise is done
        resolve(parsedBody);
    })
})


// moviePromise.then((dataGivenToResolve)=>{
//     // console.log(dataGivenToResolve)
//     const castUrl = `${apiBaseUrl}/${movieData.results[0].id}/creditsapi_key${apiKey}`
//     console.log(castUrl)
// }).catch((theDataGivenToReject)=>{
//     console.log(theDataGivenToReject)
// })

// // console.log(`movieData is: ${movieData}`)
// // request.get(castUrl, (err, response, body)=>{

// // })

moviePromise.then((movieData)=>{
    return new Promise((resolve,reject)=>{

        const id = movieData.results[0].id
        const castUrl = `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`
        // console.log(castUrl)
        request.get(castUrl,(err,response,body)=>{
            const castParsed = JSON.parse(body);
            resolve(castParsed)
        })
    })
    
}).then((castParsed)=>{
    const actorData = castParsed.cast[0].id
    // console.log(actorData)
    const peopleUrl = `${apiBaseUrl}/person/${actorData}?api_key=${apiKey}`;
    request.get(peopleUrl,(err, response,body)=>{
        const actorParsed = JSON.parse(body)
        console.log(actorParsed)
    })
})