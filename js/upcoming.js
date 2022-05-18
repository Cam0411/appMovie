const upcoming__movie = document.querySelector('.upcoming__movie .swiper-wrapper')
const upcoming__movieApi = `${baseUrl}upcoming${apiKey}`


function showupcoming__movie(){
 getupcoming__movie(renderupcoming__movie)
}

function renderupcoming__movie(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide"  onclick='showDetail(${movie.id})'>
     <img src="${imgApi}w200${movie.poster_path}">
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  upcoming__movie.innerHTML = htmls.join('')
  const slides = document.querySelectorAll('.swiper-slide')
  const overlay__content = document.querySelector('.overlay__content')
  for (const slide of slides ){
    slide.addEventListener('click',() => {
      overlay__content.classList.add('show')
    })
  }
}

function getupcoming__movie(callback){
   fetch(upcoming__movieApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showupcoming__movie()