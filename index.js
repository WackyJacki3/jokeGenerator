const joke = document.querySelector("#jokeText");
const button = document.querySelector("#jokeButton");

getJoke();

button.addEventListener("click", getJoke);

function getJoke() {
    axios.get(`https://official-joke-api.appspot.com/random_joke`)
        .then((response) => {
            let jokeDisplay = "";
            let jokeSetup = response.data.setup;
            let jokePunchline = response.data.punchline;
            jokeDisplay +=
            `
            <h2>Q: ${jokeSetup} A: ${jokePunchline}</h2>
            `;
            joke.innerHTML = jokeDisplay;
        }).catch(err => {
            console.log(err);
            joke.innerHTML = 
            `<p>Sorry, there was an error loading the joke</p>`;
        })

}