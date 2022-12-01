// const video = document.getElementById('myVideo');

// const playButton = document.getElementById('play');

// function togglePlay() {
//     if (video.paused || video.ended) {
//       video.play();
//     } else {
//       video.pause();
//     }
//   }

// playButton.addEventListener('click', togglePlay);

// video.addEventListener('play', ()=>{playButton.classList.add('hidden');});
// video.addEventListener('pause', ()=>{playButton.classList.remove('hidden');});

//Swiper-code
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//Modal-cart
let x = true;
const modal = document.getElementById("modal");
const trigger = document.getElementById("myBtn");
const closeButton = document.querySelector(".close");

function toggleModal() {
    if (x) {
        modal.classList.toggle("show-modal");
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        x = false;
    }
    else {
        modal.classList.toggle("show-modal");
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        x = true;
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);

//modal request-dish

let y = true;
const scrollY = document.body.style.top;

const modal1 = document.getElementById("modal1");
const trigger1 = document.getElementById("myBtn2");
const closeButton1 = document.getElementById("close1");
const closeButton2 = document.getElementById("close2");

function toggleModal1() {
    if (y) {
        modal1.classList.toggle("show-modal");
        document.body.style.position = 'fixed';
        document.body.style.top = `-${window.scrollY}px`;
        y = false;
    }
    else {
        modal1.classList.toggle("show-modal");
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        y = true;
    }
}

trigger1.addEventListener("click", toggleModal1);
closeButton1.addEventListener("click", toggleModal1);
closeButton2.addEventListener("click", toggleModal1);