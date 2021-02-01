const fs = require('fs');
const request = require('request');

fs.readFile('movie.txt',(err,query)=>{
    if(err) return console.log(err);

    request('https://api.themoviedb.org/3/search/movie?api_key=fbfdf6274fb627cb59862300a89f7265&query='+query.toString(),{timeout:0},(err,response,body)=>{
        if(err) return console.log(err);

        let movies = JSON.parse(body);

        

        movies.results.forEach((movie)=>{
            console.log(movie.original_title);
        })

        if(movies.results <= 0){
            console.log("movie not found....");
        }
    })
})