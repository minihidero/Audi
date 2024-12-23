const slides = document.getElementsByClassName('slide');
const slideInfo = document.getElementById('slide-info');
const slideDescriptions = document.querySelectorAll('.slide-description');  // Все текстовые описания
let x = 0;

// Функция для перехода к следующему слайду
function nextSlide() {
    hide(slides[x].classList, '100vw');
    hide(slideDescriptions[x].classList, '100vw');
    x++;
    if (x >= slides.length) {
        x = 0;
    }
    show(slides[x].classList, '-100vw');
    show(slideDescriptions[x].classList, '-100vw');
    updateSlideInfo();
}

function prevSlide() {
    hide(slides[x].classList, '-100vw');
    hide(slideDescriptions[x].classList, '-100vw');
    x--;
    if (x < 0) {
        x = slides.length - 1;
    }
    show(slides[x].classList, '100vw');
    show(slideDescriptions[x].classList, '100vw');
    updateSlideInfo();
}

function updateSlideInfo() {
    slideInfo.textContent = `${x + 1} слайд из ${slides.length}`;
}

function hide(classL, n) {
    document.documentElement.style.setProperty('--pos', n);
    setTimeout(() => {
        classL.remove('active');
        document.documentElement.style.setProperty('--pos', 0);
    }, 500);
}

function show(classL, n) {
    document.documentElement.style.setProperty('--pos', n);
    classL.add('active');
    setTimeout(() => {
        document.documentElement.style.setProperty('--pos', 0);
    }, 20);
}

const prevButton = document.getElementById('act-btn-prev');
const nextButton = document.getElementById('act-btn-next');

// Обработчики событий для кнопок
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);
