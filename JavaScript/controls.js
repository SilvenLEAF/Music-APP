
 var play= document.querySelector('#play')
play.addEventListener('click', ()=>{

      play.classList.toggle('fa-play')
      play.classList.toggle('fa-pause')

});

var like= document.querySelector('#like')
like.addEventListener('click', ()=>{

     if(like.style.color ==='red'){
          like.style.color ='black'
     } else{
          like.style.color ='red'
     }

});
