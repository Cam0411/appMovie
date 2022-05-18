const next = document.querySelector('.leftarrow')
const back = document.querySelector('.rightarrow')
const res = document.querySelector('.result')
const popular = document.querySelector('.popular__box .grid .row')

var num = 1
function renderRes(){
  movieApi(1)
  next.addEventListener('click',() => {
    res.innerHTML = num+=1
    movieApi(num+=0)
  })
  back.addEventListener('click',() => {
    if (num > 1){
      res.innerHTML = num-=1
      movieApi(num-=0)
    }
  })
  
}
function movieApi(page){
  const changepape = `https://api.themoviedb.org/3/movie/popular?api_key=d446dfce025a6b8b811140d296404e39&page=${page}`
  fetch(changepape)
  .then(response => {return response.json('')})
  .then(display)
} 

function display(movies){
  const htmls = movies.results.map(movie => {
    return ` 
    <div class="col l-3 m-6 c-12 movie__box" onclick='showDetail(${movie.id})' >
    <img class='img__src-box' src='${imgApi}w200${movie.poster_path}'>
    <p class='title__img-src'>${movie.title}</p>
    </div>
  
   
    `
    
})

const html = htmls.join('')
popular.innerHTML = html
const slides = document.querySelectorAll('.movie__box')
  const overlay__content = document.querySelector('.overlay__content')
  for (const slide of slides ){
    slide.addEventListener('click',() => {
      overlay__content.classList.add('show')
    })
  }
  const close = document.querySelector('.close')
  close.addEventListener('click',() => {
    overlay__content.classList.remove('show')
  })

  $('.close').click(function(){      
    $('iframe').attr('src', $('iframe').attr('src'));
});
}

function showDetail(id){
    const overlay = document.querySelector('.overlay')
    overlay.innerHTML = ` <iframe id="iframe"  src="https://www.2embed.ru/embed/tmdb/movie?id=${id}" width="100%" height="100%" frameborder="0"></iframe>`
   }
renderRes()