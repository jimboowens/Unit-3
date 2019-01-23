const request = require('request')
const apiBaseUrl = 'http://api.themoviedb.org/3'
const apiKey = 'fec8b5ab27b292a68294261bb21b04a5'
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`

function getNowPlaying(){
    return new Promise((resolve,reject)=>{
        request.get(nowPlayingUrl,(err,response,body)=>{
            resolve(JSON.parse(body))
        })
    })
}

function getCast(movieId){
    return new Promise((resolve, reject)=>{
        const castUrl = `${apiBaseUrl}/movie/${movieId}/credits?api_key=${apiKey}`
        request.get(castUrl,(err,response,body)=>{
        resolve(JSON.parse(body))
        })
    })
}

function getPerson(personId){
    return new Promise((resolve,reject)=>{
        const personUrl = `${apiBaseUrl}/person/${personId}/?api_key=${apiKey}`
        request.get(personUrl,(err,response,body)=>{
            resolve(JSON.parse(body))
        })
    })
}

// async before a function means an await is coming

async function run(){
    const movieData = await getNowPlaying()
    const castData = await getCast(movieData.results[0].id)
    const personData = await getPerson(castData.cast[0].id)
    console.log(movieData,castData,personData)
}
run()