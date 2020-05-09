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
          name: 'ステンダプ',
          image: 'anime/dg2.jpg',
          time: '4:28',
          song: 'songs/dgstup.mp3'
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
     },
     {
          name: 'シンカのクロス',
          image: 'anime/dg2.jpg',
          time: '4:36',
          song: 'songs/digiX.mp3'
     },
     {
          name: '舞湯者',
          image: 'anime/tg.jpg',
          time: '4:49',
          song: 'songs/x5.mp3'
     },
     {
          name: 'ステンダプ',
          image: 'anime/bha.jpg',
          time: '4:18',
          song: 'songs/xhearts.mp3'
     },
     {
          name: '保護者',
          image: 'anime/dg2.jpg',
          time: '4:25',
          song: 'songs/x4b.mp3'
     },
     {
          name: 'ドクターストーン',
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
let songSection= document.querySelector('.song-list-section');
let containerSection= document.querySelector('.container');
let settingSection = document.querySelector('.settings');


/* *******************************************************
************************ONCLICKS*********************** */



// ----------------------------OPEN CLOSE (SONG LIST)
//angle
let angleDown= document.querySelector('.fa-angle-down');

angleDown.addEventListener('click', ()=>{

     songSection.classList.add('active');

          setTimeout(()=>{
               containerSection.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSection.style.zIndex = '100';
               songSection.style.zIndex = '10';
          }, 1000)
});

//song list close
let songListClose= document.querySelector('.song-list-close');
songListClose.addEventListener('click', ()=>{
     songSectionClose();

});





// ----------------------------OPEN CLOSE (SETTINGS)
//cogs
let cogs= document.querySelector('.fa-cogs');

cogs.addEventListener('click', ()=>{

     settingSection.classList.add('Sactive');

          setTimeout(()=>{
               containerSection.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSection.style.zIndex = '100';
               settingSection.style.zIndex = '10';
          }, 1000)
});



//settings close
let settingsClose= document.querySelector('.settings-close');
settingsClose.addEventListener('click', ()=>{
     settingSectionClose();

});

//***************************************
/* ------------------------------------------
SONG SECTION CLOSE (to be used)
------------------------------------------ */
function songSectionClose(){

          containerSection.classList.add('Cactive');

          setTimeout(()=>{
               songSection.classList.remove('active');
          }, 100)

          setTimeout(()=>{
               songSection.style.zIndex = '100';
               containerSection.style.zIndex = '10';
          }, 1000)
}
/* ------------------------------------------
SONG SECTION CLOSE (to be used)
------------------------------------------ */
function settingSectionClose(){

          containerSection.classList.add('Cactive');

          setTimeout(()=>{
               settingSection.classList.remove('Sactive');
          }, 100);

          setTimeout(()=>{
               settingSection.style.zIndex = '100';
               containerSection.style.zIndex = '10';
          }, 1000)
}
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

          songSectionClose();

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

/* -----------------------------------------------------------------------
.                                  SETTINGS
------------------------------------------------------------------------ */

//**************SETTINGS INPUT PLACEHOLDERS
let settingsInput = document.querySelectorAll('.settings-input');

for(let i=0; i<settingsInput.length; i++){
     settingsInput[i].placeholder = 'Type a Color';
}

//---------------ContainerBG
let containerBG= document.querySelector('.container');
let containerBGbutton = document.querySelector('.containerBG-button');

containerBGbutton.addEventListener('click', ()=>{
     let userContainerBG= document.querySelector('.containerBG-input').value;
          settingSectionClose();

          containerBG.style.background = userContainerBG;

})
//---------------SongListBG
let songListBG= document.querySelector('.song-list-section');
let songListBGbutton = document.querySelector('.songListBG-button');

songListBGbutton.addEventListener('click', ()=>{
     let userSongListBG= document.querySelector('.songListBG-input').value;
          settingSectionClose();

          songListBG.style.background = userSongListBG;

})

//---------------SettingsBG
let settingsBG= document.querySelector('.settings');
let settingsBGbutton = document.querySelector('.settingsBG-button');

settingsBGbutton.addEventListener('click', ()=>{
     let userSettingsBG= document.querySelector('.settingsBG-input').value;

          settingsBG.style.background = userSettingsBG;

})

//---------------SongElementBG
let songElementBG= document.querySelectorAll('.song-el');
let songElementBGbutton = document.querySelector('.songElementBG-button');

songElementBGbutton.addEventListener('click', ()=>{
     let userSongElementBG= document.querySelector('.songElementBG-input').value;

          for(let i=0; i<songElementBG.length; i++){
               songElementBG[i].style.background = userSongElementBG;
          }

          settingSectionClose();

});

//---------------ButtonBG
let buttonBG= document.querySelectorAll('.btn');
let buttonBGbutton = document.querySelector('.buttonBG-button');

buttonBGbutton.addEventListener('click', ()=>{
     let userButtonBG= document.querySelector('.buttonBG-input').value;
          settingSectionClose();

          for(let i=0; i<songElementBG.length; i++){
               buttonBG[i].style.background = userButtonBG;
          };


});



/* ******************************************
.                                  KANJI
******************************************* */
let kanji = document.querySelector('h1');
let wrapper = document.querySelector('.wrapper');
let bgi = 'url("Styles/images-in-styles/bg.png") center/cover';
kanji.addEventListener('click', ()=>{
          if(wrapper.style.background == 'none'){
               wrapper.style.background = bgi;
          }else{
               wrapper.style.background = 'none';
          }
})
