const trending = document.querySelector('.trending__movie  .swiper-wrapper')
const trendingApi = `${baseUrl}popular${apiKey}`



function showTrending(){
 getTrending(renderTrending)
}

function renderTrending(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide">
      <img src="${imgApi}w200${movie.poster_path}">
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  trending.innerHTML = htmls.join('')
}

function getTrending(callback){
   fetch(trendingApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showTrending()


