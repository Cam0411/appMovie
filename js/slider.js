const baseUrl = 'https://api.themoviedb.org/3/movie/'
const apiKey = '?api_key=d446dfce025a6b8b811140d296404e39'
const imgApi = "https://image.tmdb.org/t/p/"
const  slider = document.querySelector('.slider')

function showData(){
  const arr = [675353,335787,453395, 414906,634649,763285]
  const ranDom = Math.floor(Math.random() * arr.length)
  const sliderApi = `${baseUrl}${arr[ranDom]}${apiKey}`
  
function showData(){
    getData(renderApi)
}

  function renderApi(movie){
   
      const html = () => {

          return `
          <div class="slider__content">
          <div class="grid wide"> 
          <div class="row"> 
            <div class="col l-6 slider__txt"> 
              <p  class="title__movie">${movie.original_title} </p>
              <p class="title__overview">${movie.overview} </p>
              <ul class="title__box"> 
                <li><i class="fa-solid fa-circle-play"></i></i>Get Movie</li>
                <li><i class="fa-solid fa-circle-info"></i>View Info</li>
              </ul>
            </div>
            <div class="col l-6">
            <div class="img__content">
            <img src="${imgApi}w300${movie.poster_path}">
            
             </div>
            </div>
          </div>
          </div>
        </div>
          `
      }

      slider.style.background = `#000  url('${imgApi}original/${movie.backdrop_path}') `
      slider.style.backgroundSize = 'cover'
      slider.style.backgroundReapeat = 'no-repeat'
      slider.style.backgroundPosition = 'center'

      slider.innerHTML = html()
  }
  
  function getData(callback){
      fetch(sliderApi)
      .then(response => response.json(''))
      .then(callback)
  }
  showData()
}
 showData()
 