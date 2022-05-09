const header = document.querySelector('.header')

function headerBox(){
   window.addEventListener('scroll',() => {
       if (window.pageYOffset > 100){
          header.classList.add('changebg')
       }else 
       {
           header.classList.remove('changebg')
       }
   })
}
headerBox()