//-----------------------addEventListener Function-------------------------//
let id;
let searchBar = document.getElementById("searchBar");
searchBar.addEventListener("input",function(){
    if(id){
        clearTimeout(id);
    }
    id=setTimeout(() => {
        callMovies(searchBar.value);
    },600);

});


//-------------------------------CallMovies Function---------------------------//
let key = "f2ebb69";
async function callMovies(movieName){
    try{
        let res = await fetch(`http://www.omdbapi.com/?s=${movieName}&apikey=${key}`);
        let finalData = await res.json();
        displayData(finalData?.Search);
        console.log(finalData);
    }
    catch(error){
        console.log("Movies Not Found...");
    };
};

//-------------------------DisplayData Function-----------------------------//
function displayData(movieslist){
    let container = document.getElementById("container");
    container.innerHTML = "";

    if(movieslist != null){
        movieslist.forEach((movie) => {
            
            container.innerHTML += `
            <div id="movieCard">
            <img src=${movie.Poster}>
            <p id="title">${movie.Title}</p>
            <p id="year">${movie.Year}</p>
            </div>
            `
        });
    }else if(movieslist == null){
        container.innerHTML += '<p id="notFound">Movie Not Found...</p>'    
    }
};