//Here we have all the Songs
let songList = [
     {
          name: 'クロスウォーズ',
          image: 'anime/xwars.jpg',
          time: '4:18',
          song: 'songs/xwars.mp3',

          searchName: 'Digimon Xwars Digimon Fusion Never Give Up Nebagiba'
     },
     {
          name: '未来の夢',
          image: 'anime/dm.jpg',
          time: '4:04',
          song: 'songs/dm.mp3',

          searchName: 'Doraemon Yume wo Kanaete'
     },
     {
          name: 'ピースサイン',
          image: 'anime/bha.jpg',
          time: '4:02',
          song: 'songs/peace-sign.mp3',

          searchName: 'Boku no hero academia my hero academia bha mha Peace Sign'
     },
     {
          name: '東京喰種',
          image: 'anime/tg.jpg',
          time: '3:55',
          song: 'songs/tg.mp3',

          searchName: 'Tokyo ghoul Unravel'
     },
     {
          name: 'ステンダプ',
          image: 'anime/dg2.jpg',
          time: '4:28',
          song: 'songs/dgstup.mp3',

          searchName: 'Digimon Xwars Digimon Fusion Twill Stand Up'
     },
     {
          name: '若鶏烏',
          image: 'anime/hkyu.jpg',
          time: '4:02',
          song: 'songs/fly-high.mp3',

          searchName: 'Haikyuu Fly High'
     },
     {
          name: 'ガチンコ',
          image: 'anime/bbg.jpg',
          time: '0:45',
          song: 'songs/bbg.mp3',

          searchName: 'Beyblade Burst GT Gachi'
     },
     {
          name: '彗星女',
          image: 'anime/inzem.jpg',
          time: '4:27',
          song: 'songs/inzsg.mp3',

          searchName: 'Inazuma Eleven Inazuma 11 Suisei Girls'
     },
     {
          name: 'シンカのクロス',
          image: 'anime/dg2.jpg',
          time: '4:36',
          song: 'songs/digiX.mp3',

          searchName: 'Digimon Xwars Digimon Fusion Evolution and DigiX'

     },
     {
          name: '僕等二人',
          image: 'anime/gto.png',
          time: '3:47',
          song: 'songs/gto.mp3',

          searchName: 'GTO'
     },
     {
          name: 'インファルノ',
          image: 'anime/fire-force.jpg',
          time: '3:33',
          song: 'songs/fire-force.mp3',

          searchName: 'Fire Force OP'
     },
     {
          name: '雪女王',
          image: 'anime/fz.jpg',
          time: '3:45',
          song: 'songs/fz.mp3',

          searchName: 'Disney Frozen Let it go'
     },
     {
          name: 'クロスハートー',
          image: 'anime/dg2.jpg',
          time: '4:18',
          song: 'songs/xhearts.mp3',

          searchName: 'Digimon Xwars Digimon Fusion Cross Hearts X Hearts'

     },
     {
          name: '世界最強',
          image: 'anime/opm.jpg',
          time: '3:47',
          song: 'songs/hero.mp3',

          searchName: 'One Punch Man The Hero'
     },
     {
          name: 'サーマーゾムビ',
          image: 'anime/inzemart.jpg',
          time: '3:52',
          song: 'songs/inzsz.mp3',

          searchName: 'Inazuma Eleven Inazuma 11 Summer Zombie'
     },
     {
          name: '稲妻十一',
          image: 'anime/inz.png',
          time: '4:18',
          song: 'songs/inzop.mp3',

          searchName: 'Inazuma Eleven Inazuma 11 OP'
     },
     {
          name: 'ビマイライート',
          image: 'anime/bml.jpg',
          time: '3:14',
          song: 'songs/bml.mp3',

          searchName: 'Digimon Appli Monsters Be My Light'
     },
     {
          name: '舞勇者',
          image: 'anime/dg2.jpg',
          time: '4:49',
          song: 'songs/x5.mp3',

          searchName: 'Digimon Xwars Digimon Fusion Maiyuusha X5'
     },
     {
          name: 'バタフライ',
          image: 'anime/btfly.jpg',
          time: '4:17',
          song: 'songs/btfly.mp3',

          searchName: 'Digimon Butterfly'
     },
     {
          name: '保護者',
          image: 'anime/dg2.jpg',
          time: '4:25',
          song: 'songs/x4b.mp3',

          searchName: 'Digimon Xwars Digimon Fusion The Guardian X4B'
     },
     {
          name: 'ドクターストーン',
          image: 'anime/ds.jpg',
          time: '3:25',
          song: 'songs/ds.mp3',

          searchName: 'Doctor Stone'
     },
     {
          name: '不易な毎日',
          image: 'anime/tangled.jpg',
          time: '2:23',
          song: 'songs/tangled-when-will-my-life-begin.mp3',

          searchName: 'Disney Tangled'
     },
     {
          name: 'ポケットモンスター',
          image: 'anime/pk.jpg',
          time: '4:17',
          song: 'songs/pk.mp3',

          searchName: 'Pokemon Getta Ban Ban'
     },
     {
          name: 'オーバーロード',
          image: 'anime/overlord.jpg',
          time: '3:43',
          song: 'songs/overlord.mp3',

          searchName: 'Overlord'
     },
     {
          name: '壁',
          image: 'anime/haikyuuS3.jpg',
          time: '4:08',
          song: 'songs/s3.mp3',

          searchName: 'Haikyuu S3 End Haikyuu Season 3 Ending'
     },
     {
          name: 'ロスロスロス',
          image: 'anime/youjo-senki.jpg',
          time: '3:39',
          song: 'songs/los-los-los.mp3',

          searchName: 'Youjo Senki Los Los Los'
     },
     {
          name: '死神の世界',
          image: 'anime/death-note.jpg',
          time: '3:39',
          song: 'songs/death-note.mp3',

          searchName: 'Death Note OP'
     },
     {
          name: 'ヴェイル',
          image: 'anime/fire-force.jpg',
          time: '3:43',
          song: 'songs/fire-force-end.mp3',

          searchName: 'Fire Force End Veil Fire Force Ending '
     }

]





/* **************************************************
.                               ALL GLOBAL VARIABLES
************************************************** */
//JavaScript
let uta = new Audio();
let playingSongNum =11;
let playing =true;



//------------------------------Container Page---------------------------------
//Container and Wrapper
let containerSectionPage = document.querySelector('.container');
let wrapper = document.querySelector('.wrapper');

//Sparkling and Kanji
let bgi = 'url("Styles/images-in-styles/bg.png") center/cover';
let kanji = document.querySelector('h1');

//carousel
let carouselCard= document.querySelectorAll('.card');
let cardArr= document.querySelectorAll('.card-img');

//Page Change Icons
let angleDown= document.querySelector('.fa-angle-down');
let cogs= document.querySelector('.fa-cogs');

//Controls
let play= document.querySelector('#play');
let next= document.querySelector('#next');
let prev= document.querySelector('#prev');
let like= document.querySelector('#like')
//------------------------------------------------------------------------------



//---------------------Song List Section Page------------------------------
//Song-List-Section
let songListSection= document.querySelector('.song-list-section');

//Page Close
let songListClose= document.querySelector('.song-list-close');

//Song Search
const searchBox = document.querySelector('.song-search-granpa');
let search= document.querySelector('.song-search-papa');
const songSearchBar = document.querySelector('.song-search-input');
const searchToggler = document.querySelector('.search-toggler');

//Song el (SONG OPTIONS)
let songEl= document.querySelectorAll('.song-el');

let iconArr= document.querySelectorAll('.song-icon');
let songNameArr= document.querySelectorAll('.song-name');
let songTimeArr= document.querySelectorAll('.song-time');
//------------------------------------------------------------------------------



//--------------------------Settings Page-------------------------------------
//Settings Page
let settingSection = document.querySelector('.settings');
let settingsBG= document.querySelector('.settings');

//Page Close
let settingsClose= document.querySelector('.settings-close');

//Settings Options
let settingsInput = document.querySelectorAll('.settings-input');

let containerBGbutton = document.querySelector('.containerBG-button');
let songListBGbutton = document.querySelector('.songListBG-button');
let settingsBGbutton = document.querySelector('.settingsBG-button');


let buttonBG= document.querySelectorAll('.btn');
let buttonBGbutton = document.querySelector('.buttonBG-button');

let songElementBGbutton = document.querySelector('.songElementBG-button');





/* **************************************************
.                           ALL TO-BE-USED FUNCTIONS
************************************************** */
function songListSectionClose(){

          containerSectionPage.classList.add('Cactive');

          setTimeout(()=>{
               songListSection.classList.remove('active');
          }, 100)

          setTimeout(()=>{
               songListSection.style.zIndex = '100';
               containerSectionPage.style.zIndex = '10';
          }, 1000)
}

function settingSectionClose(){

          containerSectionPage.classList.add('Cactive');

          setTimeout(()=>{
               settingSection.classList.remove('Sactive');
          }, 100);

          setTimeout(()=>{
               settingSection.style.zIndex = '100';
               containerSectionPage.style.zIndex = '10';
          }, 1000)
}

function songSearchHide(){
     searchBox.style.display = 'none';
     searchToggler.style.display = 'flex';
}

function songChange(){
     for (let j=0; j<cardArr.length; j++){
          cardArr[j].src = songList[playingSongNum].image;
     }

     uta.src = songList[playingSongNum].song;
     uta.play();
}

function toggleLike(){

     if(like.style.color ==='red'){
          like.style.color ='#fff';
     } else{
          like.style.color ='red';
     }

}





/* **************************************************
.   Writing SONG Icon + Name + Time in the Song-List-Section
************************************************** */
for(let i=0; i<songList.length; i++){
     songNameArr[i].textContent = songList[i].name;
     songTimeArr[i].textContent = songList[i].time;
     iconArr[i].style.backgroundImage = `url(${songList[i].image})`;
}





/* **************************************************
.                               REAL JavaScript STARTS
************************************************** */



//-------------OPEN-CLOSE Song List Section Page----------------
//Angle icon in the Container Page
angleDown.addEventListener('click', ()=>{

     songListSection.classList.add('active');

          setTimeout(()=>{
               containerSectionPage.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSectionPage.style.zIndex = '100';
               songListSection.style.zIndex = '10';
          }, 1000)
});

//Song List Section Close
songListClose.addEventListener('click', ()=>{
     songListSectionClose();

     setTimeout(()=>{
          songSearchHide();
     }, 900)

});
//------------------------------------------------------------------------------



//-----------------OPEN-CLOSE Settings Page-----------------------
//Cogs
cogs.addEventListener('click', ()=>{

     settingSection.classList.add('Sactive');

          setTimeout(()=>{
               containerSectionPage.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSectionPage.style.zIndex = '100';
               settingSection.style.zIndex = '10';
          }, 1000)
});

//Settings close
settingsClose.addEventListener('click', ()=>{
     settingSectionClose();

});
//------------------------------------------------------------------------------



//-----------------------------Song Search---------------------------------
//Song-Search Toggle (Reveal and Hide)
searchToggler.addEventListener('click', ()=>{
     searchBox.style.display = 'flex';
     searchToggler.style.display = 'none';
})

//Song-Search Filter
songSearchBar.addEventListener('keyup', (e)=>{
     const searchTerm = e.target.value.toLowerCase();

     for(let i=0; i<songList.length; i++){
          const songTitle = songList[i].searchName.toLowerCase();

          if(songTitle.indexOf(searchTerm) != -1){
               songEl[i].style.display = 'flex';
          } else{
               songEl[i].style.display = 'none';
          }
     }



})
//------------------------------------------------------------------------------



//---------------------Default Song in Carousel---------------------------
for (let j=0; j<cardArr.length; j++){
     cardArr[j].src = songList[playingSongNum].image;
}

uta.src = songList[playingSongNum].song;
//------------------------------------------------------------------------------



//----------------------Song List SONG OPTION-------------------------
//Song list el
for(let i=0; i<songEl.length; i++){
     songEl[i].addEventListener('click', ()=>{
          playingSongNum = i;

          songListSectionClose();

          songChange();

     });
}
//------------------------------------------------------------------------------



//-------------------------CONTROLS--------------------------------------
//Play
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

//Next
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

//Prev
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

//Like
like.addEventListener('click', toggleLike);

//Carousel Like
for(let i=0; i<carouselCard.length; i++){
     carouselCard[i].addEventListener('click', toggleLike);
}
//------------------------------------------------------------------------------



//-------------------Settings Input Placeholders-------------------------
for(let i=0; i<settingsInput.length; i++){
     settingsInput[i].placeholder = 'Type a Color';
}
//------------------------------------------------------------------------------



//---------------------------Settings Options-------------------------------
//---------------ContainerBG
containerBGbutton.addEventListener('click', ()=>{
     let userContainerBG= document.querySelector('.containerBG-input').value;
          settingSectionClose();

          containerSectionPage.style.background = userContainerBG;

})

//---------------SongListBG
songListBGbutton.addEventListener('click', ()=>{
     let userSongListBG= document.querySelector('.songListBG-input').value;
          settingSectionClose();

          songListSection.style.background = userSongListBG;

})

//---------------SettingsBG
settingsBGbutton.addEventListener('click', ()=>{
     let userSettingsBG= document.querySelector('.settingsBG-input').value;

          settingsBG.style.background = userSettingsBG;

})

//---------------SongElementBG
songElementBGbutton.addEventListener('click', ()=>{
     let userSongElementBG= document.querySelector('.songElementBG-input').value;

          for(let i=0; i<songEl.length; i++){
               songEl[i].style.background = userSongElementBG;
          }

          settingSectionClose();

});

//---------------ButtonBG
buttonBGbutton.addEventListener('click', ()=>{
     let userButtonBG= document.querySelector('.buttonBG-input').value;
          settingSectionClose();
          search.style.borderColor = userButtonBG;
          for(let i=0; i<buttonBG.length; i++){
               buttonBG[i].style.background = userButtonBG;
          };

          for(let j=0; j<carouselCard.length; j++){
               carouselCard[j].style.borderColor = userButtonBG;
          };


});
//------------------------------------------------------------------------------



//-----------------------------KANJI-----------------------------------------
kanji.addEventListener('click', ()=>{
          if(wrapper.style.background == 'none'){
               wrapper.style.background = bgi;
          }else{
               wrapper.style.background = 'none';
          }
})
//------------------------------------------------------------------------------
