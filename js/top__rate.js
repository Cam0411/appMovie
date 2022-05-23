const top__rate = document.querySelector('.top__rate__movie  .swiper-wrapper')
const top__rateApi = `${baseUrl}top_rated${apiKey}`



function showtop__rate(){
 gettop__rate(rendertop__rate)
}

function rendertop__rate(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide"  onclick='showDetail(${movie.id})'>
      <img src="${imgApi}w200${movie.poster_path}">
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  top__rate.innerHTML = htmls.join('')
  const slides = document.querySelectorAll('.swiper-slide')
  const overlay = document.querySelector('.overlay__content')
  const close = document.querySelector('.close')
  for (const slide of slides ){
    slide.addEventListener('click',() => {
      overlay.classList.add('show')
    })
  }
}

function gettop__rate(callback){
   fetch(top__rateApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showtop__rate()


