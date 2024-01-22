const slides = [`img/01.webp`, `img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];

let slidesHtml = ``;


const sliderImages = document.querySelector('.immagini');
const btnUp = document.querySelector('.arrow-up');
const btnDown = document.querySelector('.arrow-down');


for (let i=0; i < slides.length; i++) {

    const slide = slides [i];

    let activeClass = "";
    if(i == 0) {
        activeClass = "active";
        }
        
        console.log(i, activeClass)
    slidesHtml += `<img src="./${slide}" class="slide ${activeClass}" alt="slide ${i}"s/>`;
}

console.log(slidesHtml)

sliderImages.innerHTML = slidesHtml;



let currentImage = 0;


// bottone down

btnDown.addEventListener("click", function(){

    const images = document.querySelectorAll(".slide");
    console.log(images)

    const test = images[currentImage];
    console.log(test)

    test.classList.remove("active");

    currentImage++;


    if (currentImage==slides.length){
        currentImage=0;
    } 

    images[currentImage].classList.add("active");
})



// bottone up

btnUp.addEventListener("click", function(){

    const images = document.querySelectorAll(".slide");
    console.log(images)

    const test = images[currentImage];
    console.log(test)

    test.classList.remove("active");

    currentImage--;


    if (currentImage < 0){
        currentImage= slides.length - 1;
    } 

    images[currentImage].classList.add("active");
})




// setInterval per implementare la funzione all'infinito ogni 3 secondi

// per fermare setInterval utilizzo    clearInterval(clock);



// esercizio di stamattina

setInterval(function() {
    const currentPhoto = document.querySelectorAll(".slide");
    currentPhoto.classList.remove("active");

    if (photoView >= slides.length - 1){
        photoView = 0;
    } else {
        photoView++;
    }

    const otherPhoto = document.getElementsByClassName(".slide");
    const newPhoto = otherPhoto[photoView];
    newPhoto.classList.add("active");
}, 3000);