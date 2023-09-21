

function generateJoke() {
    let apiUrl = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
    async function getJoke() {
        var response = await fetch(apiUrl);
        var joke = await response.json();
        document.querySelector('.jokeItem').innerHTML = joke.joke;
        // console.log(joke);
    }
    getJoke()
}