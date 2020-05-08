let songList = [
     {
          name: 'ピースサイン',
          image: 'anime/bha.jpg',
          time: '4:02',
          song: 'songs/peace-sign.mp3'
     },
     {
          name: 'Fly HIGH',
          image: 'anime/hkyu.jpg',
          time: '5:07',
          song: 'songs/fly-high.mp3'
     },
     {
          name: '世界最強',
          image: 'anime/ds.jpg',
          time: '4:08',
          song: 'songs/s3.mp3'
     }
]
/* *******************************************************
******************************************************** */

let cardArr= document.querySelectorAll('.card-img');
let iconArr= document.querySelectorAll('.song-icon');
let songTimeArr= document.querySelectorAll('.song-time');
let songNameArr= document.querySelectorAll('.song-name');

/* *******************************************************
.                                     SONG LIST NAME+TIME
******************************************************** */
     //------------default iconArr
     for (let i=0; i<iconArr.length; i++){
          iconArr[i].src = 'images/Glory-LOGO.jpg';
     }
     //-----------------------------------------


songNameArr[0].textContent = songList[0].name;
songTimeArr[0].textContent = songList[0].time;

songNameArr[1].textContent = songList[1].name;
songTimeArr[1].textContent = songList[1].time;

songNameArr[2].textContent = songList[2].name;
songTimeArr[2].textContent = songList[2].time;


/* *******************************************************
******************************************************** */

 //------------------------------------DOM DRAGGER
let uta = new Audio();

let elArr= document.querySelectorAll('.song-el');
let songSection= document.querySelector('.songs');
let containerSection= document.querySelector('.container');


/* *******************************************************
************************ONCLICKS*********************** */

// ----------------------------OPEN CLOSE
//angle
let angleDown= document.querySelector('.fa-angle-down');

angleDown.addEventListener('click', ()=>{
     songSection.style.display = 'block';
     containerSection.style.display = 'none';
});

//close
let close= document.querySelector('.fa-close');

close.addEventListener('click', ()=>{
     songSection.style.display = 'none';
     containerSection.style.display = 'block';
});
//***************************************


/* ------------------------------------------
.         SONG CHANGE (to be used)
------------------------------------------ */
function songChange(){
     for (let j=0; j<cardArr.length; j++){
          cardArr[j].src = songList[playingSongNum].image;
     }

     uta.src = songList[playingSongNum].song;
     uta.play();
}

//---------------------------------------deefault
let playingSongNum =0;
for (let j=0; j<cardArr.length; j++){
     cardArr[j].src = songList[playingSongNum].image;
}

uta.src = songList[playingSongNum].song;

//-----------------------------------------------------------------


/* *******************************************************
************************ONCLICKS 2.0******************* */
//song list el
for(let i=0; i<elArr.length; i++){
     elArr[i].addEventListener('click', ()=>{
          playingSongNum = i;

          songSection.style.display = 'none';
          containerSection.style.display = 'block';

          songChange();
     });
}
//--------------------------------------------------------------

//next
let next= document.querySelector('#next');

next.addEventListener('click', ()=>{
     if(playingSongNum<songList.length -1){
          playingSongNum++;
     }else{
          playingSongNum =0;
     }
     songChange();
});
//--------------------------------------------------------------

//prev
let prev= document.querySelector('#prev');

prev.addEventListener('click', ()=>{
     if(playingSongNum >0){
          playingSongNum--;
     }else{
          playingSongNum =songList.length -1;
     }
     songChange();
});
//--------------------------------------------------------------

//play
let play= document.querySelector('#play');
let playing =true;

play.addEventListener('click', ()=>{

     play.classList.toggle('fa-play')
     play.classList.toggle('fa-pause')

     if(playing){
          uta.pause();
          playing = false;
     }else{
          uta.play();
          playing = true;
     }
});
//--------------------------------------------------------------

//like
let like= document.querySelector('#like')
like.addEventListener('click', ()=>{

     if(like.style.color ==='red'){
          like.style.color ='black';
     } else{
          like.style.color ='red';
     }

});
