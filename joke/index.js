/*const JokeContainer = document.getElementById("joke") ;

const btn = document.getElementsByid("btn")

const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"

let getjoke = () => {

fetch(url)
.then(data => data.json())
.then(item => {
    JokeContainer.textcontainer = '${item.joke}';
})
}

getjoke () ;

*/

// ========================================
async function getData() {
    try {
        const response = await axios("https://icanhazdadjoke.com/", {
            method: "GET",
            headers: {
                "Accept": "text/plain",
            }
        });

        document.getElementById("joke").innerHTML = response.data;
    }
    catch(error) {

        document.getElementById("error").innerHTML = error.message;
    }
}
