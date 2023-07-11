console.log("Welcome to Soundify");

//Initilizes the variable
let songIndex = 0;
let audioElement=new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName= document.getElementById('masterSongName');
let songItem =Array.from(document.getElementsByClassName('songItem'));

let songs =[
    {songName:" Phir Aur kya Chaiye" , filePath:"song/1.mp3" , coverPath:"Poster/Phir.jpg"},
    {songName:" O Bedardeya" , filePath:"song/2.mp3" , coverPath:"Poster/O-Bedardeya.jpg"},
    {songName:" Deva Deva" , filePath:"song/3.mp3" , coverPath:"Poster/Deva-Deva.jpg"},
    {songName:" Tera Hawale" , filePath:"song/4.mp3" , coverPath:"Poster/Tere-Hawaale.jpg"},
    {songName:" Pyaar Hota Hai" , filePath:"song/5.mp3" , coverPath:"Poster/Pyaar-Hota-Kayi-Baar.jpg"},
    {songName:" Apna Bana Le Piya" , filePath:"song/6.mp3" , coverPath:"Poster/Apna.jpg"},
    {songName:" Jhoome Jo Pathaan" , filePath:"song/7.mp3" , coverPath:"Poster/Jhoom.jpg"},
    {songName:" Khairiyat" , filePath:"song/8.mp3" , coverPath:"Poster/Khairiyat.jpg"},
    {songName:" Shayad" , filePath:"song/9.mp3" , coverPath:"Poster/shayad.jpg"},
    {songName:" Tum hi ho" , filePath:"song/10.mp3" , coverPath:"Poster/tum.jpeg"},
]
songItem.forEach((element, i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
})

//audioElement.play();
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//listen to events
audioElement.addEventListener('timeupdate', ()=>{
    
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change' , ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;

})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText =songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })


})
document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText =songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -=1
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})