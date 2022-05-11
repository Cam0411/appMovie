const upcoming__movie = document.querySelector('.upcoming__movie .swiper-wrapper')
const upcoming__movieApi = `${baseUrl}upcoming${apiKey}`


function showupcoming__movie(){
 getupcoming__movie(renderupcoming__movie)
}

function renderupcoming__movie(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide">
      <a href='detail/${movie.id}' ><img src="${imgApi}w200${movie.poster_path}"></a>
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  upcoming__movie.innerHTML = htmls.join('')
}

function getupcoming__movie(callback){
   fetch(upcoming__movieApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showupcoming__movie()