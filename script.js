let index={};
let audioplayer= new Audio('song1.mp3');
let play=document.getElementById("playbutton");
let progressbar=document.querySelector(".range");
let pause=document.getElementById("hello");
let gifdisplay=document.getElementById("gif");
let songitem=Array.from(document.querySelectorAll(".songitem"));
let buttonname=document.querySelector(".buttonname");

//song list
let song=[
    {
        songnames:"Someone Else",
        filepath:"song1.mp3",
        coverpath:"img1.jpg",
    },
    {
        songnames:"Shooting Stars",
        filepath:"song2.mp3",
        coverpath:"img2.jpg",
    },
    {
        songnames:"Pillow Talk",
        filepath:"song3.mp3",
        coverpath:"img3.jpg",
    },
    {
        songnames:"Paro",
        filepath:"song4.mp3",
        coverpath:"img4.jpg",
    },
    {
        songnames:"Dead to me",
        filepath:"song5.mp3",
        coverpath:"img5.jpg",
    },
    {
        songnames:"My Ordinary Life",
        filepath:"song6.mp3",
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
    element.getElementsByClassName("songname")[0].innerText=song[i].songnames;
})
let ii,j;
songitem.forEach((element,i)=>{
    element.addEventListener('click',(e)=>{
        index=e.currentTarget.id;
        let index1=index.toString().split('');
        audioplayer.src='/'+index+'.mp3';
        audioplayer.currentTime=0;
        audioplayer.play();
        buttonname.innerHTML=song[index1[4]-1].songnames;
        gifdisplay.style.opacity=1; 
    })
})

document.getElementById("previous").addEventListener('click',(e)=>{
    let index1=index.toString().split('');
    let index2=parseInt(index1[4]);
    if(index2<0){
        index2=5;
    }
    else{
        index2=index2-1;
    }
    audioplayer.src='/song'+index2+'.mp3';
    audioplayer.currentTime=0;
    audioplayer.play();
    buttonname.innerHTML=song[index2-1].songnames;
    gifdisplay.style.opacity=1; 
})

document.getElementById("next").addEventListener('click',(e)=>{
    let index1=index.toString().split('');
    let index2=parseInt(index1[4]);
    if(index2>=5){
        index2=1;
    }
    else{
        index2=index2+1;
    }
    console.log(index2)
    audioplayer.src='/song'+index2+'.mp3';
    audioplayer.currentTime=0;
    audioplayer.play();
    
    buttonname.innerHTML=song[index2-1].songnames;
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