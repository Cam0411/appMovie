const lastest = document.querySelector('.lastest__movie  .swiper-wrapper')
const lastestApi = `${baseUrl}now_playing${apiKey}`



function showlastest(){
 getlastest(renderlastest)
}

function renderlastest(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide">
      <img src="${imgApi}w200${movie.poster_path}">
      </div>
      `
  })
  lastest.innerHTML = htmls.join('')
}

function getlastest(callback){
   fetch(lastestApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showlastest()
