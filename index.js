const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDc2ZmE3YzdhOTZhOTdlOTJiZTY2ODA4YmIwNzJkNiIsInN1YiI6IjY2NDc2ZDUzYjc3ODY4MjVhYTYzMDBjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNejNQXz6xUv0vMI2vLX-Ybs4431Rxk1Krnil7MQGy4'
    },
};

const url_base = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

// function traerPeliculas() {
//     fetch(url_base, options)
//         .then(response => response.json())
//         .then(data => data.results.forEach((element) => {
//             console.log(element)    
//         }))
//         .catch((err) => console.error(err));
// }

// traerPeliculas();

async function consultarAPI(){

    const contenedor = document.getElementById("container")

    try{
        const resFetch = await fetch(url_base, options)
        const response = await resFetch.json()
        const data = await response.results

        data.forEach(element => {
            contenedor.innerHTML += 
            `<div class="peliculas"> 
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${element.poster_path}">
                
                <div class="text_peli">
                    <h3 class="titulo_peli">${element.title}</h3>
                    <p>${element.overview}</p>
                </div>
            </div>`;
        });

    }catch (err){
        console.error(err)
    }
}


consultarAPI()