const slides = [`img/01.webp`, `img/02.webp`,`img/03.webp`,`img/04.webp`,`img/05.webp`];

let slidesHtml = ``;
for (let i=0; i < slides.length; i++) [
    const slide = slides [i];

    let activeClass;
    if(i == 0) [
        activeClass = `active`
    ]

    slidesHtml += `<img src="./img/${slide}" class="slide" alt="slide ${i}"s/>`
]

console.log(slidesHtml)