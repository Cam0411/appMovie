const src__value = document.querySelector('.src__info ')
const content = document.querySelector('.container')
const src = document.querySelector('.src__container .img__src .grid .row')
const mainsrc = document.querySelector('.src__container')
const searchURL = "https://api.themoviedb.org/3/" + "search/movie" + apiKey
const src__title = document.querySelector('.src__title')
function getSrc(){
    window.addEventListener('keypress',event => {
        if (event.keyCode == 13){
            getsrcApi(src__value.value)
            slider.style.display = 'none'
            content.style.display = 'none'
            mainsrc.style.display = 'block'  
            src__title.innerHTML = `Results for "${src__value.value}"`
            src__value.value = ''
        }
    })
}

function getsrcApi(movie){
   const movieData = `${searchURL}&query=${movie}`
   fetch(movieData)
   .then(response  => {return response.json('')})
   .then(displayMovies)

}

function displayMovies(movies){
    const htmls = movies.results.map(movie => {
        return ` 
        <div class="col l-3 m-6 c-12 movie__box" onclick='showDetail(${movie.id})'>
        <img class='img__src-box' src='${imgApi}w200${movie.poster_path}'>
        <p class='title__img-src'>${movie.title}</p>
        </div>
      
       
        `
        
    })
    
    const html = htmls.join('')
    src.innerHTML = html
    const movieBoxs = document.querySelectorAll('.movie__box')
    const overlay = document.querySelector('.overlay__content')
    for (const movie__box of movieBoxs){
       movie__box.addEventListener('click',()=> {
           overlay.classList.add('show')
       })
    }
}
getSrc()