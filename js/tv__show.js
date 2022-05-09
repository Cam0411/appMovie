const tv__show = document.querySelector('.tv__show .swiper-wrapper')
const tv__showApi = `https://api.themoviedb.org/3/tv/popular?api_key=d446dfce025a6b8b811140d296404e39`

function showtv__show(){
 gettv__show(rendertv__show)
}

function rendertv__show(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide">
      <img src="${imgApi}w200${movie.poster_path}">
      </div>
      `
  })
  tv__show.innerHTML = htmls.join('')
}

function gettv__show(callback){
   fetch(tv__showApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showtv__show()