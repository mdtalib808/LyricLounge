//const music = new Audio('audio/13.mp3');
   // music.play();

  let currentSong ;
  let mstrSong;
 const songs = [
    {
        id: "1",
        songName: `Animal <br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/1.jpg "
       },
       {
        id: "2",
        songName: ` Zindagi Tera Naam  <br> 
        <div class="subtitle">Vishal Mishra</div>`,
        poster: "img/2.jpg"
       },
       {
        id: "3",
        songName: `Zaalim <br> 
        <div class="subtitle">Badshah</div>`,
        poster: "img/3.jpg"
       },
       {
        id: "4",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/4.jpg",

        
       },
       {
        id: "5",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/5.jpg"
       },
       {
        id: "6",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/6.jpg"
       },
       {
        id: "7",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/7.jpg"
       },
       {
        id: "8",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/8.jpg"
       },
       {
        id: "9",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/9.jpg"
       },
       {
        id: "10",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/10.jpg"
       },
       {
        id: "11",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/11.jpg"
       },
       {
        id: "12",
        songName: `Deen Assalam <br> 
        <div class="subtitle">Nissa Sabyan</div>`,
        poster: "img/12.jpg"
       },
       {
        id: "13",
        songName: `HUAA MAIN<br> 
        <div class="subtitle">Pritam Chakraborty</div>`,
        poster: "img/13.jpg"
       },
       {
        id: "14",
        songName: `O Maahi<br> 
        <div class="subtitle">Arijit Singh</div>`,
        poster: "img/14.jpg"
       },
       {
        id: "15",
        songName: `Bekhayali<br> 
        <div class="subtitle">Sachet Tandon</div>`,
        poster: "img/15.jpg"
       },
       {
        id: "16",
        songName: `Heeriye<br> 
        <div class="subtitle">Dulquer Salmaan</div>`,
        poster: "img/16.jpg"
       },
       {
        id: "17",
        songName: `Zihaal e Miskin<br> 
        <div class="subtitle">Javed-Mohsin</div>`,
        poster: "img/17.jpg"
       },
       {
        id: "18",
        songName: `Jhoome Jo Pathaan<br> 
        <div class="Sukriti Kakar</div>`,
        poster: "img/18.jpg"
       },
       {
        id: "19",
        songName: `Dil Jhoom<br> 
        <div class="subtitle">Mithoon</div>`,
        poster: "img/19.jpg"
       },
       {
        id: "20",
        songName: `Guli Mata<br> 
        <div class="subtitle">Saad Lamjarred</div>`,
        poster: "img/20.jpg"
       },
       {
        id: "21",
        songName: `Teri Jhuki Nazar> 
        <div class="subtitle">Pritam</div>`,
        poster: "img/21.jpg"
       },
       {
        id: "22",
        songName: `Raatan Lambiyan<br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster: "img/22.jpg"
       },
       {
        id: "23",
        songName: `Blue Eyes<br> 
        <div class="subtitle">Yo Yo Honey Singh</div>`,
        poster: "img/23.webp"
       },
       {
        id: "24",
        songName: `Lutt putt gaya<br> 
        <div class="subtitle">arijit singh</div>`,
        poster: "img/24.jpg"
       },
 ]

 

 songs.forEach((song,i) => {
  song['music'] = new Audio(`audio/${i}.mp3`);
 });

 console.log("songs here is " , songs);

 let masterPlays = document.querySelectorAll('.playlistPlay');
let mstrPlay = document.getElementById('masterplay');
let wave = document.querySelectorAll('.wavel');
console.log('wave here is ', wave);
console.log("master ", mstrPlay);


mstrPlay.classList.add('bi-play-fill');
mstrPlay.classList.remove('bi-pause-fill');

let isWavePlaying = false; 

mstrPlay.addEventListener('click', () => {
    console.log("masterplay button got clicked");
    console.log('currentSonghere is ', mstrSong);

    if (isWavePlaying) {
        mstrPlay.classList.add('bi-play-fill');
        mstrPlay.classList.remove('bi-pause-fill');
        songs[mstrSong].music.pause();
        wave.forEach((w) => {
            w.classList.remove('active1');
        });
        isWavePlaying = false;
    } else {
        mstrPlay.classList.remove('bi-play-fill');
        mstrPlay.classList.add('bi-pause-fill');
        songs[mstrSong].music.play();
        wave.forEach((w) => {
            w.classList.add('active1');
        });
        isWavePlaying = true;
    }
});

 //

 masterPlays.forEach((masterPlay, i) => {
  i=i;
  masterPlay.addEventListener('click', () => {
    console.log("music playing here");
    console.log("music here is ", songs[i].music);
    console.log("currentSong", currentSong);
    console.log("wave here is ", songs[i].music);
    if ((songs[i].music.paused || songs[i].music.currentTime <= 0) && currentSong == undefined) {
      console.log(i, "is coming")
      currentSong = i;

      songs[i].music.currentTime = 0; // Reset the currentTime to start from the beginning
      songs[i].music.play();
      mstrPlay.classList.remove('bi-play-fill');
      mstrPlay.classList.add('bi-pause-fill');
      wave.forEach((w) => {
        w.classList.add('active1');
      });
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
    } else if (currentSong != undefined && currentSong !== i) {
      console.log("came here", currentSong)
      songs[currentSong].music.pause();
      songs[i].music.currentTime = 0; // Reset the currentTime to start from the beginning
      songs[i].music.play();
      currentSong = i;
      wave.forEach((w) => {
        w.classList.add('active1');
      });

      mstrPlay.classList.remove('bi-play-fill');
      mstrPlay.classList.add('bi-pause-fill');

    } else {
      songs[i].music.pause();
      wave.forEach((w) => {
        w.classList.remove('active1');
      });
      mstrPlay.classList.add('bi-play-fill');
      mstrPlay.classList.remove('bi-pause-fill');
      currentSong = undefined;
    }
    mstrSong = i;
  });
});


  
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

console.log("pop_song_left ",pop_song_left);


pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 50;
});

pop_song_left.addEventListener('click', () => {
    console.log('clicked on song left');
    pop_song.scrollLeft -= 50;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Item = document.getElementsByClassName('Item ')[0];

pop_art_right.addEventListener('click', () => {
    Item .scrollLeft += 330;
});

pop_art_left.addEventListener('click', () => {
    Item .scrollLeft -= 330;
});


