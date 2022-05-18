const trending = document.querySelector('.trending__movie  .swiper-wrapper')
const trendingApi = `${baseUrl}popular${apiKey}`



function showTrending(){
 getTrending(renderTrending)
}

function renderTrending(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide"  onclick='showDetail(${movie.id})' >
      <img src="${imgApi}w200${movie.poster_path}">
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  trending.innerHTML = htmls.join('')
  const slides = document.querySelectorAll('.swiper-slide')
  const overlay = document.querySelector('.overlay__content')
  const close = document.querySelector('.close')
  for (const slide of slides ){
    slide.addEventListener('click',() => {
      overlay.classList.add('show')
    })
  }
 
}




function getTrending(callback){
   fetch(trendingApi)
   .then(response => {return response.json('')})
   .then(callback)
}


function showDetail(id){
 const overlay = document.querySelector('.overlay')
 overlay.innerHTML = ` <iframe id="iframe"  src="https://www.2embed.ru/embed/tmdb/movie?id=${id}" width="100%" height="100%" frameborder="0"></iframe>`
}



showTrending()


