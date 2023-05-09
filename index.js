// https://www.omdbapi.com/?i=tt3896198&apikey=5e347079&t=t

const readline = require("readline");
const axios = require("axios");

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5e347079&s=';

function generateUrlWithTitle(inputtedParams) {
    const url = API_URL + inputtedParams;
    return encodeURI(url);
}

async function startSearch (answer) {
    const searchURL = generateUrlWithTitle(answer);
    const searchResult = await axios.get(searchURL);
    // here making beautiful logs
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Input film title:', async function (answer) {
    await startSearch(answer);
    rl.close();
});
