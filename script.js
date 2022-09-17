let index=0;
let audioplayer= new Audio('1.mp3');
let play=document.getElementById("playbutton");
let progressbar=document.querySelector(".range");
let pause=document.getElementById("hello");
let gifdisplay=document.getElementById("gif");
let songitem=Array.from(document.querySelectorAll(".songitem"));
let buttonname=document.querySelector(".buttonname");

//song list
let song=[
    {
        songname:"Someone Else",
        filepath:"1.mp3",
        coverpath:"img1.jpg",
    },
    {
        songname:"Shooting Stars",
        filepath:"2.mp3",
        coverpath:"img2.jpg",
    },
    {
        songname:"Pillow Talk",
        filepath:"3.mp3",
        coverpath:"img3.jpg",
    },
    {
        songname:"Paro",
        filepath:"4.mp3",
        coverpath:"img4.jpg",
    },
    {
        songname:"Dead to me",
        filepath:"5.mp3",
        coverpath:"img5.jpg",
    },
    {
        songname:"My Ordinary Life",
        filepath:"6.mp3",
        coverpath:"img1.jpg",
    }
]

pause.addEventListener('click',songplay)
function songplay(){
    if(audioplayer.paused || audioplayer.currentTime<=0)
    {
        audioplayer.play();
        gifdisplay.style.opacity=1;
    }
}
play.addEventListener('click',songpause)
function songpause(){
    if(audioplayer.play || audioplayer.currentTime>=0)
    {
        audioplayer.pause();
        gifdisplay.style.opacity=0;
    }
}

audioplayer.addEventListener('timeupdate',progressbardisplay)
function progressbardisplay(){
    let progress=parseInt(audioplayer.currentTime);
    progressbar.value=progress;
}

progressbar.addEventListener('change',change)
function change(){
    audioplayer.currentTime=progressbar.value;
}

songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=song[i].songname;
})
let ii,j;
songitem.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        index=parseInt(e.target.id);
        audioplayer.src=index+'.mp3';
        audioplayer.currentTime=0;
        audioplayer.play();
        buttonname.innerHTML=song[index-1].songname;
        gifdisplay.style.opacity=1; 
    })
})

document.getElementById("previous").addEventListener('click',(e)=>{
    index=parseInt(e.target.id);
    if(index<=0){
        index=0;
    }
    else{
        index-=1;
    }
    audioplayer.src=index+'.mp3';
    audioplayer.currentTime=0;
    audioplayer.play();
    buttonname.innerHTML=song[index-1].songname;
    gifdisplay.style.opacity=1; 
})

document.getElementById("next").addEventListener('click',(e)=>{
    index=parseInt(e.target.id);
    if(index>5){
        index=0;
    }
    else{
        index+=1;
    }
    audioplayer.src=index+'.mp3';
    audioplayer.currentTime=0;
    audioplayer.play();
    buttonname.innerHTML=song[index-1].songname;
    gifdisplay.style.opacity=1; 
})


function keyboard(event){
    if (event.keyCode === 32) { 
        event.preventDefault();
        if(audioplayer.paused) { 
            audioplayer.play() 
            gifdisplay.style.opacity=1;
        }
        else
        {audioplayer.pause()
            gifdisplay.style.opacity=0;
        }
      }
}