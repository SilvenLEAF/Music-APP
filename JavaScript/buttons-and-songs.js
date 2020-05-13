//Here we have all the Songs
window.onload = ()=>{

     let http = new XMLHttpRequest();


     //async
     http.onreadystatechange = ()=>{
          if(http.readyState == 4 && http.status == 200){

               json = JSON.parse(http.response);

               songList = json.jsongs;







































               /* **************************************************
               .                               ALL GLOBAL VARIABLES
               ************************************************** */
               //JavaScript
               let uta = new Audio();
               let playingSongNum = -1;
               let playing =true;
               let repeating = 'all';
               let shuffleState = false;




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
               const cogs= document.querySelector('.fa-cogs');
               const angleDown= document.querySelector('.fa-angle-down');

               //Controls
               const play= document.querySelector('#play');
               const next= document.querySelector('#next');
               const prev= document.querySelector('#prev');

               const repeatBtn = document.querySelector('#repeat');
               const shuffleBtn = document.querySelector('#shuffle');
               const like= document.querySelector('#like');
               const likedSongsBtn = document.querySelector('#liked-songs-btn');


               //Controls (Play Next Prev) + Settings
               const allBtns= document.querySelectorAll('.btn');
               //------------------------------------------------------------------------------



               //---------------------Song List Section Page------------------------------
               //Song-List-Section
               const songListSectionPage= document.querySelector('.song-list-section');

               //Page Close
               const songListClose= document.querySelector('.song-list-close');

               //Song Search
               const searchBox = document.querySelector('.song-search-granpa');
               const search= document.querySelector('.song-search-papa');
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
               const settingsPage = document.querySelector('.settings');

               //Page Close
               const settingsClose= document.querySelector('.settings-close');

               //Settings Options
               const settingsInput = document.querySelectorAll('.settings-input');

               const containerBGbutton = document.querySelector('.containerBG-button');
               const songListBGbutton = document.querySelector('.songListBG-button');
               const settingsBGbutton = document.querySelector('.settingsBG-button');


               const buttonBGbutton = document.querySelector('.buttonBG-button');
               const songElementBGbutton = document.querySelector('.songElementBG-button');

               const countedSongDisplay = document.querySelector('.count-songs');
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

               function songListOpen(){

                    songListSectionPage.classList.add('active');
                         setTimeout(()=>{
                              containerSectionPage.classList.remove('Cactive');
                         }, 100)
                         setTimeout(()=>{
                              containerSectionPage.style.zIndex = '100';
                              songListSectionPage.style.zIndex = '10';
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

               function likeStore(){
                    if(songList[playingSongNum].liked){
                         like.style.color ='red';
                    }else{
                         like.style.color ='#fff';
                    }
               }

               function toggleLike(){

                    if(songList[playingSongNum].liked){
                         songList[playingSongNum].liked = false;
                         like.style.color ='#fff';
                    }else{
                         songList[playingSongNum].liked = true;
                         like.style.color ='red';
                    }
                    // if(like.style.color ==='red'){
                    //   like.style.color ='#fff';
                    // } else{
                    //      like.style.color ='red';
                    // }

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

               //--------------------------------Song Counter------------------------------
               countedSongDisplay.textContent = songList.length;
               //------------------------------------------------------------------------------



               //-------------OPEN-CLOSE Song List Section Page----------------
               //Angle icon in the Container Page
               angleDown.addEventListener('click', ()=>{
                    songSearchInput.value = '';
                    songListOpen();
               });

               //Song List Section Close
               songListClose.addEventListener('click', ()=>{
                    songListSectionPageClose();

                    if(playingSongNum == -1){
                         playingSongNum = 0;
                         uta.src = songList[playingSongNum].song;
                         uta.play();
                         playing = true;
                    }

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

                    songSearchInput.focus();
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
                    carouselCardImg[j].src = songList[0].image;
               }
               //------------------------------------------------------------------------------



               //----------------------Song List SONG OPTION-------------------------
               //Song list el
               for(let i=0; i<songEl.length; i++){
                    songEl[i].addEventListener('click', ()=>{
                         playingSongNum = i;


                         play.classList.remove('fa-play');
                         play.classList.add('fa-pause');

                         playing = true;

                         songListSectionPageClose();
                         likeStore();
                         songChange();

                         songSearchInput.value = '';


                              setTimeout(()=>{
                                   songSearchHide();
                                   for(let i=0; i<songEl.length; i++){
                                        songEl[i].style.display = 'flex';
                                   }
                              }, 900)



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
                    if(shuffleState){
                         let randomShuffleNum = Math.floor(Math.random()*songList.length);
                         playingSongNum = randomShuffleNum;
                    }else{
                         if(playingSongNum<songList.length -1){
                              playingSongNum++;
                         }else{
                              playingSongNum =0;
                         }
                    }

                    likeStore();
                    songChange();

                    playing=true;

                    play.classList.remove('fa-play');
                    play.classList.add('fa-pause');
               });

               //Prev
               prev.addEventListener('click', ()=>{
                    if(shuffleState){
                         let randomShuffleNum = Math.floor(Math.random()*songList.length);
                         playingSongNum = randomShuffleNum;
                    }else{
                         if(playingSongNum >0){
                              playingSongNum--;
                         }else{
                              playingSongNum =songList.length -1;
                         }
                    }
                    likeStore();
                    songChange();

                    playing=true;

                    play.classList.remove('fa-play');
                    play.classList.add('fa-pause');

               });

               //Favourite Songs List
               likedSongsBtn.addEventListener('click', ()=>{
                    for(let i=0; i<songList.length; i++){
                         if(songList[i].liked){
                              songEl[i].style.display = 'flex';
                         } else {
                              songEl[i].style.display = 'none';
                         }

                         songListOpen();

                    }
               })

               //Shuffle
               shuffleBtn.addEventListener('click', ()=>{
                    if(repeating !== 'one'){
                         if(shuffleState){
                              shuffleState = false;
                              shuffleBtn.textContent = 'off';
                         } else{
                              shuffleState = true;
                              shuffleBtn.textContent = 'on';
                         }
                    }else{
                         shuffleState = false;
                    }
               })




               //.                                     REPEAT
               //------------------------------------------------------------------------------
               //repeatBtn changing the deciding variable of Repeat
               repeatBtn.addEventListener( 'click', ()=>{

                    if (repeating === 'all'){

                         repeatBtn.textContent = '1';
                         //turned into Repeat ONE
                         repeating = 'one';

                    } else if (repeating === 'one'){

                         repeatBtn.textContent = 'none';
                         //turned into Repeat NONE
                         repeating = 'none';

                    }else if (repeating === 'none'){

                         repeatBtn.textContent = 'all';
                         //Turned into Repeat ALL
                         repeating = 'all';

                    }


               })

               //On Song END (Repeat or Not)
               uta.addEventListener('ended', ()=>{

                    if(shuffleState){
                         let randomShuffleNum = Math.floor(Math.random()*songList.length);

                         playingSongNum = randomShuffleNum;

                    }else{

                         if (repeating === 'all'){

                              //Repeat ALL
                              if(playingSongNum < songList.length - 1){
                                   playingSongNum +=1;
                              } else{
                                   playingSongNum = 0;
                              }

                              //Song songChange
                              // songChange();


                         } else if (repeating === 'one'){

                              //Repeat ONE
                              playingSongNum *= 1;

                              //Song songChange
                              // songChange();
                         }
                    }

                    songChange();

               });
               //------------------------------------------------------------------------------

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





























          }
     }

     //letter
     http.open('GET', 'JavaScript/songs.json', true);
     http.send();
}
