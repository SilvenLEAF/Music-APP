let songList = [
     {
          name: 'クロスウォーズ',
          image: 'anime/xwars.jpg',
          time: '4:18',
          song: 'songs/xwars.mp3'
     },
     {
          name: '未来の夢',
          image: 'anime/dm.jpg',
          time: '4:04',
          song: 'songs/dm.mp3'
     },
     {
          name: 'ピースサイン',
          image: 'anime/bha.jpg',
          time: '4:02',
          song: 'songs/peace-sign.mp3'
     },
     {
          name: '東京喰種',
          image: 'anime/tg.jpg',
          time: '3:55',
          song: 'songs/tg.mp3'
     },
     {
          name: 'ドクターストーン',
          image: 'anime/ds.jpg',
          time: '4:08',
          song: 'songs/s3.mp3'
     },
     {
          name: '若鶏烏',
          image: 'anime/hkyu.jpg',
          time: '4:02',
          song: 'songs/fly-high.mp3'
     },
     {
          name: 'ガチンコ',
          image: 'anime/bbg.jpg',
          time: '0:45',
          song: 'songs/bbg.mp3'
     },
     {
          name: '世界最強',
          image: 'anime/opm.jpg',
          time: '3:47',
          song: 'songs/hero.mp3'
     },
     {
          name: 'ポケットモンスター',
          image: 'anime/pk.jpg',
          time: '4:17',
          song: 'songs/pk.mp3'
     },
     {
          name: '僕等二人',
          image: 'anime/gto.png',
          time: '3:47',
          song: 'songs/gto.mp3'
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

for(let i=0; i<songList.length; i++){
     songNameArr[i].textContent = songList[i].name;
     songTimeArr[i].textContent = songList[i].time;
     iconArr[i].style.backgroundImage = `url(${songList[i].image})`;
}

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

     songSection.classList.add('active');

});

//close
let close= document.querySelector('.fa-close');

close.addEventListener('click', ()=>{

     songSection.classList.remove('active');


     // songSection.style.display = 'none';
     // containerSection.style.display = 'block';
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

          songSection.classList.remove('active');


          songChange();

     });
}
//--------------------------------------------------------------

//play
let play= document.querySelector('#play');
let playing =true;

play.addEventListener('click', ()=>{
     if(playing){
          play.classList.add('fa-play')
          play.classList.remove('fa-pause')

          uta.pause();
          playing = false;
     }else{
          play.classList.remove('fa-play')
          play.classList.add('fa-pause')

          uta.play();
          playing = true;
     }
});
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

     playing=true;

     play.classList.remove('fa-play')
     play.classList.add('fa-pause')
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

     playing=true;

     play.classList.remove('fa-play')
     play.classList.add('fa-pause')
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