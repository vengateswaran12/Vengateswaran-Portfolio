// hamBurger & menuBar

const menuButton=document.querySelector('.menu-button');
const menuBar=document.querySelector('.menu-button ul');
const hamBurger=document.createElement('style')
let menuStatus=false;
menuButton.addEventListener("click",()=>{
    if(!menuStatus){
        menuBar.style.right='0';
        menuStatus=true;
       hamBurger.innerHTML=`
        .menu-icon{
            background-color: transparent;
        }
        .menu-icon::after{
            transform: translateX(-2.55vw) rotate(-45deg);
        }
        .menu-icon::before{
            transform: translateX(-2.55vw) rotate(45deg);
        }`
    }
    else{
        menuBar.style.right='-100vw';
        menuStatus=false;
        hamBurger.innerHTML=`
        .menu-icon{
            background-color: block;
        }
        .menu-icon::after{
            transform: translate(-2.55vw, 1.53vw);
        }
        .menu-icon::before{
            transform: translate(-2.55vw, -1.53vw);
        }`
    }
    document.head.appendChild(hamBurger);
})

// lite and dark mode slider

const slider=document.querySelector(".slider");
const slideButton=document.querySelector(".slider div")
const root=document.querySelector(':root');
let darkMode=true;
slider.addEventListener("click",()=>{
    if(darkMode){
        slideButton.style.transform='translateY(20px)';
        darkMode=false;
        root.style.setProperty('--COLOR','rgb(255, 168, 24)');
        root.style.setProperty('--BL','white');
        root.style.setProperty('--WH','black');
        root.style.setProperty('--BL_DULL','rgba(255 ,255 ,255, 0.9)');
        slideButton.innerHTML='<i class="fa-solid fa-sun"></i>'

    }else{
        slideButton.style.transform='translateY(-4px)';
        darkMode=true;
        root.style.setProperty('--COLOR','rgb(255, 168, 24)');
        root.style.setProperty('--BL','black');
        root.style.setProperty('--WH','white');
        root.style.setProperty('--BL_DULL','rgba(0, 0, 0, 0.9)');
        slideButton.innerHTML='<i class="fa-solid fa-moon"></i>'
    }
})

// name animation

const myName=document.querySelector('.home h1'); 
const word=myName.textContent;
const random='!@#$&*VENGATESWARAN';
const randomArray= random.split('');
let intervalId,intervalId2;
intervalId2=setInterval(()=>{
    intervalId=setInterval(function anime(){
        myName.textContent=displayRandomCharacters()
    },80)
setTimeout(function stop(){
    clearInterval(intervalId);
    myName.textContent='VENGATESWARAN';
},2000)
if(intervalId>=100){
    clearInterval(intervalId);
    myName.textContent='VENGATESWARAN';
    clearInterval(intervalId2);
}
},4000)

function displayRandomCharacters(){
    let randomWord = '';
    for (let i = 0; i < word.length; i++) {
        let randomChar = randomArray[Math.floor(Math.random() * word.length)];
        randomWord += randomChar;
    }
    return(randomWord);
}

// scroll animation
 
  
  
  
  