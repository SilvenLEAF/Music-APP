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
const containerSectionPage = document.querySelector('.container');
const wrapper = document.querySelector('.wrapper');

//Sparkling and Kanji
let bgi = 'url("Styles/images-in-styles/bg.png") center/cover';
const kanji = document.querySelector('h1');

//carousel
const carouselCardDiv= document.querySelectorAll('.card');
const carouselCardImg= document.querySelectorAll('.card-img');

//Page Change Icons
let angleDown= document.querySelector('.fa-angle-down');
let cogs= document.querySelector('.fa-cogs');

//Controls
let play= document.querySelector('#play');
let next= document.querySelector('#next');
let prev= document.querySelector('#prev');
let like= document.querySelector('#like');

//Controls (Play Next Prev) + Settings
let allBtns= document.querySelectorAll('.btn');
//------------------------------------------------------------------------------



//---------------------Song List Section Page------------------------------
//Song-List-Section
let songListSectionPage= document.querySelector('.song-list-section');

//Page Close
let songListClose= document.querySelector('.song-list-close');

//Song Search
const searchBox = document.querySelector('.song-search-granpa');
let search= document.querySelector('.song-search-papa');
const songSearchInput = document.querySelector('.song-search-input');
const songSearchTogglerH = document.querySelector('.search-toggler');

//Song el holder
const listHolder = document.querySelector('.list-holder');


/* ------------------------------These Variables are defined later because
before creating the dynamic Song Options, I can not define it Here

const songEl= document.querySelectorAll('.song-el');
const songIconArr= document.querySelectorAll('.song-icon');
const songNameArr= document.querySelectorAll('.song-name');
const songTimeArr= document.querySelectorAll('.song-time');*/
//------------------------------------------------------------------------------



//--------------------------Settings Page-------------------------------------
//Settings Page
let settingsPage = document.querySelector('.settings');

//Page Close
let settingsClose= document.querySelector('.settings-close');

//Settings Options
let settingsInput = document.querySelectorAll('.settings-input');

let containerBGbutton = document.querySelector('.containerBG-button');
let songListBGbutton = document.querySelector('.songListBG-button');
let settingsBGbutton = document.querySelector('.settingsBG-button');


let buttonBGbutton = document.querySelector('.buttonBG-button');
let songElementBGbutton = document.querySelector('.songElementBG-button');
//------------------------------------------------------------------------------





/* **************************************************
.                           ALL TO-BE-USED FUNCTIONS
************************************************** */
function songListSectionPageClose(){

          containerSectionPage.classList.add('Cactive');

          setTimeout(()=>{
               songListSectionPage.classList.remove('active');
          }, 100)

          setTimeout(()=>{
               songListSectionPage.style.zIndex = '100';
               containerSectionPage.style.zIndex = '10';
          }, 1000)
}

function settingsPageClose(){

          containerSectionPage.classList.add('Cactive');

          setTimeout(()=>{
               settingsPage.classList.remove('Sactive');
          }, 100);

          setTimeout(()=>{
               settingsPage.style.zIndex = '100';
               containerSectionPage.style.zIndex = '10';
          }, 1000)
}

function songSearchHide(){
     searchBox.style.display = 'none';
     songSearchTogglerH.style.display = 'flex';
}

function songChange(){
     for (let j=0; j<carouselCardImg.length; j++){
          carouselCardImg[j].src = songList[playingSongNum].image;
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
.            DYNAMIC Song El (Song Option) Creator
************************************************** */

for(let i = 0; i<songList.length - 1; i++){
     const songElClone = document.querySelector('.song-el').cloneNode(true);
     listHolder.appendChild(songElClone);
}
/*Here we have a -1 because there is already a Song El present. So we need ! less*/

/* I can not define these variables before creating the elements they draw out from the DOM*/
//Song El (SONG OPTIONS)
const songEl= document.querySelectorAll('.song-el');
const songNameArr= document.querySelectorAll('.song-name');
const songIconArr= document.querySelectorAll('.song-icon');
const songTimeArr= document.querySelectorAll('.song-time');

/* **************************************************
.   Writing SONG Icon + Name + Time in the Song-List-Section
************************************************** */
for(let i=0; i<songList.length; i++){
     songNameArr[i].textContent = songList[i].name;
     songTimeArr[i].textContent = songList[i].time;
     songIconArr[i].style.backgroundImage = `url(${songList[i].image})`;
}



/* **************************************************
.                               REAL JavaScript STARTS
************************************************** */



//-------------OPEN-CLOSE Song List Section Page----------------
//Angle icon in the Container Page
angleDown.addEventListener('click', ()=>{

     songListSectionPage.classList.add('active');

          setTimeout(()=>{
               containerSectionPage.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSectionPage.style.zIndex = '100';
               songListSectionPage.style.zIndex = '10';
          }, 1000)
});

//Song List Section Close
songListClose.addEventListener('click', ()=>{
     songListSectionPageClose();

     songSearchInput.value = '';

          setTimeout(()=>{
          songSearchHide();
          for(let i=0; i<songEl.length; i++){
               songEl[i].style.display = 'flex';
          }
     }, 900)

});
//------------------------------------------------------------------------------



//-----------------OPEN-CLOSE Settings Page-----------------------
//Cogs
cogs.addEventListener('click', ()=>{

     settingsPage.classList.add('Sactive');

          setTimeout(()=>{
               containerSectionPage.classList.remove('Cactive');
          }, 100)
          setTimeout(()=>{
               containerSectionPage.style.zIndex = '100';
               settingsPage.style.zIndex = '10';
          }, 1000)
});

//Settings close
settingsClose.addEventListener('click', ()=>{
     settingsPageClose();

});
//------------------------------------------------------------------------------



//-----------------------------Song Search---------------------------------
//Song-Search Toggle (Reveal and Hide)
songSearchTogglerH.addEventListener('click', ()=>{
     searchBox.style.display = 'flex';
     songSearchTogglerH.style.display = 'none';
})

//Song-Search Filter
songSearchInput.addEventListener('keyup', (e)=>{
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
for (let j=0; j<carouselCardImg.length; j++){
     carouselCardImg[j].src = songList[playingSongNum].image;
}

uta.src = songList[playingSongNum].song;
//------------------------------------------------------------------------------



//----------------------Song List SONG OPTION-------------------------
//Song list el
for(let i=0; i<songEl.length; i++){
     songEl[i].addEventListener('click', ()=>{
          playingSongNum = i;

          songListSectionPageClose();

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
for(let i=0; i<carouselCardDiv.length; i++){
     carouselCardDiv[i].addEventListener('click', toggleLike);
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
          settingsPageClose();

          containerSectionPage.style.background = userContainerBG;

})

//---------------SongListBG
songListBGbutton.addEventListener('click', ()=>{
     let userSongListBG= document.querySelector('.songListBG-input').value;
          settingsPageClose();

          songListSectionPage.style.background = userSongListBG;

})

//---------------SettingsBG
settingsBGbutton.addEventListener('click', ()=>{
     let userSettingsBG= document.querySelector('.settingsBG-input').value;

          settingsPage.style.background = userSettingsBG;

})

//---------------SongElementBG
songElementBGbutton.addEventListener('click', ()=>{
     let userSongElementBG= document.querySelector('.songElementBG-input').value;

          for(let i=0; i<songEl.length; i++){
               songEl[i].style.background = userSongElementBG;
          }

          settingsPageClose();

});

//---------------ButtonBG
buttonBGbutton.addEventListener('click', ()=>{
     let userButtonBG= document.querySelector('.buttonBG-input').value;
          settingsPageClose();
          search.style.borderColor = userButtonBG;
          for(let i=0; i<allBtns.length; i++){
               allBtns[i].style.background = userButtonBG;
          };

          for(let j=0; j<carouselCardDiv.length; j++){
               carouselCardDiv[j].style.borderColor = userButtonBG;
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
