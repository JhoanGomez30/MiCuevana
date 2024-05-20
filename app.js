// const key_public = "2476fa7c7a96a97e92be66808bb072d6";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNDc2ZmE3YzdhOTZhOTdlOTJiZTY2ODA4YmIwNzJkNiIsInN1YiI6IjY2NDc2ZDUzYjc3ODY4MjVhYTYzMDBjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNejNQXz6xUv0vMI2vLX-Ybs4431Rxk1Krnil7MQGy4",
  },
};

const url_api_base = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

// function TraerPeliculas(){

//     let peliculas= [];

//     fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=2', options)
//     .then(response => response.json())
//     .then(response => response.results.forEach(element =>  console.log(element.title)))
//     .catch(err => console.error(err))
//     console.log(peliculas)
// }

// TraerPeliculas()



async function peliculas(){
    try{
        const responseFetch = await fetch(url_api_base, options);
        console.log(responseFetch);

        if(responseFetch.status === 200){
            const data = await responseFetch.json();
            console.log(data.results)
        }
    }
    catch(e){
        console.log("ocurrio un error")
    }
}

peliculas()