const top__rate__tv = document.querySelector('.top__rate__tv .swiper-wrapper')
const top__rate__tvApi = `https://api.themoviedb.org/3/tv/top_rated?api_key=d446dfce025a6b8b811140d296404e39`



function showtop__rate__tv(){
 gettop__rate__tv(rendertop__rate__tv)
}

function rendertop__rate__tv(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide">
      <img src="${imgApi}w200${movie.poster_path}">
      </div>
      `
  })
  top__rate__tv.innerHTML = htmls.join('')
}

function gettop__rate__tv(callback){
   fetch(top__rate__tvApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showtop__rate__tv()