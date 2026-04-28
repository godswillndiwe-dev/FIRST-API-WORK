// FETCH= Function that allows us to make HTTP requests to servers and retrieve data from them. It is a modern replacement for the older XMLHttpRequest (XHR) method and provides a more flexible and powerful way to handle asynchronous operations in JavaScript.

// The fetch function takes a URL as an argument and returns a Promise that resolves to the Response object representing the response to the request. You can then use methods on the Response object to access the data returned by the server, such as .json() for JSON data or .text() for plain text.   

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response =>   response.json())
// .then(data => console.log(data))
// .catch((error) => console.error( error));

// fetchData();

// async function fetchData() {

//     try {
// const pokemonName = document.getElementById("pokemonName").value.toLowerCase();



// const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
// if (!response.ok) {
//     throw new Error("Network response was not ok");
// }
// const data = await response.json();
// const pokemonImage = data.sprites.front_default;
// const imgElement = document.getElementById("pokemonImage");
// imgElement.src = pokemonImage;
// imgElement.style.display = "block";
// imgElement.style.width = "200px";


//     }


//         catch (error) {
// console.error(error);
// }

// }


// API:   


// const btn = document.getElementById 
// ("btn");
// const output = document.getElementById 
// ("output");

// btn.addEventListener("click", function () {
//     fetch("https://api.adviceslip.com/advice")
//     .then((res) => res.json())
//     .then((data) => {
//         output.textContent = data.slip.advice;
//     });
// });


const btn = document.getElementById("btn");
const setup = document.getElementById("setup");
const punchline = document.getElementById("punchline");

btn.addEventListener("click", function () {

    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
        setup.textContent = data.setup;
        punchline.textContent = data.punchline;
    });

});