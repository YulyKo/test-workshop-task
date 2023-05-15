// https://www.omdbapi.com/?i=tt3896198&apikey=5e347079&t=t

const readline = require('readline');
const axios = require('axios');

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=5e347079&s=';

const drawEmptyLine = () => console.log('\n');

function generateUrlWithTitle(inputtedParams) {
    const url = API_URL + inputtedParams;
    return encodeURI(url);
}

function showFilms(films) {
    films.forEach(film => showFilm(film));
}

function showFilm(film) {
    const { Title, Year, Poster } = film;
    drawEmptyLine();
    console.log(Title, `(${Year})`);
    console.log(Poster);
}

async function startSearch (answer) {
    const searchURL = generateUrlWithTitle(answer);
    const response = await axios.get(searchURL);
    showFilms(response.data.Search);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Input film title:', async function (answer) {
    await startSearch(answer);
    rl.close();
});
