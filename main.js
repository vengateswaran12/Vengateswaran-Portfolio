            // hamBurger & menuBar

const menuButton=document.querySelector('.menu-button');
const menuBar=document.querySelector('.menu-button ul');
const hamBurger=document.createElement('style')
let menuStatus=false;
menuButton.addEventListener("click",()=>{
    menuBar.style.display='flex';
    if(!menuStatus){
        menuBar.style.right='0';
        menuStatus=true;
       hamBurger.innerHTML=`
        .menu-icon{
            background-color: transparent;
        }
        .menu-icon::after{
            transform: translateX(-20px) rotate(-45deg);
        }
        .menu-icon::before{
            transform: translateX(-20px) rotate(45deg);
        }`
    }
    else{
        menuBar.style.right='-110vw';
        menuStatus=false;
        hamBurger.innerHTML=`
        .menu-icon{
            background-color: block;
        }
        .menu-icon::after{
            transform: translate(-24px, 15px);
        }
        .menu-icon::before{
            transform: translate(-24px, -15px);
        }`
        menuBar.style.display='none';
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

            //animation

const aboutMe1=document.querySelector('.menu-aboutMe1');
const skills1=document.querySelector(".menu-skills1");
const project1=document.querySelector('.menu-project1');
const contact1=document.querySelector(".menu-contact1");
const aboutMe2=document.querySelector('.menu-aboutMe2');
const skills2=document.querySelector(".menu-skills2");
const project2=document.querySelector('.menu-project2');
const contact2=document.querySelector(".menu-contact2");
const card1=document.querySelector('.card1')
const card2=document.querySelector('.card2')
const card3=document.querySelector('.card3')
const card4=document.querySelector('.card4')
aboutMe1.addEventListener('click',()=>{
    card1.classList.add('showBottom')
    card2.classList.remove('showBottom')
    card3.classList.remove('showBottom')
    card4.classList.remove('showBottom')
})
skills1.addEventListener('click',()=>{
    card2.classList.add('showBottom')
    card1.classList.remove('showBottom')
    card3.classList.remove('showBottom')
    card4.classList.remove('showBottom')
})
project1.addEventListener('click',()=>{
    card3.classList.add('showBottom')
    card1.classList.remove('showBottom')
    card2.classList.remove('showBottom')
    card4.classList.remove('showBottom')
})
contact1.addEventListener('click',()=>{
    card4.classList.add('showBottom')
    card1.classList.remove('showBottom')
    card2.classList.remove('showBottom')
    card3.classList.remove('showBottom')
})
aboutMe2.addEventListener('click',()=>{
    card1.classList.add('showRight')
    card2.classList.remove('showRight')
    card3.classList.remove('showRight')
    card4.classList.remove('showRight')
})
skills2.addEventListener('click',()=>{
    card2.classList.add('showRight')
    card1.classList.remove('showRight')
    card3.classList.remove('showRight')
    card4.classList.remove('showRight')
})
project2.addEventListener('click',()=>{
    card3.classList.add('showRight')
    card1.classList.remove('showRight')
    card2.classList.remove('showRight')
    card4.classList.remove('showRight')
})
contact2.addEventListener('click',()=>{
    card4.classList.add('showRight')
    card1.classList.remove('showRight')
    card2.classList.remove('showRight')
    card3.classList.remove('showRight')
})


  
  