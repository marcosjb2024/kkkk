const cartoons = [
    { title: 'Kick Buttowski', image: 'img1.jpg', description: 'Descrição de Kick Buttowski', link: 'https://www.youtube.com/watch?v=3O-bYeKxwCE&pp=ygUUdW0gbWFsdWNvIG5vIHBlZGHDp28%3D' },
    { title: 'Um Maluco no Pedaço', image: 'img2.jpg', description: 'Descrição de Um Maluco no Pedaço', link: 'https://www.youtube.com/watch?v=XxNcfxDWDjI&pp=ygUUdW0gbWFsdWNvIG5vIHBlZGHDp28%3D' },
    { title: 'Eu, a Patroa e as Crianças', image: 'img3.jpg', description: 'Descrição de Eu, a Patroa e as Crianças', link: 'https://www.youtube.com/watch?v=CJQd99RApkE&pp=ygUUdW0gbWFsdWNvIG5vIHBlZGHDp28%3D' },
    { title: 'Super Choque', image: 'img4.jpg', description: 'Descrição de Super Choque', link: 'https://www.youtube.com/watch?v=cmCRyIxBE3s&pp=ygUUc3VwZXIgc2hvY2sgZXBpc29kZSA%3D' },
    { title: 'Hora de Aventura', image: 'img5.jpg', description: 'Descrição de Hora de Aventura', link: 'https://www.youtube.com/watch?v=tg7ovSctPX8&pp=ygUWYWR2ZW50dXJlIHRpbWUgZXBpc29kZQ%3D%3D' },
    { title: 'South Park', image: 'img6.jpg', description: 'Descrição de South Park', link: 'https://www.southparkstudios.com.br/episodios/38exov/south-park-o-problema-com-um-coco-temporada-22-ep-3?isRandom=true' },
    { title: 'Ben 10 Supremacia Alíenigena', image: 'img7.jpg', description: 'Descrição do Ben 10', link: 'https://www.youtube.com/watch?v=hNBDtBfv6wE&pp=ygUoYmVuIDEwIGVwaXPDs2RpbyBjb21wbGV0byBlbSBwb3J0dWd1w6pzIA%3D%3D' },
    { title: 'Mutante Rex', image: 'img8.jpg', description: 'Descrição do Mutante Rex', link: 'https://www.youtube.com/watch?v=XSL8YQVclb8&pp=ygUTbXV0YW50ZSByZXggZXBpc29kZQ%3D%3D' },
];

let currentSlide = 0;

function renderCartoons(cartoons) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';
    cartoons.forEach((cartoon, index) => {
        const slide = document.createElement('div');
        slide.className = 'carousel-slide';
        const image = document.createElement('img');
        image.src = cartoon.image;
        image.alt = cartoon.title;
        const title = document.createElement('h3');
        title.textContent = cartoon.title;
        const description = document.createElement('p');
        description.textContent = cartoon.description;
        const link = document.createElement('a');
        link.href = cartoon.link;
        link.textContent = 'Assista Aqui';
        slide.appendChild(image);
        slide.appendChild(title);
        slide.appendChild(description);
        slide.appendChild(link);
        carouselInner.appendChild(slide);
    });
}

function nextSlide() {
    currentSlide += 2;
    if (currentSlide >= cartoons.length) {
        currentSlide = 0;
    }
    renderCartoons(cartoons.slice(currentSlide, currentSlide + 2));
}

function prevSlide() {
    currentSlide -= 2;
    if (currentSlide < 0) {
        currentSlide = cartoons.length - 2;
    }
    renderCartoons(cartoons.slice(currentSlide, currentSlide + 2));
}

document.addEventListener('DOMContentLoaded', () => {
    renderCartoons(cartoons.slice(0, 2));
    const nextButton = document.querySelector('.carousel-next');
    const prevButton = document.querySelector('.carousel-prev');
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
});