const lastest = document.querySelector('.lastest__movie  .swiper-wrapper')
const lastestApi = `${baseUrl}now_playing${apiKey}`



function showlastest(){
 getlastest(renderlastest)
}

function renderlastest(movies){
  const htmls = movies.results.map(movie => {
      return ` 
  
      <div class="swiper-slide"  onclick='showDetail(${movie.id})'>
      <img src="${imgApi}w200${movie.poster_path}">
      <p class='title__movies'> ${movie.title}</p>
      </div>
      `
  })
  lastest.innerHTML = htmls.join('')
  const slides = document.querySelectorAll('.swiper-slide')
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

function getlastest(callback){
   fetch(lastestApi)
   .then(response => {return response.json('')})
   .then(callback)
}

showlastest()
