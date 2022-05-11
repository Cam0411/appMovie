const src = document.querySelector('.src__res')
const display = document.querySelector('.display__moive')
const baseUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = '?api_key=d446dfce025a6b8b811140d296404e39'
const imgApi = "https://image.tmdb.org/t/p/"
const searchURL = "https://api.themoviedb.org/3/" + "search/movie" + apiKey
const srcIcon = document.querySelector('.search')

function srcMovie(){
    window.addEventListener('keypress',e => {
        if (e.keyCode == 13){
            getSearch(src.value)
            src.value = ''
        }
    })
}
function searchIcon(){
    srcIcon.addEventListener('click',() => {
        getSearch(src.value)
        src.value = ''
    })
}

function getSearch(movies){
    const movieDatas = `${searchURL}&query=${movies}`
    fetch(movieDatas)
    .then(reponse => {return reponse.json('')})
    .then(displayMovie)
}

function displayMovie(movies){
    const htmls = movies.results.map(movie => {
        return `
        <div class=" movie__res-src">
        <img src='${imgApi}w200${movie.backdrop_path}'>
        <p class='title__search'>${movie.title}</p>
        </div>
        `
    })
    const html = htmls.join('')
    display.innerHTML = html
}
srcMovie()
searchIcon()
